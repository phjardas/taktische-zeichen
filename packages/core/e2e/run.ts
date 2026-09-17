import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { diff } from "jest-diff";
import * as prettier from "prettier";
import { erzeugeTaktischesZeichen } from "../src/index.js";
import { cases } from "./cases.js";
import { buildReport, type Failure } from "./report.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
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

// jest-diff colors its output via chalk whenever stdout is a TTY, which is
// exactly the case in normal interactive use. Those ANSI escape codes are
// fine on the terminal but survive report.ts's escapeHtml verbatim and show
// up as garbage text in the browser, so strip them before writing the HTML
// report while leaving the terminal output colored.
function stripAnsi(text: string): string {
  // eslint-disable-next-line no-control-regex
  return text.replace(/\x1b\[[0-9;]*m/g, "");
}

async function main() {
  fs.mkdirSync(fixturesDir, { recursive: true });

  const failures: Failure[] = [];

  for (const testCase of cases) {
    try {
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
    } catch (error) {
      // A single case throwing (e.g. an invalid option combination) must
      // not abort the whole run. Record it as a failure with as much
      // diagnostic detail as we have and move on to the remaining cases.
      const details =
        error instanceof Error ? error.stack ?? error.message : String(error);
      failures.push({
        id: testCase.id,
        description: testCase.description,
        options: testCase.options,
        expected: "",
        actual: "",
        diffText: `Case "${testCase.id}" threw an error instead of rendering:\n\n${details}`,
        reason: "mismatch",
      });
      continue;
    }
  }

  if (update) {
    if (failures.length > 0) {
      console.error(
        `${failures.length} of ${cases.length} e2e cases threw and were not updated:\n`
      );
      for (const failure of failures) {
        console.error(`--- ${failure.id} (${failure.description}) ---`);
        console.error(failure.diffText);
        console.error("");
      }
      console.error(
        `Updated ${cases.length - failures.length} of ${
          cases.length
        } golden fixtures in ${fixturesDir} — ${
          failures.length
        } case(s) threw and were not written.`
      );
      process.exitCode = 1;
      return;
    }

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
  const reportFailures = failures.map((failure) => ({
    ...failure,
    diffText: stripAnsi(failure.diffText),
  }));
  fs.writeFileSync(reportPath, buildReport(reportFailures), "utf-8");
  console.error(`Visual report written to ${reportPath}`);

  process.exitCode = 1;
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
