const fs = require("fs").promises;
const path = require("path");
const { grundzeichen: grundzeichens } = require(".");

async function main() {
  const tests = grundzeichens
    .map((g) => g.id)
    .flatMap((grundzeichen) =>
      [
        undefined,
        "brandbekaempfung",
        "dekontamination",
        "rettungswesen",
      ].flatMap((fachaufgabe) =>
        [undefined, "feuerwehr", "hilfsorganisation", "thw"].flatMap(
          (organisation) =>
            [undefined, "staffel", "gruppe", "bereitschaft"].flatMap(
              (einheit) => {
                const name = [grundzeichen, organisation, fachaufgabe, einheit]
                  .map((s) => s ?? "keine")
                  .join("_");
                const spec = JSON.stringify({
                  grundzeichen,
                  organisation,
                  fachaufgabe,
                  einheit,
                });
                return `it('${name}', () => expect(getIcon(${spec})).resolves.toMatchInlineSnapshot());`;
              }
            )
        )
      )
    );

  const suite = `
import { promises as fs } from "fs";
import * as formatXml from "prettify-xml";
import { createIcon, type IconDescriptor } from "./icon";

async function getIcon(descriptor: IconDescriptor) {
  const { svg } = createIcon(descriptor);
  await fs.mkdir("test-icons", { recursive: true });
  await fs.writeFile(
    \`test-icons/\${expect.getState().currentTestName}.svg\`,
    formatXml(svg),
    "utf8"
  );
  return svg;
}

describe('icon', () => {
${tests.join("\n\n")}
});
`.trim();

  await fs.writeFile(path.join(__dirname, "src/icon.spec.ts"), suite, "utf8");
}

main().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
