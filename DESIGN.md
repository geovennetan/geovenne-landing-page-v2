---
name: "Geovenne Tan"
description: "A calm, editorial private-financial-consultation system built from paper, burgundy, real portraiture, and clear action."
colors:
  burgundy: "#701b35"
  burgundy-deep: "#3f101f"
  burgundy-soft: "#f5e9ed"
  ivory: "#f6f2ec"
  paper: "#fffdfa"
  white: "#ffffff"
  ink: "#272124"
  ink-soft: "#62595d"
  line: "#dfd5d8"
  line-on-dark: "rgba(255, 255, 255, 0.22)"
  focus-ring: "#c54b72"
typography:
  display:
    fontFamily: '"Noto Serif SC Local", "Songti SC", serif'
    fontSize: "clamp(3.15rem, 13vw, 5.85rem)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.03em"
  headline:
    fontFamily: '"Noto Serif SC Local", "Songti SC", serif'
    fontSize: "clamp(2.1rem, 7vw, 4.15rem)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.03em"
  title:
    fontFamily: '"Noto Serif SC Local", "Songti SC", serif'
    fontSize: "clamp(1.35rem, 4vw, 1.8rem)"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: '"Noto Sans SC Local", "Microsoft YaHei", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: '"Noto Sans SC Local", "Microsoft YaHei", sans-serif'
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.08em"
  action:
    fontFamily: '"Noto Sans SC Local", "Microsoft YaHei", sans-serif'
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.2
rounded:
  nav: "8px"
  image: "10px"
  control: "12px"
  surface: "14px"
  frame: "16px"
  pill: "999px"
  circle: "50%"
spacing:
  shell-mobile: "1rem"
  shell-wide: "1.5rem"
  grid: "1rem"
  card: "1.7rem"
  section: "clamp(5.5rem, 11vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.25rem"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.burgundy-deep}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.burgundy}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.25rem"
    height: "52px"
  button-secondary-hover:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.white}"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.burgundy-deep}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.25rem"
    height: "52px"
  button-light-hover:
    backgroundColor: "{colors.burgundy-deep}"
    textColor: "{colors.white}"
  service-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "1.7rem"
  service-card-featured:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.white}"
    rounded: "{rounded.surface}"
    padding: "1.7rem"
  process-step:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "1.6rem"
  faq-trigger:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "1.4rem 0"
---

# Design System: Geovenne Tan

## Overview

**Creative North Star: "The Private Consultation Folder / 私人理财会谈文件夹"**

The system should feel like a carefully prepared planning folder opened across a consultation table: calm, personal, evidence-led, and organized enough to make an unfamiliar financial conversation feel manageable. Paper and ivory fields create breathing room; burgundy behaves like a folder cover, annotation ink, and decisive action rather than a promise of financial spectacle.

Trust begins with the real advisor. The supplied Geovenne portrait is documentary evidence, not decorative stock imagery: preserve her identity and natural features, and use only crop, responsive sizing, a white mat, a burgundy offset plane, and restrained depth to integrate the photograph. The broader world rejects trading dashboards, performance theatrics, generic finance icon grids, fabricated testimonials, and imagery that implies guaranteed returns.

**Key Characteristics:**

- Paper-led editorial calm with a single burgundy action voice.
- Real portraiture before claims, especially in the mobile first viewport.
- Serif-led Chinese headlines paired with highly readable sans-serif explanations.
- Restrained 12–16px corners, thin rules, and soft offset shadows.
- Mobile-first actions, explicit focus states, and quiet motion that never competes with meaning.

## Colors

The palette is warm and fiduciary rather than corporate-blue: paper and ivory carry most of the page, burgundy marks identity and action, and near-black ink keeps long-form Chinese copy steady.

### Primary

- **Consultation Burgundy:** The main action, progress, featured service, closing panel, and annotation color.
- **Deep Folder Burgundy:** High-authority headings, dark trust sections, hover states, and the portrait experience badge.
- **Blush Paper:** A low-contrast burgundy tint for process fields, active navigation, and quiet structural zoning.

### Neutral

- **Warm Paper:** The default page and consultation-document ground.
- **Soft Ivory:** Alternate sections and supporting containers.
- **Clean White:** Card, portrait-mat, and inverse-action surface.
- **Primary Ink:** Main explanatory copy and controls.
- **Soft Ink:** Supporting paragraphs, labels, and lower-emphasis information.
- **Warm Rule:** Dividers and quiet boundaries on light surfaces.
- **Rule on Dark:** Translucent separators over burgundy and footer fields.
- **Visible Focus Rose:** Keyboard focus only; it must remain visually distinct from both paper and burgundy.

### Named Rules

**The Burgundy Annotation Rule.** Burgundy carries decisions, annotations, and action; it does not become generic decoration sprayed across every surface.

## Typography

**Display Font:** Noto Serif SC Local variable (with Songti SC and generic serif fallbacks)  
**Body Font:** Noto Sans SC Local variable (with Microsoft YaHei and generic sans-serif fallbacks)

**Character:** The local variable-font pairing gives Chinese copy an editorial, established voice without sacrificing practical mobile readability. Serif belongs to the major promise, section headlines, and service titles; sans-serif carries explanation, navigation, controls, and risk language. Georgia appears only in a few Latin-name and numeric accents where the shipped page intentionally separates a compact identity mark from Chinese editorial text.

### Hierarchy

- **Display** (700, responsive display scale, 1.18 line-height, tight tracking): The hero promise; on the narrowest screens it uses the compact override before returning to the full fluid scale.
- **Headline** (700, responsive headline scale, 1.18 line-height, tight tracking): Major section statements with balanced wrapping.
- **Title** (700, responsive title scale, 1.4 line-height): Service-card titles and other compact editorial anchors.
- **Body** (400, 1rem, 1.75 line-height): Explanations, FAQ answers, risk context, and narrative copy; measured text is generally held between about 42ch and 65ch.
- **Label** (400, compact size, 0.08em tracking): Captions and supporting identifiers, never the main reading layer.
- **Action** (700, 1rem, 1.2 line-height): Buttons and conversion links with clear, non-shouting emphasis.

### Named Rules

**The Editorial Pairing Rule.** Use local Noto Serif SC for meaning-bearing headings and local Noto Sans SC for reading and action; do not substitute a fashionable display face that weakens Chinese legibility.

## Layout

All major content uses one centered section shell capped at 1180px. Mobile gutters are 1rem per side; they grow to 1.5rem at 640px. The default section rhythm is a fluid 5.5rem–9rem block inset, with 1rem grid gaps and larger 2.5rem–3.5rem separations when a section changes reading mode.

The composition is mobile-first and portrait-first. On small screens the order is portrait, 20+ experience note, immediate full-width WhatsApp action, then headline, explanation, and the paired hero actions. At 640px, action rows and service cards gain horizontal structure. At 860px, the navigation becomes inline, the hero becomes an asymmetric content/portrait split, sticky section intros appear, and service, process, about, and FAQ layouts expand into their desktop grids. At 1180px, the portrait shifts slightly outward to reinforce the offset-folder composition. A 419px maximum-width adjustment protects the experience badge, hero scale, and footer stacking on very narrow devices.

Section structure alternates between quiet paper, soft ivory, blush paper, and deep burgundy rather than placing every idea in a card. Two-column sections use a sticky thesis on desktop and a naturally stacked reading flow on mobile. The three-step process becomes a connected horizontal sequence only when there is room; the FAQ remains a ruled reading list at every size.

The header remains sticky, with a 76px mobile height and 82px desktop height. Its 3px burgundy progress rule reports reading position without becoming a data visualization. Mobile navigation occupies the available viewport below the header and closes on link activation or Escape.

**The Portrait-First Trust Rule.** On mobile, the real person and the immediate contact path appear before extended persuasion; do not move the portrait below the sales copy.

## Elevation & Depth

Depth is a restrained hybrid of tonal layering and soft, downward-offset shadows. Paper fields establish most hierarchy; shadows are reserved for the portrait, actionable controls, sticky-header separation, and the few card patterns that need to feel like physical sheets laid on a table.

### Shadow Vocabulary

- **Framed Portrait** (`0 24px 56px rgba(63, 16, 31, 0.14)`): The deepest diffuse shadow, paired with the burgundy offset plane.
- **Paper Card** (`0 14px 32px rgba(54, 30, 37, 0.09)`): Low-contrast lift for services and process steps.
- **Resting Action** (`0 10px 24px rgba(112, 27, 53, 0.22)`): Clear but soft separation for primary calls to action.
- **Hovered Action** (`0 14px 30px rgba(63, 16, 31, 0.26)`): A slightly deeper response accompanying the 2px lift.
- **Scrolled Header** (`0 8px 28px rgba(63, 16, 31, 0.08)`): Minimal separation that appears only after scrolling.

### Named Rules

**The Soft Offset Rule.** Shadows fall down and away like lifted paper; never use neon glows, hard black drop shadows, or elevation on every container.

## Shapes

The system uses gently curved rectangles, not pills, as its default form language. Interactive controls use 12px corners, content surfaces use 14px, and the portrait mat and its burgundy backing use 16px. The photograph itself is clipped to 10px, desktop navigation states use 8px, and fully circular geometry is reserved for process numbers, FAQ controls, concern bullets, and the scrollbar thumb.

Thin 1px rules organize lists and content boundaries. The portrait is the signature silhouette: a white framed sheet, a slightly left-shifted real photograph, and a burgundy plane offset down and right. This controlled misregistration supplies personality without compromising alignment elsewhere.

## Components

### Buttons and action links

- **Shape:** 12px corner radius, 52px minimum height, strong sans-serif label, and a 1px transparent or burgundy border.
- **Primary:** Burgundy on white text with a soft action shadow; hover changes to deep burgundy, increases shadow depth, and lifts 2px.
- **Secondary:** Transparent with burgundy text and border; hover fills burgundy and reverses the label to white.
- **Light:** White on burgundy fields with deep-burgundy text; hover becomes deep burgundy with white text.
- **Arrow:** A compact horizontal line-and-chevron mark. It moves 4px to the right on hover while the button lifts vertically; the two motions remain short and coordinated.
- **Focus:** Every link and button receives a 3px visible-focus rose outline with a 4px offset. Never remove it in favor of shadow alone.

### Navigation

The sticky header reads like chapter tabs. Desktop links are compact, with blush-paper active and hover states; the WhatsApp link remains a burgundy action. Mobile uses a 46px square toggle, a full paper overlay below the header, ruled link rows, an animated two-line close mark, Escape support, and body scroll locking while open. `aria-current` follows the most relevant visible section.

### Service cards

Services use an asymmetric editorial grid rather than four identical icon tiles. White cards are quiet paper sheets with 14px corners and the paper-card shadow; the featured long-term-wealth card is burgundy, spans two rows on desktop, and carries its caption low in the surface. The PRS card uses a subdued mauve paper and a ruled regulatory note to keep conditional tax language attached to the claim.

### Process steps

Each process item is a paper sheet with a burgundy circular number. The items stack as compact two-column rows on mobile, then become three connected vertical cards at 860px. The hairline connector is desktop-only and never implies guaranteed progress or performance.

### FAQ

FAQ items are a ruled reading list, not elevated cards. The entire question row is a button with explicit `aria-expanded` and `aria-controls`; the 28px circular plus/minus control rotates into the open state. Answers reveal by animating the grid row over 220ms, only one answer stays open, and all controls retain the global focus outline.

### Portrait frame

Use only the supplied real Geovenne photograph. Preserve the source asset's natural 822×1280 portrait proportion and meaningful alt text; load the hero instance at high priority. Presentation may crop with the existing 10px clip, shift the image 12px left inside its white mat, and resize responsively, but must not redraw, beautify, face-swap, or synthesize the person.

### Interaction and motion

Most hover, navigation, arrow, and header changes use 180ms ease-out; the FAQ structural reveal uses 220ms ease-out. Smooth scrolling is allowed for in-page navigation. Under `prefers-reduced-motion: reduce`, smooth scrolling is disabled and transition/animation durations collapse to 0.01ms with a single iteration.

### Named Rules

**The Quiet Motion Rule.** Motion confirms hover, expansion, navigation, and reading progress; it never performs spectacle or delays access to financial information.

## Do's and Don'ts

### Do:

- **Do** use the supplied Geovenne portrait as documentary evidence; preserve facial identity and natural features, and limit presentation changes to crop, offset frame, and responsive sizing.
- **Do** keep the portrait-first mobile sequence and the WhatsApp action visible before extended hero copy.
- **Do** reuse the 1180px shell, responsive gutters, fluid section padding, and the 640px / 860px / 1180px layout transitions.
- **Do** preserve visible keyboard focus, semantic heading order, 52px action targets, FAQ ARIA state, Escape-to-close navigation, and reduced-motion behavior.
- **Do** use burgundy for action and decisive structure, while allowing paper, ivory, ink, and thin rules to carry most of the page.

### Don't:

- **Don't** introduce trading dashboards, performance charts, generic finance icon grids, or visual claims of guaranteed growth.
- **Don't** fabricate testimonials, awards, client counts, returns, or Public Mutual endorsement language.
- **Don't** replace the local Noto pairing with remote fonts or reduce Chinese body readability for display effect.
- **Don't** turn every section into a floating card, over-round controls into pills, or add hard shadows and neon glows.
- **Don't** hide focus indicators, rely on color alone for FAQ state, or keep smooth motion when reduced motion is requested.
