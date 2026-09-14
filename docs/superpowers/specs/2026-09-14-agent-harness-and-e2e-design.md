# Agent harness and SVG e2e test suite

Date: 2026-09-14

## Motivation

This repo has no `AGENTS.md`. An agent working here today has to reconstruct
conventions, build order, and test/lint commands from `CONTRIBUTING.md`,
`package.json` scripts, and code inspection on every session.

More importantly, the actual product — SVG rendering in `packages/core` — has
thin regression coverage. `packages/core/src/taktisches-zeichen.spec.ts`
covers a handful of cases via `toMatchInlineSnapshot`, but the ~36
Grundzeichen, ~84 Symbole, and ~42 Fachaufgaben each implement distinct
drawing logic with no per-item coverage. A refactor of shared rendering code
(`svg.ts`, `utils.ts`, `text.ts`, `placeComponent`, etc.) can silently change
output for items nothing currently exercises.

This spec covers two things:

1. An `AGENTS.md` that gives an agent everything it needs to work
   autonomously: layout, build, how and when to run each test suite, how to
   update goldens intentionally, and the existing changeset/PR convention.
2. A golden-file e2e suite for `erzeugeTaktischesZeichen` covering every
   distinct Grundzeichen/Symbol/Fachaufgabe plus every other option, with
   failure output that gives an agent a precise text diff and gives a human
   a side-by-side visual comparison.

## Non-goals

- Exhaustive combinatorial coverage (every Grundzeichen × Organisation ×
  Symbol × ... product). The curated set below already exercises every
  distinct rendering routine; combinatorics on top of that tests the shared
  composition code once is enough, not per Grundzeichen.
- Pixel-level rasterized comparison (no `sharp`/`resvg`/headless browser
  dependency). Comparison is on formatted SVG markup; visual review of
  mismatches is done by looking at real `<svg>` elements in an HTML report,
  which browsers rasterize for free.
- e2e coverage of `react`, `web-component`, `cli`, or `website`. Those are
  thin wrappers around `core`; `core` is where SVG generation actually
  happens.
- Wiring this into any CI system. Out of scope unless the user asks
  separately; this spec only covers local/agent-runnable scripts.

## Architecture

New directory, sibling to `src/`, not mixed with Jest unit tests:

```
packages/core/e2e/
  cases.ts       # generates the list of test cases
  fixtures/      # one committed golden .svg file per case, prettier-formatted
  run.ts         # the runner: render, format, compare, report
  report.ts      # builds the HTML failure report
  .report/       # gitignored, written by run.ts on failure
```

`e2e/` is plain TypeScript executed with `ts-node`, the same pattern already
used for `packages/core/scripts/statistics.ts` (`ts-node -P
tsconfig-scripts.json`). No new test framework, no custom Jest reporter.

### Case generation (`cases.ts`)

```ts
type Case = {
  id: string;
  description: string;
  options: TaktischesZeichen;
};
```

Cases come from two sources:

**Generated, from the data arrays in `../src`:**

- One case per `Grundzeichen`, id `grundzeichen-<id>`, `{ grundzeichen: id,
  organisation: "feuerwehr", skipFontRegistration: true }` when the item
  `accepts("organisation")`, otherwise `{ grundzeichen: id,
  skipFontRegistration: true }`.
- One case per `Symbol`, id `symbol-<id>`, rendered via `{ symbol: id,
  skipFontRegistration: true }`.
- One case per `Fachaufgabe`, id `fachaufgabe-<id>`, paired with the first
  `Grundzeichen` whose `accepts` list includes `"fachaufgabe"` (there is at
  least one — verified against `grundzeichen.ts` during brainstorming).

This mirrors the `accepts()` gating already in `taktisches-zeichen.ts:303`
so generated cases are never invalid combinations.

**Hand-written**, covering what isn't enumerable from the data arrays:

- Every `Organisation`, `Einheit`, `Verwaltungsstufe`, `Funktion` id, each
  paired with a Grundzeichen that accepts it, one case each.
- `name` (ASCII), `name` (UTF-8, e.g. "Täst"), a long `name` that exercises
  text scaling.
- `text` option.
- `farbe` override on a Grundzeichen that accepts it.
- `typ` option.
- No `grundzeichen` (symbol-only render).
- `dataUrl` output specifically (the case runner asserts both `.toString()`
  and `.dataUrl` for every case anyway — see below — so this isn't a
  separate render path, just called out as a named case for clarity).
- One case with real font registration (`skipFontRegistration` omitted/
  `false`) to catch regressions in font embedding. Its fixture will be large
  (embedded font data); that's expected and fine — it's one file.
- One "kitchen sink" case combining Grundzeichen + Organisation + Symbol +
  Fachaufgabe + Einheit + Verwaltungsstufe + name, to catch interaction bugs
  the isolated cases can't.

Expected total: on the order of 200 cases. All existing `GrundzeichenId`/
`SymbolId`/etc. unions are read live from `../src`, so a newly added
Grundzeichen or Symbol automatically gets a generated case next run — no
separate "did you forget a fixture" check needed, and no fixture ever goes
stale by omission.

### Golden format

Both `.toString()` and `.dataUrl` are meaningful, but `.dataUrl` is a
base64 encoding of the same SVG string — asserting both from one fixture
is redundant. The fixture stores the formatted SVG markup only; `run.ts`
decodes the base64 back to a string and compares it against the same
formatted markup, so a divergence between the two code paths still fails
the test without needing a second fixture file per case.

Formatting uses Prettier's `html` parser, already a devDependency:

```ts
import * as prettier from "prettier";
const formatted = await prettier.format(svgString, { parser: "html" });
```

Confirmed during brainstorming: this produces stable, readable,
attribute-per-line output including sorted-looking style blocks, with no
new dependency. Both the golden fixture and the freshly rendered output are
formatted the same way before comparison, so this is purely a
presentation/diffability concern, not a semantic one — it never affects the
SVG that ships to real consumers.

### Runner (`run.ts`)

For each case:

1. Call `erzeugeTaktischesZeichen(case.options)`.
2. Format `.toString()` output with Prettier.
3. Decode and format `.dataUrl`, confirm it matches the same formatted
   string (see above).
4. Read `e2e/fixtures/<id>.svg`. If missing, record a "no golden yet"
   failure for that case.
5. Compare formatted output to fixture content, byte for byte.

At the end:

- All pass: print `<n> cases passed`, exit 0.
- Any fail: for every failing case, print the case id and a colored text
  diff to stdout using `jest-diff` (already present transitively via Jest —
  no new dependency), then print how many failed out of the total, then
  write `e2e/.report/report.html` (see below) and print its path, then exit
  1.

`run.ts --update` (also exposed as `npm run test:e2e:update`) skips
comparison and instead (re)writes every case's fixture from current output.
Intended for reviewing intentional rendering changes as normal `.svg` diffs
in the PR, not for blindly accepting a red suite.

### HTML report (`report.ts`)

One static HTML file, gitignored, regenerated on every failing run. For
each failing case: id, description, the options used (as JSON), and three
panels — expected SVG (real inline `<svg>`, so browsers rasterize it),
actual SVG (same), and an overlay (expected outlined in red, actual in
blue, absolutely stacked) so small positional/shape differences are visible
at a glance. The same text diff printed to stdout is included below the
panels for cases where the visual difference is too subtle to see (e.g. a
color hex value). Not auto-opened — `run.ts` just prints the file path;
opening it is a manual step for a human.

### Scripts

`packages/core/package.json`:

```json
"test:e2e": "ts-node -P tsconfig-scripts.json e2e/run.ts",
"test:e2e:update": "ts-node -P tsconfig-scripts.json e2e/run.ts --update",
"format:check": "prettier --check src"
```

Root `package.json`:

```json
"test:e2e": "lerna run test:e2e"
```

(Naturally scoped to `core`, the only package defining it — same pattern
`lerna run test` already uses.)

`format:check` is new in every package that has `format` (`core`, `react`,
`cli`, `web-component`, `website`) — `prettier --write` is destructive to
run as a pre-commit check; `--check` isn't currently exposed anywhere in the
repo. Root gets `"format:check": "lerna run format:check"` to match.

`.gitignore` gets `/packages/core/e2e/.report/`.

## AGENTS.md

Root-level file (mirrors how `CONTRIBUTING.md` already covers the whole
monorepo, with package-specific notes inline). Contents:

- **Layout**: lerna monorepo, `packages/core` (SVG generation, the product
  core), `packages/react`, `packages/web-component`, `packages/cli` (thin
  wrappers around core), `packages/website` (docs/demo site, eleventy).
- **Setup**: `npm ci && npm run build` (build is required — `react`/
  `web-component`/`cli` import `core`'s build output, not its source).
- **Before committing any change touching `packages/core/src`**:
  1. `npm run test:e2e` in `packages/core` (or from root: relies on the
     e2e suite passing — this is the primary regression gate for SVG
     rendering behavior).
  2. `npm test` (Jest unit tests, secondary — mostly cover option
     validation and edge cases the e2e suite doesn't target).
  3. `npm run format:check` (or `format` to auto-fix) in each touched
     package.
  - If `test:e2e` fails and the new output is correct (an intentional
    rendering change), run `npm run test:e2e:update` in `packages/core`,
    review the resulting `.svg` diffs like any other code change, and
    commit them alongside the change that caused them. Never run
    `test:e2e:update` to make a suite pass without reviewing what changed
    and why.
- **Changesets**: every PR needs `npx changeset` (from `CONTRIBUTING.md`);
  select every package except `taktische-zeichen-website`, patch/minor/major
  per the rules already documented there.
- **Documentation**: adding/removing a Grundzeichen/Symbol/etc. requires
  `npm run update-docs` to refresh README statistics.
- Node version: 24.11.1 (`volta` in root `package.json`; `packages/core`
  pins 21.6.0 for itself — note the mismatch so an agent isn't confused by
  it, but don't resolve it as part of this work, it's unrelated).

## Testing the harness itself

Before considering the e2e suite done, prove it actually catches
regressions: introduce a deliberate, small rendering change in `core/src`
(e.g. shift a coordinate in one Grundzeichen), run `test:e2e`, confirm it
fails with a correct, readable diff for that case and only that case, check
the HTML report renders sensibly, then revert the change and confirm a
clean pass. This is a manual verification step during implementation, not a
committed test-of-the-test.
