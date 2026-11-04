const navToggle = document.querySelector('[data-nav-toggle]');
const navigation = document.querySelector('[data-nav]');
const header = document.querySelector('[data-header]');
const progressBar = document.querySelector('[data-scroll-progress]');
const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
const faqButtons = [...document.querySelectorAll('.faq-item button')];
const whatsappHosts = new Set([
  'wa.me',
  'api.whatsapp.com',
  'web.whatsapp.com'
]);

document.addEventListener('click', (event) => {
  const target = event.target instanceof Element ? event.target : null;
  const link = target?.closest('a[href]');

  if (!link) return;

  let url;
  try {
    url = new URL(link.href, window.location.href);
  } catch {
    return;
  }

  if (!whatsappHosts.has(url.hostname.toLowerCase())) return;

  if (typeof window.fbq === 'function') {
    try {
      window.fbq('track', 'Contact', {
        content_name: 'WhatsApp Consultation',
        contact_method: 'WhatsApp'
      });
    } catch {
      // Keep the WhatsApp link functional if tracking is unavailable.
    }
  }
});

const setNavigation = (isOpen) => {
  navToggle?.setAttribute('aria-expanded', String(isOpen));
  navToggle?.setAttribute('aria-label', isOpen ? '关闭导航菜单' : '打开导航菜单');
  navigation?.classList.toggle('is-open', isOpen);
  document.body.classList.toggle('nav-open', isOpen);
};

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') !== 'true';
  setNavigation(isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => setNavigation(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setNavigation(false);
  }
});

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const shouldOpen = button.getAttribute('aria-expanded') !== 'true';

    faqButtons.forEach((otherButton) => {
      const answer = document.getElementById(otherButton.getAttribute('aria-controls'));
      const isCurrent = otherButton === button;
      const expanded = isCurrent ? shouldOpen : false;

      otherButton.setAttribute('aria-expanded', String(expanded));
      if (answer) {
        answer.hidden = !expanded;
      }
    });
  });
});

const updateScrollState = () => {
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = documentHeight > 0 ? Math.min(window.scrollY / documentHeight, 1) : 0;

  header?.classList.toggle('is-scrolled', window.scrollY > 16);
  if (progressBar) {
    progressBar.style.transform = `scaleX(${progress})`;
  }
};

let scrollFrame;
window.addEventListener('scroll', () => {
  if (scrollFrame) return;
  scrollFrame = window.requestAnimationFrame(() => {
    updateScrollState();
    scrollFrame = null;
  });
}, { passive: true });

updateScrollState();

const observedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleEntry) return;

    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute('href') === `#${visibleEntry.target.id}`;
      if (isCurrent) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }, {
    rootMargin: '-28% 0px -58% 0px',
    threshold: [0, 0.15, 0.45]
  });

  observedSections.forEach((section) => sectionObserver.observe(section));
}
