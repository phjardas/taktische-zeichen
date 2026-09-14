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
