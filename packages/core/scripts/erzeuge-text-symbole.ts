import { promises as fs } from "fs";
import * as path from "path";
import { erzeugeTaktischesZeichen } from "../src";

const basedir = path.resolve("icons/text");

const texte = ["M", "KatSL", "TEL", "OrgL", "EL", "FüStab"];

async function main() {
  await fs.mkdir(basedir, { recursive: true });

  await Promise.all(
    texte.map(async (text) => {
      const { svg } = erzeugeTaktischesZeichen({
        grundzeichen: "stelle",
        text,
      });
      await fs.writeFile(path.resolve(basedir, `${text}.svg`), svg, "utf8");
    })
  );
}

main().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
