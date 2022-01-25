import { promises as fs } from "fs";
import * as path from "path";
import {
  einheiten,
  fachaufgaben,
  grundzeichen,
  organisationen,
  symbole,
  verwaltungsstufen,
} from "../src";

const statistics = [
  { label: "Grundzeichen", count: grundzeichen.length },
  { label: "Fachaufgaben", count: fachaufgaben.length },
  { label: "Organisationen", count: organisationen.length },
  { label: "Einheiten", count: einheiten.length },
  { label: "Verwaltungsstufen", count: verwaltungsstufen.length },
  { label: "Symbole", count: symbole.length },
];

async function main() {
  const filename = path.resolve(__dirname, "../statistics.json");
  await fs.writeFile(filename, JSON.stringify(statistics, null, 2), "utf-8");
}

main().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
