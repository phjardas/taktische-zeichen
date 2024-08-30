#!/usr/bin/env node
"use strict";

const prettifyXml = require("prettify-xml");
const {
  einheiten,
  erzeugeTaktischesZeichen,
  fachaufgaben,
  funktionen,
  grundzeichen: grundzeichens,
  organisationen,
  symbole,
  verwaltungsstufen,
} = require("taktische-zeichen-core");
const yargs = require("yargs");
const { version } = require("../package.json");

const spec = yargs(process.argv.slice(2))
  .version(version)
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
  .option("text", { type: "string" })
  .option("name", { type: "string" })
  .option("typ", { type: "string" })
  .option("organisation-name", { type: "string" })
  .option("farbe", { type: "string" })
  .options("skip-font-registration", { type: "boolean" }).argv;

const tz = erzeugeTaktischesZeichen(spec);
console.log(prettifyXml(tz.toString()));
