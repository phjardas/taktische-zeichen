import * as path from "path";
import { promises as fs } from "fs";
import {
  grundzeichen,
  fachaufgaben,
  organisationen,
  einheiten,
  verwaltungsstufen,
  funktionen,
  symbole,
} from "../src";

const root = path.resolve(__dirname, "../../..");

const startTag = "<!-- STATISTICS:START -->";
const endTag = "<!-- STATISTICS:END -->";

const files = [
  "README.md",
  "packages/core/README.md",
  "packages/react/README.md",
];

const statistics = [
  { label: "Grundzeichen", count: grundzeichen.length },
  { label: "Fachaufgaben", count: fachaufgaben.length },
  { label: "Organisationen", count: organisationen.length },
  { label: "Einheiten", count: einheiten.length },
  { label: "Verwaltungsstufen", count: verwaltungsstufen.length },
  { label: "Symbole", count: symbole.length },
]
  .map(({ label, count }) => `- ${count} ${label}`)
  .join("\n");

async function replaceStatistics(file: string) {
  const filename = path.resolve(root, file);
  const contents = await fs.readFile(filename, "utf8");
  const startIndex = contents.indexOf(startTag);
  const endIndex = contents.indexOf(endTag, startIndex);

  if (startIndex < 0 || endIndex < 0) {
    throw new Error(`Could not find ${startTag} or ${endTag} in ${filename}`);
  }

  const newContents =
    contents.substring(0, startIndex) +
    startTag +
    "\n\n" +
    statistics +
    "\n\n" +
    contents.substring(endIndex);

  await fs.writeFile(filename, newContents, "utf-8");
  console.log("Updated: %s", filename);
}

async function main() {
  await Promise.all(files.map(replaceStatistics));
}

main().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
