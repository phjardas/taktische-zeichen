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
