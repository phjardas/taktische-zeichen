# Agent instructions

This is a lerna/npm-workspaces monorepo that generates SVG "taktische
Zeichen" (tactical symbols per the German DV 102 standard) from structured
options.

## Layout

- `packages/core` — the product core. `erzeugeTaktischesZeichen(options)`
  builds the SVG from data tables (`grundzeichen.ts`, `symbole.ts`,
  `fachaufgaben.ts`, `organisationen.ts`, `einheiten.ts`,
  `verwaltungsstufen.ts`, `funktionen.ts`) plus composition logic in
  `taktisches-zeichen.ts`. If a change touches SVG *output*, it happens
  here.
- `packages/react`, `packages/web-component`, `packages/cli` — thin
  wrappers around `core`. They import `core`'s built output
  (`dist/`), not its source, so `core` must be built before these packages
  can pick up a change.
- `packages/website` — the docs/demo site (eleventy + webpack). Not part of
  the published packages.

## Setup

```bash
npm ci
npm run build
```

`build` is required, not optional: `react`/`web-component`/`cli` resolve
`taktische-zeichen-core` via its build output, so a `core` source change is
invisible to them until `core` is rebuilt.

## Testing changes to `packages/core/src`

This is the part of the repo with real regression risk: `core` renders
SVG for ~36 Grundzeichen, ~84 Symbole, and ~42 Fachaufgaben, each with its
own drawing logic, and shared code (`svg.ts`, `utils.ts`, `text.ts`,
`placeComponent`) touches all of them at once.

1. **`npm run test:e2e` in `packages/core` — the primary gate.** Renders
   every Grundzeichen/Symbol/Fachaufgabe/modifier combination and compares
   formatted SVG output against committed golden files in
   `packages/core/e2e/fixtures/`. Any change to rendering output, intended
   or not, shows up here.
   - **If it fails and the new output is wrong:** fix the code, not the
     fixture.
   - **If it fails and the new output is correct** (an intentional
     rendering change): run `npm run test:e2e:update` in `packages/core`
     to regenerate the fixtures, then review the resulting `.svg` diffs
     like any other code change before committing them — never run
     `test:e2e:update` just to make the suite pass without reading what
     changed and why.
   - On failure, the runner prints a text diff per failing case to stdout
     and writes `packages/core/e2e/.report/report.html` (gitignored) with
     a visual side-by-side comparison. Open that file in a browser to see
     the actual rendered shapes, not just markup text.
2. **`npm test` in `packages/core` — secondary.** Jest unit tests, mostly
   covering option validation and specific edge cases. Less important than
   `test:e2e` for catching rendering regressions, but still run it.
3. **`npm run format:check`** in each package you touched (or `npm run
   format` to auto-fix, then re-stage). Run before committing.

From the repo root, `npm run test:e2e` and `npm run format:check` run
across every package via lerna (only `core` currently defines
`test:e2e`).

## Changesets

Every PR needs a changeset:

```bash
npx changeset
```

Select every package **except** `taktische-zeichen-website`, even ones you
didn't directly touch (see `CONTRIBUTING.md` for the major/minor/patch
rules). Commit the generated `.changeset/*.md` file with your change.

## Documentation

Adding or removing a Grundzeichen/Symbol/Fachaufgabe/etc. requires
regenerating README statistics:

```bash
npm run update-docs
```

## Node version note

Root `package.json` pins Node 24.11.1 via `volta`; `packages/core`,
`packages/react`, `packages/cli` (`bin` scripts aside) pin 21.6.0 for
themselves. This mismatch predates this document and is unrelated to any
of the above — don't try to resolve it as a side effect of other work.
