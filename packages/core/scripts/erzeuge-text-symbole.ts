import { promises as fs } from "fs";
import * as path from "path";
import { SVGElementFactory } from "../src/svg";
import {
  einsatzabschnittsleitung,
  einsatzleitung,
  fuehrungsstab,
  gemeindebrandinspektor,
  katsl,
  kreisbrandinspektor,
  kreisbrandmeister,
  leitenderNotarzt,
  leiterGefahrenabwehr,
  meldekopf,
  organisatorischerLeiterRettungsdienst,
  stadtbrandinspektor,
  tel,
  untereinsatzabschnittsleitung,
} from "../src/symbole";

const basedir = path.resolve("icons/text");

const symbole = [
  meldekopf,
  katsl,
  tel,
  einsatzleitung,
  einsatzabschnittsleitung,
  untereinsatzabschnittsleitung,
  leitenderNotarzt,
  organisatorischerLeiterRettungsdienst,
  kreisbrandmeister,
  gemeindebrandinspektor,
  stadtbrandinspektor,
  kreisbrandinspektor,
  leiterGefahrenabwehr,
  fuehrungsstab,
];

async function main() {
  await fs.mkdir(basedir, { recursive: true });

  await Promise.all(
    symbole.map(async ({ size, render, text }) => {
      const factory = new SVGElementFactory();
      const svg = factory
        .svg()
        .push(render(factory))
        .attr("fill", "transparent")
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .attr("style", "background:white")
        .attr("viewBox", `0 0 ${size[0]} ${size[1]}`)
        .render();

      await fs.writeFile(path.resolve(basedir, `${text}.svg`), svg, "utf8");
    })
  );
}

main().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
