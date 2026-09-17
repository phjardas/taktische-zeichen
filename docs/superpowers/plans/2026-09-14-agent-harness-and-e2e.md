# Agent Harness and SVG E2E Suite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give agents a golden-file e2e suite that catches any regression in `erzeugeTaktischesZeichen`'s SVG output, with a precise text diff for agents and a visual HTML report for humans, plus an `AGENTS.md` that tells an agent how and when to run it.

**Architecture:** A plain-TypeScript runner (`packages/core/e2e/run.ts`, executed with `ts-node`, no Jest) renders every case from a generated list (`e2e/cases.ts`), formats the SVG with Prettier's `html` parser, and compares it to a committed fixture file (`e2e/fixtures/<id>.svg`). On mismatch it prints a `jest-diff` text diff to stdout and writes an HTML side-by-side/overlay report (`e2e/report.ts`) for humans to open manually.

**Tech Stack:** TypeScript, `ts-node`, `prettier` (already a devDependency, used via its `html` parser), `jest-diff` (already resolvable transitively via `jest`, added as an explicit devDependency).

**Spec:** `docs/superpowers/specs/2026-09-14-agent-harness-and-e2e-design.md`

## Global Constraints

- No new npm dependencies beyond `jest-diff` as an explicit devDependency (it's already in the tree transitively via `jest`; no version to pick beyond what's already resolved: `30.2.0`). No rasterizer (`sharp`/`resvg`/puppeteer) — visual comparison is via real inline `<svg>` in an HTML file, not rasterized images.
- The e2e suite lives entirely under `packages/core/e2e/`, runs via `ts-node -P tsconfig-scripts.json` (the same pattern `scripts/statistics.ts` already uses), and is never part of `tsc` builds (`tsconfig.json`'s `include` stays `["src"]`, untouched).
- Golden fixtures are one committed `.svg` file per case under `packages/core/e2e/fixtures/`, formatted with `prettier.format(svg, { parser: "html" })` before writing or comparing — same formatting on both sides, always.
- The HTML failure report is written to `packages/core/e2e/.report/report.html` (gitignored) and is never auto-opened by the runner; it only prints the path.
- Case generation must never hardcode an assumed-valid Grundzeichen/Symbol/Fachaufgabe pairing — always derive validity from each item's own `accepts` array (see `packages/core/src/grundzeichen.ts:58-67` for `ComponentType`, and `taktisches-zeichen.ts:303` for how `accepts` gates rendering).
- `TaktischesZeichen` options are forgiving: passing an option a Grundzeichen doesn't accept is silently ignored, not an error. The only hard failure is providing neither `grundzeichen` nor `symbol` (`taktisches-zeichen.ts:49-52`).
- `image.dataUrl` is exactly `` `data:image/svg+xml;base64,${base64(image.toString())}` `` (`packages/core/src/utils.ts:29-31`) — decoding it must reproduce `image.toString()` exactly; a mismatch is a real bug, not a fixture problem.

---

### Task 1: Case generation

**Files:**
- Create: `packages/core/e2e/cases.ts`
- Modify: `packages/core/tsconfig-scripts.json`

**Interfaces:**
- Consumes: `erzeugeTaktischesZeichen` is NOT called here — this task only builds the list of inputs. Reads `grundzeichen`, `symbole`, `fachaufgaben`, `organisationen`, `einheiten`, `verwaltungsstufen`, `funktionen`, and the `ComponentType`/`Grundzeichen`/`TaktischesZeichen` types from `../src` (see `packages/core/src/index.ts` for exact export names).
- Produces: `export type Case = { id: string; description: string; options: TaktischesZeichen }` and `export const cases: Case[]`. Every later task imports `cases` from `./cases`. Case ids are unique strings; later tasks use them as fixture filenames (`e2e/fixtures/<id>.svg`) so ids must be filesystem-safe (lowercase, digits, hyphens only — every id below already is, since every source `Id` type in this codebase is kebab-case).

- [ ] **Step 1: Add `e2e` to the ts-node include so the runner type-checks**

Edit `packages/core/tsconfig-scripts.json`:

```json
{
  "extends": "./tsconfig-base.json",
  "compilerOptions": {
    "noEmit": true
  },
  "include": ["src", "scripts", "e2e"],
  "ts-node": {
    "files": true
  }
}
```

- [ ] **Step 2: Write `packages/core/e2e/cases.ts`**

```ts
import type {
  ComponentType,
  Grundzeichen,
  TaktischesZeichen,
} from "../src";
import {
  einheiten,
  fachaufgaben,
  funktionen,
  grundzeichen,
  organisationen,
  symbole,
  verwaltungsstufen,
} from "../src";

export type Case = {
  id: string;
  description: string;
  options: TaktischesZeichen;
};

function requireGrundzeichenAccepting(type: ComponentType): Grundzeichen {
  const grund = grundzeichen.find((g) => g.accepts?.includes(type));
  if (!grund) {
    throw new Error(`No Grundzeichen accepts "${type}"`);
  }
  return grund;
}

function grundzeichenCases(): Case[] {
  return grundzeichen.map((grund) => {
    const options: TaktischesZeichen = {
      grundzeichen: grund.id,
      skipFontRegistration: true,
    };
    if (grund.accepts?.includes("organisation")) {
      options.organisation = "feuerwehr";
    }
    return {
      id: `grundzeichen-${grund.id}`,
      description: `Grundzeichen: ${grund.label}`,
      options,
    };
  });
}

function symbolCases(): Case[] {
  return symbole.map((symbol) => ({
    id: `symbol-${symbol.id}`,
    description: `Symbol: ${symbol.label}`,
    options: { symbol: symbol.id, skipFontRegistration: true },
  }));
}

function fachaufgabeCases(): Case[] {
  const grund = requireGrundzeichenAccepting("fachaufgabe");
  return fachaufgaben.map((fachaufgabe) => ({
    id: `fachaufgabe-${fachaufgabe.id}`,
    description: `Fachaufgabe: ${fachaufgabe.label} (auf ${grund.id})`,
    options: {
      grundzeichen: grund.id,
      fachaufgabe: fachaufgabe.id,
      skipFontRegistration: true,
    },
  }));
}

function organisationCases(): Case[] {
  const grund = requireGrundzeichenAccepting("organisation");
  return organisationen.map((organisation) => ({
    id: `organisation-${organisation.id}`,
    description: `Organisation: ${organisation.label} (auf ${grund.id})`,
    options: {
      grundzeichen: grund.id,
      organisation: organisation.id,
      skipFontRegistration: true,
    },
  }));
}

function einheitCases(): Case[] {
  const grund = requireGrundzeichenAccepting("einheit");
  return einheiten.map((einheit) => ({
    id: `einheit-${einheit.id}`,
    description: `Einheit: ${einheit.label} (auf ${grund.id})`,
    options: {
      grundzeichen: grund.id,
      einheit: einheit.id,
      skipFontRegistration: true,
    },
  }));
}

function verwaltungsstufeCases(): Case[] {
  const grund = requireGrundzeichenAccepting("verwaltungsstufe");
  return verwaltungsstufen.map((verwaltungsstufe) => ({
    id: `verwaltungsstufe-${verwaltungsstufe.id}`,
    description: `Verwaltungsstufe: ${verwaltungsstufe.label} (auf ${grund.id})`,
    options: {
      grundzeichen: grund.id,
      verwaltungsstufe: verwaltungsstufe.id,
      skipFontRegistration: true,
    },
  }));
}

function funktionCases(): Case[] {
  const grund = requireGrundzeichenAccepting("funktion");
  return funktionen.map((funktion) => ({
    id: `funktion-${funktion.id}`,
    description: `Funktion: ${funktion.label} (auf ${grund.id})`,
    options: {
      grundzeichen: grund.id,
      funktion: funktion.id,
      skipFontRegistration: true,
    },
  }));
}

function modifierCases(): Case[] {
  const nameGrund = requireGrundzeichenAccepting("name");
  const farbeGrund = requireGrundzeichenAccepting("farbe");
  const typGrund = requireGrundzeichenAccepting("typ");
  const fachaufgabeGrund = requireGrundzeichenAccepting("fachaufgabe");

  return [
    {
      id: "modifier-name-ascii",
      description: "name option, ASCII",
      options: {
        grundzeichen: nameGrund.id,
        name: "Test",
        skipFontRegistration: true,
      },
    },
    {
      id: "modifier-name-utf8",
      description: "name option, UTF-8 characters",
      options: {
        grundzeichen: nameGrund.id,
        name: "Täst öß",
        skipFontRegistration: true,
      },
    },
    {
      id: "modifier-name-long",
      description: "name option, long text exercising scaling",
      options: {
        grundzeichen: nameGrund.id,
        name: "Ein sehr langer Name fuer dieses Zeichen",
        skipFontRegistration: true,
      },
    },
    {
      id: "modifier-text",
      description: "text option",
      options: {
        grundzeichen: nameGrund.id,
        text: "Hinweistext",
        skipFontRegistration: true,
      },
    },
    {
      id: "modifier-farbe",
      description: "farbe override",
      options: {
        grundzeichen: farbeGrund.id,
        farbe: "#00ff00",
        skipFontRegistration: true,
      },
    },
    {
      id: "modifier-typ",
      description: "typ option",
      options: {
        grundzeichen: typGrund.id,
        typ: "Typ 3",
        skipFontRegistration: true,
      },
    },
    {
      id: "symbol-only-no-grundzeichen",
      description: "symbol without a grundzeichen",
      options: { symbol: symbole[0].id, skipFontRegistration: true },
    },
    {
      id: "modifier-font-registration",
      description: "real font registration (not skipped)",
      options: { grundzeichen: nameGrund.id, name: "Test" },
    },
    {
      id: "kitchen-sink",
      description:
        "Grundzeichen + Organisation + Symbol + Fachaufgabe + Einheit + Verwaltungsstufe + name together",
      options: {
        grundzeichen: fachaufgabeGrund.id,
        organisation: "feuerwehr",
        fachaufgabe: fachaufgaben[0].id,
        symbol: symbole[0].id,
        einheit: einheiten[0].id,
        verwaltungsstufe: verwaltungsstufen[0].id,
        name: "Kitchen Sink",
        skipFontRegistration: true,
      },
    },
  ];
}

export const cases: Case[] = [
  ...grundzeichenCases(),
  ...symbolCases(),
  ...fachaufgabeCases(),
  ...organisationCases(),
  ...einheitCases(),
  ...verwaltungsstufeCases(),
  ...funktionCases(),
  ...modifierCases(),
];
```

- [ ] **Step 3: Verify the case list**

Every bash block below is self-contained (includes its own `cd`) — don't rely on the working directory from a previous step.

```bash
cd packages/core && ts-node -P tsconfig-scripts.json -e "
import { cases } from './e2e/cases';
const ids = new Set<string>();
for (const c of cases) {
  if (ids.has(c.id)) throw new Error('duplicate id: ' + c.id);
  ids.add(c.id);
}
console.log('total cases:', cases.length);
console.log('unique ids:', ids.size);
"
```

Expected: no thrown error, `total cases` and `unique ids` equal, and `total cases` roughly 36 (Grundzeichen) + 84 (Symbole) + 42 (Fachaufgaben) + 8 (Organisationen) + 8 (Einheiten) + 6 (Verwaltungsstufen) + 2 (Funktionen) + 9 (modifier cases) ≈ 195.

- [ ] **Step 4: Verify every case actually renders without throwing**

```bash
cd packages/core && ts-node -P tsconfig-scripts.json -e "
import { erzeugeTaktischesZeichen } from './src';
import { cases } from './e2e/cases';
let failed = 0;
for (const c of cases) {
  try {
    erzeugeTaktischesZeichen(c.options);
  } catch (error) {
    failed++;
    console.error(c.id, error);
  }
}
console.log(failed === 0 ? 'all cases rendered' : failed + ' cases failed to render');
"
```

Expected: `all cases rendered`. If any case throws, fix `cases.ts` (most likely cause: a `requireGrundzeichenAccepting` pairing that's technically accepted but combines with another option in a way the render logic doesn't expect — adjust that specific hand-written case) before moving on.

- [ ] **Step 5: Commit**

Run from the repo root (paths below are repo-root-relative):

```bash
git add packages/core/e2e/cases.ts packages/core/tsconfig-scripts.json
git commit -m "Add e2e case generation for SVG rendering suite"
```

---

### Task 2: HTML failure report renderer

**Files:**
- Create: `packages/core/e2e/report.ts`

**Interfaces:**
- Consumes: nothing from earlier tasks (pure function, no imports from `cases.ts` or `../src` needed — it only needs `TaktischesZeichen` for typing the `options` field it displays).
- Produces: `export type Failure = { id: string; description: string; options: TaktischesZeichen; expected: string; actual: string; diffText: string; reason: "mismatch" | "missing-golden" }` and `export function buildReport(failures: Failure[]): string`. Task 4 constructs `Failure[]` and calls `buildReport` to get the HTML string it writes to disk.

- [ ] **Step 1: Write `packages/core/e2e/report.ts`**

```ts
import type { TaktischesZeichen } from "../src";

export type Failure = {
  id: string;
  description: string;
  options: TaktischesZeichen;
  expected: string;
  actual: string;
  diffText: string;
  reason: "mismatch" | "missing-golden";
};

export function buildReport(failures: Failure[]): string {
  const sections = failures.map(renderCase).join("\n");

  return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8" />
<title>SVG e2e failures</title>
<style>
  body { font-family: system-ui, sans-serif; margin: 2rem; background: #fafafa; color: #111; }
  h1 { margin-bottom: 0.25rem; }
  .case { border: 1px solid #ddd; border-radius: 8px; padding: 1rem 1.5rem; margin-bottom: 2rem; background: #fff; }
  .panels { display: flex; gap: 1.5rem; flex-wrap: wrap; }
  figure { margin: 0; }
  .frame { border: 1px solid #ccc; padding: 0.5rem; background: #fff; width: 220px; min-height: 140px; }
  .frame svg { max-width: 200px; height: auto; display: block; }
  .overlay { position: relative; width: 220px; height: 140px; }
  .overlay-expected, .overlay-actual { position: absolute; top: 0.5rem; left: 0.5rem; }
  .overlay-expected svg { filter: invert(16%) sepia(90%) saturate(6000%) hue-rotate(-10deg); opacity: 0.6; max-width: 200px; }
  .overlay-actual svg { filter: invert(30%) sepia(90%) saturate(2000%) hue-rotate(190deg); opacity: 0.6; max-width: 200px; }
  .diff, .options { background: #111; color: #eee; padding: 0.75rem; border-radius: 4px; overflow-x: auto; font-size: 0.85rem; white-space: pre; }
  .options { background: #f4f4f4; color: #333; }
  .reason { font-weight: 600; color: #b3261e; }
</style>
</head>
<body>
  <h1>SVG e2e failures</h1>
  <p>${failures.length} case(s) failed.</p>
  ${sections}
</body>
</html>`;
}

function renderCase(f: Failure): string {
  const expectedPanel = f.expected
    ? stripXmlProlog(f.expected)
    : "<em>(no golden fixture yet)</em>";
  const actualPanel = stripXmlProlog(f.actual);

  return `
    <section class="case">
      <h2>${escapeHtml(f.id)}</h2>
      <p>${escapeHtml(f.description)}</p>
      <p class="reason">${
        f.reason === "missing-golden"
          ? "No golden fixture yet."
          : "Output mismatch."
      }</p>
      <pre class="options">${escapeHtml(JSON.stringify(f.options, null, 2))}</pre>
      <div class="panels">
        <figure>
          <figcaption>Expected</figcaption>
          <div class="frame expected">${expectedPanel}</div>
        </figure>
        <figure>
          <figcaption>Actual</figcaption>
          <div class="frame actual">${actualPanel}</div>
        </figure>
        <figure>
          <figcaption>Overlay (expected = red, actual = blue)</figcaption>
          <div class="frame overlay">
            <div class="overlay-expected">${expectedPanel}</div>
            <div class="overlay-actual">${actualPanel}</div>
          </div>
        </figure>
      </div>
      <pre class="diff">${escapeHtml(f.diffText)}</pre>
    </section>`;
}

function stripXmlProlog(svg: string): string {
  return svg.replace(/^\s*<\?xml[^>]*\?>\s*/, "");
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
```

- [ ] **Step 2: Verify it produces valid, sensible HTML**

Self-contained (includes its own `cd`) — don't rely on the working directory from a previous step:

```bash
cd packages/core && ts-node -P tsconfig-scripts.json -e "
import { buildReport } from './e2e/report';
const html = buildReport([
  {
    id: 'demo-case',
    description: 'demo',
    options: { grundzeichen: 'fahrzeug' },
    expected: '<?xml version=\"1.0\"?><svg viewBox=\"0 0 10 10\"><rect width=\"10\" height=\"10\" /></svg>',
    actual: '<?xml version=\"1.0\"?><svg viewBox=\"0 0 10 10\"><circle r=\"5\" /></svg>',
    diffText: '- rect\n+ circle',
    reason: 'mismatch',
  },
]);
if (!html.includes('demo-case')) throw new Error('missing case id in report');
if (!html.includes('<svg viewBox=\"0 0 10 10\"><rect')) throw new Error('expected svg not embedded');
if (html.includes('<?xml')) throw new Error('xml prolog was not stripped');
console.log('report HTML looks correct, length:', html.length);
"
```

Expected: `report HTML looks correct, length: <some number>` with no thrown error.

- [ ] **Step 3: Commit**

Run from the repo root (paths below are repo-root-relative):

```bash
git add packages/core/e2e/report.ts
git commit -m "Add HTML report renderer for e2e failures"
```

---

### Task 3: Runner — compare and update modes

**Files:**
- Create: `packages/core/e2e/run.ts`
- Create: `packages/core/e2e/fixtures/` (populated by running the script in update mode — not hand-written)
- Modify: `.gitignore`

**Interfaces:**
- Consumes: `cases` from `./cases` (Task 1), `erzeugeTaktischesZeichen` from `../src`, `prettier` (`prettier.format(svg, { parser: "html" }): Promise<string>`).
- Produces: a runnable script. When invoked with `--update` it writes `e2e/fixtures/<id>.svg` for every case. Without `--update` it compares against those files and exits non-zero on any mismatch or missing fixture (this task's version prints a plain-text summary; Task 4 replaces the mismatch reporting with `jest-diff` output and an HTML report — the exit-code and missing-fixture behavior built here doesn't change).

- [ ] **Step 1: Add the gitignore entry for the report directory**

Edit the repo root `.gitignore` (`/.gitignore`, not any per-package one), add at the end:

```
/packages/core/e2e/.report/
```

- [ ] **Step 2: Write `packages/core/e2e/run.ts`**

```ts
import * as fs from "fs";
import * as path from "path";
import * as prettier from "prettier";
import { erzeugeTaktischesZeichen } from "../src";
import { cases } from "./cases";

const fixturesDir = path.resolve(__dirname, "fixtures");
const update = process.argv.includes("--update");

async function formatSvg(svg: string): Promise<string> {
  return prettier.format(svg, { parser: "html" });
}

type PlainFailure = {
  id: string;
  message: string;
};

async function main() {
  fs.mkdirSync(fixturesDir, { recursive: true });

  const failures: PlainFailure[] = [];

  for (const testCase of cases) {
    const image = erzeugeTaktischesZeichen(testCase.options);
    const actual = await formatSvg(image.toString());

    const decodedDataUrl = Buffer.from(
      image.dataUrl.replace(/^data:image\/svg\+xml;base64,/, ""),
      "base64"
    ).toString("utf-8");
    const actualFromDataUrl = await formatSvg(decodedDataUrl);
    if (actualFromDataUrl !== actual) {
      failures.push({
        id: testCase.id,
        message: "dataUrl output does not match toString() output",
      });
      continue;
    }

    const fixturePath = path.join(fixturesDir, `${testCase.id}.svg`);

    if (update) {
      fs.writeFileSync(fixturePath, actual, "utf-8");
      continue;
    }

    if (!fs.existsSync(fixturePath)) {
      failures.push({ id: testCase.id, message: "no golden fixture yet" });
      continue;
    }

    const expected = fs.readFileSync(fixturePath, "utf-8");
    if (expected !== actual) {
      failures.push({ id: testCase.id, message: "output mismatch" });
    }
  }

  if (update) {
    console.log(`Updated ${cases.length} golden fixtures in ${fixturesDir}`);
    return;
  }

  if (failures.length === 0) {
    console.log(`${cases.length} e2e cases passed.`);
    return;
  }

  console.error(`${failures.length} of ${cases.length} e2e cases failed:`);
  for (const failure of failures) {
    console.error(`  ${failure.id}: ${failure.message}`);
  }
  process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

- [ ] **Step 3: Run in update mode to create all fixtures**

Every bash block below is self-contained (includes its own `cd`) — don't rely on the working directory from a previous step.

```bash
cd packages/core && ts-node -P tsconfig-scripts.json e2e/run.ts --update
```

Expected: `Updated <n> golden fixtures in .../e2e/fixtures`, and `ls packages/core/e2e/fixtures | wc -l` matches the case count from Task 1 Step 3.

- [ ] **Step 4: Run in compare mode and confirm a clean pass**

```bash
cd packages/core && ts-node -P tsconfig-scripts.json e2e/run.ts
```

Expected: `<n> e2e cases passed.`, exit code 0 (check with `echo $?`).

- [ ] **Step 5: Prove the compare path actually catches a regression**

Temporarily edit `packages/core/src/grundzeichen.ts`: find the `"taktische-formation"` entry's `padding: [10, 20]` (around line 172) and change it to `padding: [10, 21]`. Re-run:

```bash
cd packages/core && ts-node -P tsconfig-scripts.json e2e/run.ts
```

Expected: failure output listing `grundzeichen-taktische-formation: output mismatch` (and only that case, or that case plus any other case that happens to reuse the same padding constant — confirm the failing cases are limited to ones actually affected). Exit code 1.

Revert the edit (run from the repo root; the path is repo-root-relative):

```bash
git checkout -- packages/core/src/grundzeichen.ts
```

Re-run Step 4's command once more and confirm it's back to a clean pass.

- [ ] **Step 6: Commit**

Run from the repo root (paths below are repo-root-relative):

```bash
git add packages/core/e2e/run.ts packages/core/e2e/fixtures .gitignore
git commit -m "Add e2e runner with compare and update modes"
```

---

### Task 4: Failure feedback — text diff for agents, HTML report for humans

**Files:**
- Modify: `packages/core/e2e/run.ts` (replace the failure-handling parts built in Task 3)
- Modify: `packages/core/package.json` (add `jest-diff` devDependency)

**Interfaces:**
- Consumes: `Failure`/`buildReport` from `./report` (Task 2), the `diff` function from `jest-diff` (`diff(expected: string, received: string, options?): string | null` — returns `null` only when the two strings are equal, which never happens on the code paths that call it here).
- Produces: same CLI contract as Task 3 (`run.ts` / `run.ts --update`), but on failure it now also prints a colored diff per case to stdout and writes `e2e/.report/report.html`. Nothing outside this task imports from `run.ts` — it's an entry point, not a module other code depends on.

- [ ] **Step 1: Add `jest-diff` as an explicit devDependency**

It's already present in `node_modules` transitively through `jest`, so this adds no new install — it makes the direct `import` in `run.ts` correct instead of relying on hoisting.

Edit `packages/core/package.json`, in `devDependencies`:

```json
  "devDependencies": {
    "@types/jest": "^30.0.0",
    "@types/node": "^24.10.1",
    "jest": "^30.2.0",
    "jest-diff": "^30.2.0",
    "prettier": "^3.6.2",
    "shx": "^0.4.0",
    "ts-jest": "^29.4.5",
    "ts-node": "^10.9.2",
    "typescript": "^5.9.3"
  },
```

Run `npm install` from the repo root afterward so the lockfile records the direct dependency (no new package should actually download, since it's already in the tree).

- [ ] **Step 2: Rewrite `packages/core/e2e/run.ts` to use `jest-diff` and write the HTML report**

Replace the full file with:

```ts
import * as fs from "fs";
import * as path from "path";
import { diff } from "jest-diff";
import * as prettier from "prettier";
import { erzeugeTaktischesZeichen } from "../src";
import { cases } from "./cases";
import { buildReport, type Failure } from "./report";

const fixturesDir = path.resolve(__dirname, "fixtures");
const reportDir = path.resolve(__dirname, ".report");
const update = process.argv.includes("--update");

async function formatSvg(svg: string): Promise<string> {
  return prettier.format(svg, { parser: "html" });
}

function diffText(expected: string, actual: string): string {
  return (
    diff(expected, actual, { expand: false }) ??
    "(strings differ but jest-diff produced no output)"
  );
}

async function main() {
  fs.mkdirSync(fixturesDir, { recursive: true });

  const failures: Failure[] = [];

  for (const testCase of cases) {
    const image = erzeugeTaktischesZeichen(testCase.options);
    const actual = await formatSvg(image.toString());

    const decodedDataUrl = Buffer.from(
      image.dataUrl.replace(/^data:image\/svg\+xml;base64,/, ""),
      "base64"
    ).toString("utf-8");
    const actualFromDataUrl = await formatSvg(decodedDataUrl);
    if (actualFromDataUrl !== actual) {
      failures.push({
        id: testCase.id,
        description: testCase.description,
        options: testCase.options,
        expected: actual,
        actual: actualFromDataUrl,
        diffText: diffText(actual, actualFromDataUrl),
        reason: "mismatch",
      });
      continue;
    }

    const fixturePath = path.join(fixturesDir, `${testCase.id}.svg`);

    if (update) {
      fs.writeFileSync(fixturePath, actual, "utf-8");
      continue;
    }

    if (!fs.existsSync(fixturePath)) {
      failures.push({
        id: testCase.id,
        description: testCase.description,
        options: testCase.options,
        expected: "",
        actual,
        diffText: `No golden fixture at ${path.relative(
          process.cwd(),
          fixturePath
        )}. Run "npm run test:e2e:update" to create it, then review the new file.`,
        reason: "missing-golden",
      });
      continue;
    }

    const expected = fs.readFileSync(fixturePath, "utf-8");
    if (expected !== actual) {
      failures.push({
        id: testCase.id,
        description: testCase.description,
        options: testCase.options,
        expected,
        actual,
        diffText: diffText(expected, actual),
        reason: "mismatch",
      });
    }
  }

  if (update) {
    console.log(`Updated ${cases.length} golden fixtures in ${fixturesDir}`);
    return;
  }

  if (failures.length === 0) {
    console.log(`${cases.length} e2e cases passed.`);
    return;
  }

  console.error(`${failures.length} of ${cases.length} e2e cases failed:\n`);
  for (const failure of failures) {
    console.error(`--- ${failure.id} (${failure.description}) ---`);
    console.error(failure.diffText);
    console.error("");
  }

  fs.mkdirSync(reportDir, { recursive: true });
  const reportPath = path.join(reportDir, "report.html");
  fs.writeFileSync(reportPath, buildReport(failures), "utf-8");
  console.error(`Visual report written to ${reportPath}`);

  process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

- [ ] **Step 3: Verify the clean-pass path still works**

Every bash block below is self-contained (includes its own `cd`) — don't rely on the working directory from a previous step.

```bash
cd packages/core && ts-node -P tsconfig-scripts.json e2e/run.ts
```

Expected: `<n> e2e cases passed.`, exit 0, no `.report` directory created (or if one exists from a previous manual run, it's simply not touched).

- [ ] **Step 4: Verify the failure path — text diff and HTML report**

Repeat the same break used in Task 3 Step 5: edit `packages/core/src/grundzeichen.ts`, change the `"taktische-formation"` entry's `padding: [10, 20]` to `padding: [10, 21]`. Run:

```bash
rm -rf packages/core/e2e/.report
cd packages/core && ts-node -P tsconfig-scripts.json e2e/run.ts
echo "exit code: $?"
```

Expected:
- stdout/stderr shows exactly `1 of <n> e2e cases failed:` (or more, if other cases share the constant — confirm the set matches Task 3 Step 5), a `--- grundzeichen-taktische-formation (...) ---` header, and a real `- Expected` / `+ Received` colored diff body from `jest-diff` (not a generic "output mismatch" string).
- `packages/core/e2e/.report/report.html` exists.
- `exit code: 1`.

Open `packages/core/e2e/.report/report.html` (`open packages/core/e2e/.report/report.html` on macOS) and confirm by eye: the failing case section shows an "Expected" panel and an "Actual" panel that both actually render as visible SVG shapes (not raw text), the overlay panel shows both colored outlines, and the diff text block below is readable.

Revert the break (repo-root-relative path — run from the repo root) and confirm a clean pass again:

```bash
git checkout -- packages/core/src/grundzeichen.ts
```

```bash
cd packages/core && ts-node -P tsconfig-scripts.json e2e/run.ts
```

Expected: `<n> e2e cases passed.`.

- [ ] **Step 5: Commit**

Run from the repo root (paths below are repo-root-relative):

```bash
git add packages/core/e2e/run.ts packages/core/package.json package-lock.json
git commit -m "Wire jest-diff text output and HTML report into e2e runner"
```

---

### Task 5: Fix pre-existing Prettier formatting drift

**Why this is here:** checking with each package's own locally installed `prettier` binary (not `npx`, which resolves a stale hoisted `2.8.8` at the repo root instead of the `^3.6.2` every package actually declares) shows the repo is not currently clean under Prettier 3.6.2: 12 of ~15 files in `packages/core/src`, 1 file in `packages/react/src`, 1 file in `packages/web-component/src`, and 10 files in `packages/website`. This predates this work. Task 6 adds a `format:check` script and documents it in `AGENTS.md` as something to run before committing — that instruction is only honest if the check starts green, so fix the drift first, using the new e2e suite to prove the reformat is behavior-neutral for `core`.

**Files:**
- Modify: whichever files `prettier --check` flags in `packages/core/src`, `packages/react/src`, `packages/web-component/src`, `packages/website/{views,src,scripts}` and its root `*.js` files. Exact list is discovered by running the check, not enumerated here — do not hand-edit any file; only run `prettier --write` and let it rewrite them.

**Interfaces:** none — this is a mechanical formatting pass with no code behavior change (verified in Step 1 via the e2e suite this plan just built).

Every bash block in this task is self-contained (includes its own `cd`, always from the repo root, never relative to a previous step) — don't rely on the working directory from a previous step.

- [ ] **Step 1: Reformat `packages/core` and prove it's behavior-neutral**

```bash
cd packages/core && ./node_modules/.bin/prettier --write src && git status --short src
```

Expected: only the 12 previously-flagged files show as modified (`einheiten.ts`, `fachaufgaben.ts`, `font.ts`, `grundzeichen.ts`, `svg.ts`, `symbole.ts`, `taktisches-zeichen.spec.ts`, `taktisches-zeichen.ts`, `text.ts`, `utils.spec.ts`, `utils.ts`, `verwaltungsstufen.ts`).

Now prove the reformat changed style only, not behavior. The `test:e2e` npm script doesn't exist yet (Task 6 adds it) — invoke the runner directly, the same way Tasks 3 and 4 did:

```bash
cd packages/core && ts-node -P tsconfig-scripts.json e2e/run.ts
```

```bash
cd packages/core && npm test
```

Expected: both pass exactly as before (`<n> e2e cases passed.` and all Jest specs green). If either fails, the formatting change altered something semantic — investigate before proceeding; reformatting alone should never do this, so a failure here points at a real bug, not a fixture to update.

```bash
cd packages/core && git add src && git commit -m "Reformat core/src with prettier 3.6.2"
```

- [ ] **Step 2: Reformat `packages/react`**

```bash
cd packages/react && ./node_modules/.bin/prettier --write src && git status --short src && npm run build
```

Expected: only `src/TaktischesZeichen.tsx` modified; `npm run build` exits 0.

```bash
cd packages/react && git add src && git commit -m "Reformat react/src with prettier 3.6.2"
```

- [ ] **Step 3: Reformat `packages/web-component`**

```bash
cd packages/web-component && ./node_modules/.bin/prettier --write src && git status --short src && npm run build
```

Expected: only `src/TaktischesZeichen.ts` modified; `npm run build` exits 0.

```bash
cd packages/web-component && git add src && git commit -m "Reformat web-component/src with prettier 3.6.2"
```

- [ ] **Step 4: Reformat `packages/website`**

```bash
cd packages/website && ./node_modules/.bin/prettier --write views src scripts *.js && git status --short && npm run build
```

Expected: the 10 previously-flagged files modified (`views/_includes/footer.md`, `views/_includes/statistics.md`, `views/_includes/usage_cli.md`, `views/_includes/usage_core.md`, `views/_includes/usage_react.md`, `views/_includes/usage_web-component.md`, `views/grundzeichen.html`, `src/demo.js`, `scripts/generate.js`, `webpack.config.js`); `npm run build` exits 0.

```bash
cd packages/website && git add views src scripts webpack.config.js && git commit -m "Reformat website with prettier 3.6.2"
```

- [ ] **Step 5: Confirm every package is clean now**

```bash
(cd packages/core && ./node_modules/.bin/prettier --check src)
(cd packages/react && ./node_modules/.bin/prettier --check src)
(cd packages/cli && ./node_modules/.bin/prettier --check bin)
(cd packages/web-component && ./node_modules/.bin/prettier --check src)
(cd packages/website && ./node_modules/.bin/prettier --check views src scripts *.js)
```

Expected: every one prints `All matched files use Prettier code style!`.

---

### Task 6: Wire npm scripts and write AGENTS.md

**Files:**
- Modify: `package.json` (root)
- Modify: `packages/core/package.json`
- Modify: `packages/react/package.json`
- Modify: `packages/cli/package.json`
- Modify: `packages/web-component/package.json`
- Modify: `packages/website/package.json`
- Create: `AGENTS.md` (root)

**Interfaces:** none new — this task only exposes what Tasks 1-5 already built as npm scripts, plus documents them.

- [ ] **Step 1: Add scripts to `packages/core/package.json`**

Edit only the `scripts` block (e.g. via a targeted find-and-replace, not a whole-file rewrite) — `devDependencies` already has `jest-diff` from Task 4 and must be left untouched. Change the `scripts` block to:

```json
  "scripts": {
    "test": "jest",
    "test:coverage": "jest --coverage",
    "test:e2e": "ts-node -P tsconfig-scripts.json e2e/run.ts",
    "test:e2e:update": "ts-node -P tsconfig-scripts.json e2e/run.ts --update",
    "clean": "shx rm -rf coverage dist test-icons",
    "build": "npm run build:esm && npm run build:cjs",
    "build:esm": "tsc",
    "build:cjs": "tsc -p tsconfig-cjs.json",
    "format": "prettier --write src",
    "format:check": "prettier --check src",
    "statistics": "ts-node -P tsconfig-scripts.json scripts/statistics.ts"
  },
```

- [ ] **Step 2: Add `format:check` to the other four packages**

`packages/react/package.json`, in `scripts`, add after `"format": "prettier --write src"`:

```json
    "format:check": "prettier --check src"
```

`packages/cli/package.json`, in `scripts`, add after `"format": "prettier --write bin"`:

```json
    "format:check": "prettier --check bin"
```

`packages/web-component/package.json`, in `scripts`, add after `"format": "prettier --write src"`:

```json
    "format:check": "prettier --check src"
```

`packages/website/package.json`, in `scripts`, add after `"format": "prettier --write views src scripts *.js"`:

```json
    "format:check": "prettier --check views src scripts *.js"
```

- [ ] **Step 3: Add root scripts**

Edit `package.json` (root), in `scripts`, add after `"format": "lerna run format"`:

```json
    "format:check": "lerna run format:check",
    "test:e2e": "lerna run test:e2e",
```

- [ ] **Step 4: Verify from the repo root**

```bash
npm run test:e2e
npm run format:check
```

Expected: `test:e2e` runs `packages/core`'s suite (the only package defining it) and prints `<n> e2e cases passed.`; `format:check` runs across all five packages and every one reports clean (per Task 5 Step 5).

- [ ] **Step 5: Write `AGENTS.md`**

Create `AGENTS.md` at the repo root:

```markdown
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
`@taktische-zeichen/core` via its build output, so a `core` source change is
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
```

- [ ] **Step 6: Commit**

Run from the repo root (paths below are repo-root-relative):

```bash
git add package.json packages/core/package.json packages/react/package.json packages/cli/package.json packages/web-component/package.json packages/website/package.json AGENTS.md
git commit -m "Wire test:e2e/format:check scripts and add AGENTS.md"
```
