import { promises as fs } from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import {
  einheiten,
  fachaufgaben,
  grundzeichen,
  organisationen,
  symbole,
  verwaltungsstufen,
} from "../src/index.js";

const statistics = [
  { label: "Grundzeichen", count: grundzeichen.length },
  { label: "Fachaufgaben", count: fachaufgaben.length },
  { label: "Organisationen", count: organisationen.length },
  { label: "Einheiten", count: einheiten.length },
  { label: "Verwaltungsstufen", count: verwaltungsstufen.length },
  { label: "Symbole", count: symbole.length },
];

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  const filename = path.resolve(__dirname, "../statistics.json");
  await fs.writeFile(filename, JSON.stringify(statistics, null, 2), "utf-8");
}

main().catch((error: unknown) => {
  process.exitCode = 1;
  console.error(error);
});
