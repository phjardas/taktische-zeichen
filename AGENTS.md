# Agent instructions

This is a pnpm-workspaces monorepo that generates SVG "taktische
Zeichen" (tactical symbols per the German DV 102 standard) from structured
options.

## Layout

- `packages/core` — the product core. `erzeugeTaktischesZeichen(options)`
  builds the SVG from data tables (`grundzeichen.ts`, `symbole.ts`,
  `fachaufgaben.ts`, `organisationen.ts`, `einheiten.ts`,
  `verwaltungsstufen.ts`, `funktionen.ts`) plus composition logic in
  `taktisches-zeichen.ts`. If a change touches SVG _output_, it happens
  here.
- `packages/react`, `packages/web-component`, `packages/cli` — thin
  wrappers around `core`. They import `core`'s built output
  (`dist/`), not its source, so `core` must be built before these packages
  can pick up a change.
- `packages/website` — the docs/demo site (eleventy + webpack). Not part of
  the published packages.

## Setup

```bash
pnpm install
pnpm run build
```

`build` is required, not optional: `react`/`web-component`/`cli` resolve
`taktische-zeichen-core` via its build output, so a `core` source change is
invisible to them until `core` is rebuilt.

## Testing changes to `packages/core/src`

This is the part of the repo with real regression risk: `core` renders
SVG for ~36 Grundzeichen, ~84 Symbole, and ~42 Fachaufgaben, each with its
own drawing logic, and shared code (`svg.ts`, `utils.ts`, `text.ts`,
`placeComponent`) touches all of them at once.

1. **`pnpm run test:e2e` in `packages/core` — the primary gate.** Renders
   every Grundzeichen/Symbol/Fachaufgabe/modifier combination and compares
   formatted SVG output against committed golden files in
   `packages/core/e2e/fixtures/`. Any change to rendering output, intended
   or not, shows up here.
   - **If it fails and the new output is wrong:** fix the code, not the
     fixture.
   - **If it fails and the new output is correct** (an intentional
     rendering change): run `pnpm run test:e2e:update` in `packages/core`
     to regenerate the fixtures, then review the resulting `.svg` diffs
     like any other code change before committing them — never run
     `test:e2e:update` just to make the suite pass without reading what
     changed and why.
   - On failure, the runner prints a text diff per failing case to stdout
     and writes `packages/core/e2e/.report/report.html` (gitignored) with
     a visual side-by-side comparison. Open that file in a browser to see
     the actual rendered shapes, not just markup text.
2. **`pnpm test` in `packages/core` — secondary.** Vitest unit tests, mostly
   covering option validation and specific edge cases. Less important than
   `test:e2e` for catching rendering regressions, but still run it.
3. **`pnpm run format:check`** in each package you touched (or `pnpm run
format` to auto-fix, then re-stage). Run before committing.

From the repo root, `pnpm run test:e2e` and `pnpm run format:check` run
across every package via pnpm's recursive mode (only `core` currently
defines `test:e2e`).

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
pnpm run update-docs
```

### Documentation language

User-facing documentation — README, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`,
issue templates — is German, matching the project's audience (German
Feuerwehr/Katastrophenschutz organizations and German-speaking
contributors). Technical/agent-facing documentation — this file, code
comments, commit messages — is English. When adding a new doc, pick the
language based on who reads it, not on the language of the file next to it.

## Node version note

`core`, `react`, `web-component`, and `cli` are pure ESM (`"type": "module"`,
no CommonJS build) and declare `"engines": { "node": ">=22" }`. Root
`package.json` pins Node 24.11.1 via `volta` for local dev.
