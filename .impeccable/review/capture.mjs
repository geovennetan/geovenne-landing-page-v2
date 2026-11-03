import { spawn } from 'node:child_process';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const projectRoot = path.resolve(process.cwd());
const reviewDir = path.join(projectRoot, '.impeccable', 'review');
const profileDir = path.join(reviewDir, 'chrome-profile');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9333;
const previewUrl = pathToFileURL(path.join(projectRoot, 'index.html')).href;

if (!profileDir.startsWith(projectRoot)) throw new Error('Chrome profile path escaped the project root.');

await mkdir(reviewDir, { recursive: true });
await rm(profileDir, { recursive: true, force: true });

const chrome = spawn(chromePath, [
  '--headless=new',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profileDir}`,
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
  '--hide-scrollbars',
  'about:blank'
], { stdio: ['ignore', 'pipe', 'pipe'] });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForDebugger() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (response.ok) return;
    } catch {
      // Chrome is still starting.
    }
    await sleep(100);
  }
  throw new Error('Chrome DevTools endpoint did not become ready.');
}

function connect(webSocketUrl) {
  const socket = new WebSocket(webSocketUrl);
  let nextId = 1;
  const pending = new Map();
  const listeners = new Map();

  const ready = new Promise((resolve, reject) => {
    socket.addEventListener('open', resolve, { once: true });
    socket.addEventListener('error', reject, { once: true });
  });

  socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result);
      return;
    }
    if (message.method && listeners.has(message.method)) {
      for (const listener of listeners.get(message.method)) listener(message.params);
    }
  });

  return {
    ready,
    send(method, params = {}) {
      const id = nextId;
      nextId += 1;
      return new Promise((resolve, reject) => {
        pending.set(id, { resolve, reject });
        socket.send(JSON.stringify({ id, method, params }));
      });
    },
    once(method) {
      return new Promise((resolve) => {
        const handler = (params) => {
          listeners.get(method)?.delete(handler);
          resolve(params);
        };
        if (!listeners.has(method)) listeners.set(method, new Set());
        listeners.get(method).add(handler);
      });
    },
    close() { socket.close(); }
  };
}

async function createPage() {
  const response = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(previewUrl)}`, { method: 'PUT' });
  if (!response.ok) throw new Error(`Unable to create Chrome tab: ${response.status}`);
  return response.json();
}

async function capture(name, width, height, mobile) {
  const target = await createPage();
  const client = connect(target.webSocketDebuggerUrl);
  await client.ready;
  await client.send('Page.enable');
  await client.send('Runtime.enable');
  await client.send('Network.enable');
  await client.send('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 1,
    mobile,
    screenWidth: width,
    screenHeight: height
  });

  const loadEvent = client.once('Page.loadEventFired');
  await client.send('Page.navigate', { url: previewUrl });
  await loadEvent;
  await client.send('Runtime.evaluate', {
    expression: 'document.fonts.ready.then(() => true)',
    awaitPromise: true,
    returnByValue: true
  });
  await client.send('Runtime.evaluate', {
    expression: `new Promise((resolve) => {
      const serviceImage = document.querySelector('.service-visual img');
      serviceImage?.scrollIntoView({ block: 'center' });
      const finish = () => setTimeout(resolve, 300);
      if (!serviceImage || (serviceImage.complete && serviceImage.naturalWidth > 0)) finish();
      else serviceImage.addEventListener('load', finish, { once: true });
    })`,
    awaitPromise: true,
    returnByValue: true
  });

  const auditResult = await client.send('Runtime.evaluate', {
    expression: `(() => {
      const expectedBase = 'https://wa.me/60163702666?text=';
      const whatsappLinks = [...document.querySelectorAll('a[href^="https://wa.me/"]')];
      const secondFaq = document.querySelector('#faq-question-2');
      secondFaq.click();
      const faqWorks = secondFaq.getAttribute('aria-expanded') === 'true' && !document.querySelector('#faq-answer-2').hidden;
      secondFaq.click();
      const navButton = document.querySelector('[data-nav-toggle]');
      let mobileNavWorks = true;
      if (matchMedia('(max-width: 859px)').matches) {
        navButton.click();
        mobileNavWorks = navButton.getAttribute('aria-expanded') === 'true' && document.querySelector('[data-nav]').classList.contains('is-open');
        navButton.click();
      }
      const image = document.querySelector('.portrait-frame img');
      const serviceImage = document.querySelector('.service-visual img');
      return {
        title: document.title,
        sections: document.querySelectorAll('main > section').length,
        faqs: document.querySelectorAll('.faq-item').length,
        whatsappLinks: whatsappLinks.length,
        whatsappValid: whatsappLinks.every((link) => link.href.startsWith(expectedBase)),
        imageLoaded: image.complete && image.naturalWidth > 0,
        serviceImageLoaded: serviceImage.complete && serviceImage.naturalWidth > 0,
        faqWorks,
        mobileNavWorks,
        horizontalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        viewport: { width: innerWidth, height: innerHeight }
      };
    })()`,
    returnByValue: true
  });

  const layout = await client.send('Page.getLayoutMetrics');
  const content = layout.cssContentSize;
  const fullShot = await client.send('Page.captureScreenshot', {
    format: 'png',
    fromSurface: true,
    captureBeyondViewport: true,
    clip: { x: 0, y: 0, width: content.width, height: content.height, scale: 1 }
  });
  await writeFile(path.join(reviewDir, `${name}.png`), Buffer.from(fullShot.data, 'base64'));

  const viewportShot = await client.send('Page.captureScreenshot', {
    format: 'png',
    fromSurface: true,
    captureBeyondViewport: true,
    clip: { x: 0, y: 0, width, height, scale: 1 }
  });
  await writeFile(path.join(reviewDir, `${name}-viewport.png`), Buffer.from(viewportShot.data, 'base64'));

  client.close();
  return { name, contentSize: content, audit: auditResult.result.value };
}

try {
  await waitForDebugger();
  const results = [];
  results.push(await capture('desktop', 1440, 960, false));
  results.push(await capture('mobile', 390, 844, true));
  console.log(JSON.stringify(results, null, 2));
} finally {
  chrome.kill();
  await sleep(250);
  await rm(profileDir, { recursive: true, force: true });
}
