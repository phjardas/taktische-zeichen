import { promises as fs } from "fs";
import * as path from "path";
import * as formatXml from "prettify-xml";
import * as yargs from "yargs";
import {
  einheiten,
  erzeugeTaktischesZeichen,
  fachaufgaben,
  funktionen,
  grundzeichen as grundzeichens,
  organisationen,
  symbole,
  TaktischesZeichen,
  verwaltungsstufen,
} from "../src";

const basedir = path.resolve("icons");

async function main() {
  const { output, ...spec } = yargs(process.argv.slice(2))
    .option("grundzeichen", {
      type: "string",
      choices: grundzeichens.map(({ id }) => id),
    })
    .option("organisation", {
      type: "string",
      choices: organisationen.map(({ id }) => id),
    })
    .option("fachaufgabe", {
      type: "string",
      choices: fachaufgaben.map(({ id }) => id),
    })
    .option("einheit", {
      type: "string",
      choices: einheiten.map(({ id }) => id),
    })
    .option("verwaltungsstufe", {
      type: "string",
      choices: verwaltungsstufen.map(({ id }) => id),
    })
    .option("funktion", {
      type: "string",
      choices: funktionen.map(({ id }) => id),
    })
    .option("symbol", {
      type: "string",
      choices: symbole.map(({ id }) => id),
    })
    .option("text", {
      type: "string",
    })
    .option("name", {
      type: "string",
    })
    .option("output", {
      type: "string",
      default: "custom.svg",
    }).argv;

  const tz = erzeugeTaktischesZeichen(spec as TaktischesZeichen);
  await fs.mkdir(basedir, { recursive: true });
  await fs.writeFile(
    path.resolve(basedir, output),
    formatXml(tz.toString()),
    "utf8"
  );
}

main().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
