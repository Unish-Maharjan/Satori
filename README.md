# SATORI AEC — Next.js + Tailwind + GSAP

A componentized rebuild of the SATORI AEC landing page: Next.js 14 (App Router),
Tailwind CSS for styling, GSAP + ScrollTrigger for scroll animation. Every
homepage section is its own component under `components/`, imported and
composed in `app/page.tsx`.

## Structure

```
app/
  layout.tsx      fonts (Archivo, IBM Plex Mono), global metadata
  page.tsx         imports and orders every section component
  globals.css      Tailwind entry + a few shared utility classes
components/
  Header.tsx       floating -> solid sticky header, desktop nav
  MobileMenu.tsx    fullscreen mobile nav
  AMark.tsx         the geometric A, as 5 reusable variants
  Hero.tsx
  Opening.tsx
  Immersive.tsx
  Philosophy.tsx
  GeoMoment.tsx     pinned A -> arrow -> building -> frame -> mask sequence
  Story.tsx
  Journey.tsx       pinned land -> structure -> space -> people -> place tracker
  Mega.tsx
  Editorial.tsx
  Vision.tsx
  FinalCTA.tsx
lib/
  gsap.ts           registers ScrollTrigger once
  useReveal.ts       shared fade-up-on-scroll hook for elements with .reveal
```

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Notes

- All imagery is CSS/SVG (gradients + line drawings), so there are no external
  image dependencies to wire up.
- Every animated section checks `prefers-reduced-motion` and renders statically
  if it's set.
- Swap the gradient placeholders in each component's `style={{ backgroundImage }}`
  for real photography whenever it's ready — the layout and animation timing
  will hold.
