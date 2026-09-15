import type { TaktischesZeichen } from "../src/index.js";

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
