# CRED — STP Live Pitch

Six-screen click-through site built for a 2-minute live presentation. Content is locked to the script in `05c-live-pitch-concept-graded.md` from the planning docs.

## Run it

```
npm install
npm run dev
```

Opens at `http://localhost:5173`. For an actual presentation, use `npm run build` then `npm run preview` (or open `dist/index.html` after building) so you're not running a dev server with hot-reload overhead on a projector.

## Controls

- **Click anywhere**, or **→ / Space** — next slide
- **←** — previous slide
- **N** — toggle presenter notes (the spoken script) on screen, for rehearsal only — turn this off before the actual presentation
- **R** — reset the rehearsal timer

The timer in the top-right starts automatically when you advance past the hook slide, so you can rehearse against the real ~100-second budget.

## Known trade-off

The timer/hint text in the top-right corner is visible during the live click-through, small and low-contrast by design, but still on screen. If you'd rather present with zero visible chrome, say so and I'll add a hide-chrome toggle before you present — a five-minute change, not a rebuild.

## Structure

- `src/data/slides.ts` — all six slides' content and spoken notes in one place; edit here, not in components, if wording needs to change
- `src/components/Slide.tsx` — slide layout/typography
- `src/components/CreditGauge.tsx` — the 300-900 eligibility gauge, only shown on the Segmentation slide
- `src/components/ProgressMeter.tsx` — bottom progress bar
- `src/components/PresenterNotes.tsx` — rehearsal overlay
