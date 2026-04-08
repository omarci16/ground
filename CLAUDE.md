# CLAUDE.md — Barber Shop Landing Page
## Project context for Claude Code. Read this fully before doing anything.

---

## Who is building this

Márton, 16, founder of Lumen Solutions — a one-person AI agency that builds websites and automation systems for local Hungarian businesses. This is a live client project, not a demo.

---

## The Client

A barbershop in Debrecen, Hungary. Márton's personal barber. Warm existing relationship — the barber saw Márton's work, was impressed, and agreed to a 300,000 HUF quote. Márton promised to show up in one week with a finished concept. No strings attached. This has to be genuinely impressive.

The deliverable: a **landing page only**. Pure HTML, CSS, JavaScript. No backend. No database. No frameworks. No build step.

---

## What the Site Does

1. Represents the salon beautifully and honestly
2. Drives all bookings to the client's existing **Salonic** platform — we do NOT replace it
3. Links to the barber's **Skool** course/community platform — we do NOT build that either

The site's job: make someone feel the salon before they walk in, then get them to book.

---

## The Salon — Identity and Vibe

This is not a generic barbershop. It is genuinely different, especially for Debrecen:

- **Exceptionally warm and welcoming** — rare in Debrecen's salon culture
- **They offer you coffee and drinks before you even sit down** — this detail is central, it must appear on the site
- **Home-like atmosphere** — feels like a living room, not a business
- **Young urban energy** — graffiti art on walls, street culture roots — but genuinely welcoming to everyone, including older clients
- **High professional skill** — the warmth isn't a distraction from quality, it sits on top of it
- **~5 barbers** work there
- The reception runs off a MacBook

The barber's brief to Márton: *"Write what you see as a guest — I don't want to tell you what to write."*
This means: all copy comes from Márton's POV as a regular client. First-person honest perspective. Not marketing language.

---

## Content Voice — THE MOST IMPORTANT RULE

Every line of copy on this site must sound like a real person talking, not a brand.

### ✅ CORRECT voice:

> "Honestly, I've never been somewhere in Debrecen where they hand you a coffee before you even sit down. It doesn't feel like a business. It feels like someone's living room — except everyone there is incredibly good at what they do."

> "Az első alkalom, hogy bementem, azt hittem, csak egy átlagos helyre megyek. Aztán valaki odajött és megkérdezte, kérek-e kávét. Azt hittem, viccel."

### ❌ WRONG voice (never write like this):

> "We provide premium grooming services in a welcoming environment."

> "Szakképzett csapatunk elkötelezett az Ön elégedettsége iránt."

> "Prémium élményt nyújtunk minden ügyfélnek."

**The test:** If a line could appear on any barbershop website in Hungary, delete it and rewrite it as something only THIS place could say.

Apply this test to every single paragraph, headline, and CTA label.

---

## Section Structure

Build these sections in this order:

### 1. Hero
- Full viewport height, atmospheric
- Short punchy Hungarian headline — not a slogan, a statement. Something that lands.
- 1–2 sentence subtext written from the guest's POV
- Single CTA: **IDŐPONTFOGLALÁS** → `[SALONIC_BOOKING_URL]` (placeholder until client provides)
- Background: dark, textured, atmospheric. Could be a photo overlay or pure CSS atmosphere.

### 2. Miért mi? (Why us?)
- Honest, personal prose — no bullet points
- Cover: the coffee moment, the atmosphere, the friendliness that's genuine not performative, the skill underneath the warmth, what makes this place different in Debrecen specifically
- 3–4 paragraphs of real writing. Flowing. Personal.

### 3. A csapatunk (Our team)
- NOT a uniform face grid
- Each barber gets an editorial card: large photo, bio in their own voice (warm, personal, 3–5 sentences), their specialty
- Each card has its own **IDŐPONTFOGLALÁS** button → Salonic link, ideally with barber pre-selected via URL param (use `?barber=NAME` as placeholder, confirm actual param format with client)
- Layout: alternating left/right image/text — editorial magazine feel, not a template
- Placeholder: 5 barbers with invented but authentic-sounding names and bios. Client will replace photos and text.

### 4. Szolgáltatások (Services)
- Clean list: service name, short description (1 line), price
- Each service row has an **IDŐPONTFOGLALÁS** button or the whole section ends with one
- Placeholder services with realistic Hungarian barbershop pricing in HUF
- No icons unless they genuinely serve the layout

### 5. Galéria (Gallery)
- Masonry or editorial layout — NOT a flat uniform grid
- Placeholder: use CSS aspect-ratio boxes with warm-toned gradients as photo placeholders
- Must feel curated and intentional, not a photo dump
- Real photos will come from client

### 6. Vélemények (Testimonials)
- Horizontal scrolling carousel — NOT static stacked cards
- Works on desktop (mouse drag + scroll) and mobile (touch drag)
- Auto-scrolls slowly if no interaction
- 5–8 placeholder testimonials in authentic Hungarian voice
- Placed just above Kapcsolat

### 7. Skool Section (Tanulj tőlünk / or equivalent)
- Simple section: 2–3 sentences explaining the educational content or community
- CTA button → `[SKOOL_URL]` (placeholder)
- Skool handles everything — we only link out
- Keep it light — this is secondary to the main booking flow

### 8. Kapcsolat (Contact)
- Address (placeholder: "Debrecen, [utca neve]")
- Phone number (placeholder)
- Social links (placeholder hrefs)
- Google Maps embed (placeholder iframe with Debrecen centered)
- One final IDŐPONTFOGLALÁS CTA

---

## Technical Requirements — HARD CONSTRAINTS

- **Pure HTML + CSS + JS** — no React, no Vue, no npm, no build step
- **Single HTML file preferred**, or at most: `index.html` + `style.css` + `main.js` — must open directly in a browser or deploy instantly to Vercel/Netlify by drag-drop
- **Mobile-first** — the barber will check it on his phone first. Everything must be pixel-perfect at 390px before touching desktop.
- **All UI text in Hungarian**
- **Vanilla JS only** — no jQuery, no lodash, no external JS libraries except fonts and possibly a minimal icon set
- **Smooth scroll** between sections — CSS `scroll-behavior: smooth`
- **Entrance animations** — Intersection Observer API, not scroll event listeners. Staggered reveals. Purposeful, not decorative.
- **Horizontal scroll testimonials** — must support both mouse wheel/drag on desktop and touch drag on mobile. Implement with pointer events, not a library.
- **No lazy loading tricks that break on first paint** — above-the-fold content must render immediately

---

## Design System

> ⚠️ A design guidelines PDF will be provided by Márton. When it arrives, extract all values from it and override this placeholder system. Until then, use the following:

### Color Palette (placeholder — warm dark)
```css
:root {
  --color-bg:         #0f0b08;   /* near-black, warm undertone */
  --color-surface:    #1a1410;   /* slightly lifted surface */
  --color-surface-2:  #231c16;   /* card backgrounds */
  --color-border:     #3a2e24;   /* subtle warm border */
  --color-text:       #e8ddd0;   /* off-white, cream */
  --color-text-muted: #8a7a6a;   /* secondary text */
  --color-accent:     #c9923a;   /* warm amber — primary CTA color */
  --color-accent-2:   #8b5e2a;   /* deeper amber for hover states */
  --color-highlight:  #f0c070;   /* bright gold for emphasis moments */
}
```

### Typography (placeholder — override with PDF values)
```css
/* Display font: something with editorial weight and character */
/* Options: Playfair Display, Cormorant Garamond, DM Serif Display */
/* Body font: clean but warm — NOT Inter, NOT Roboto, NOT Space Grotesk */
/* Options: Lora, Source Serif 4, Libre Baskerville */

/* Load via Google Fonts in <head>. Example: */
/* @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap'); */

:root {
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'Lora', Georgia, serif;
  --font-ui:      'Lora', Georgia, serif;
}
```

### Texture & Atmosphere
- Grain overlay on the entire page: CSS `filter: url(#grain)` SVG filter or a repeating PNG texture with low opacity
- Warm vignette on hero background
- Subtle noise on surface cards
- No sharp cold edges. Everything has warmth.

### Spacing Scale
```css
:root {
  --space-xs:  0.5rem;
  --space-sm:  1rem;
  --space-md:  2rem;
  --space-lg:  4rem;
  --space-xl:  8rem;
  --space-2xl: 12rem;
}
```

### Motion Rules
- All scroll-triggered reveals: opacity 0 → 1, translateY(24px) → 0, duration 0.6s, ease-out
- Stagger delay between sibling elements: 100ms per item
- CTA buttons: subtle warm glow on hover, scale(1.02), no jarring flashes
- No animations that play on every scroll direction — reveal once, done

---

## External Skills to Download and Read

Before writing any code, Claude Code must:

1. Clone or download: `https://github.com/Leonxlnx/taste-skill`
2. Clone or download: `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill`
3. Read the relevant documentation files in each repo
4. Apply their guidelines to all design and code decisions

These repos contain taste and UI/UX guidelines that override generic defaults. They are not optional.

---

## External Integrations

| Integration | What we build | What we don't build |
|---|---|---|
| Salonic (booking) | Links with `?barber=NAME` URL params | Nothing — Salonic handles everything |
| Skool (courses) | One section + link out | Nothing — Skool handles everything |
| Google Maps | Embed iframe in Kapcsolat | No custom map |

---

## What "Done" Looks Like

This site is done when:

1. A barber in Debrecen looks at it on his phone and says "ez én vagyok" (this is me)
2. The copy sounds like it was written by someone who genuinely loves the place, not a content agency
3. The design could not belong to any other barbershop — it is specific to this salon's identity
4. Every section works on mobile without horizontal overflow or broken layouts
5. The booking CTA is impossible to miss from any section
6. The testimonial scroll works with a finger on mobile without fighting the page scroll
7. A developer could hand this off to Vercel by drag-dropping the folder and it works immediately

---

## Files to Produce

```
/
├── index.html        ← Main deliverable. All sections. Full page.
├── style.css         ← All styles. Mobile-first. CSS variables used throughout.
├── main.js           ← Intersection Observer reveals, testimonial drag-scroll, nav behavior
└── CLAUDE.md         ← This file (already here)
```

Optional if needed:
- `assets/` folder for any inline SVG icons or grain texture

---

## Contacts and Placeholders

Until the client provides real content, use these placeholders throughout:

- `[SALONIC_BOOKING_URL]` — the Salonic booking page URL
- `[SKOOL_URL]` — the Skool community URL
- `[SALON_NAME]` — the salon's actual name (ask Márton if not provided)
- `[SALON_ADDRESS]` — full address in Debrecen
- `[SALON_PHONE]` — phone number
- `[BARBER_1_NAME]` through `[BARBER_5_NAME]` — barber names
- `[INSTAGRAM_URL]`, `[FACEBOOK_URL]`, `[TIKTOK_URL]` — social links

Write placeholder copy in Hungarian that sounds real, not lorem ipsum. The barber will read this during the pitch — it needs to impress him even before real content is swapped in.

---

## Notes for Every Session

- Always re-read this file at the start of a session before any other action
- Never make design decisions that contradict the voice guidelines — if in doubt, be more specific, not more generic
- If the design PDF has arrived, extract and apply it before writing any CSS
- Flag anything blocking with a clear `⚠️ NEEDS INPUT:` note at the end of your response
