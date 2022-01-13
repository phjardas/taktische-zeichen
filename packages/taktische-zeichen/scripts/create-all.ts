import { promises as fs } from "fs";
import * as path from "path";
import * as formatXml from "prettify-xml";
import {
  ComponentType,
  einheiten,
  erzeugeTaktischesZeichen,
  fachaufgaben,
  funktionen,
  grundzeichen as grundzeichens,
  organisationen,
  symbole,
  TaktischesZeichen,
} from "../src";

const basedir = path.resolve("icons");

type EnhanceableTaktischesZeichen = TaktischesZeichen & {
  accepts?: ComponentType[];
};

type Enhancer = (
  spec: EnhanceableTaktischesZeichen
) => Array<EnhanceableTaktischesZeichen>;

const withOrganisationen: Enhancer = (spec) => [
  spec,
  ...organisationen.map(({ id: organisation }) => ({ ...spec, organisation })),
];

const withEinheiten: Enhancer = (spec) =>
  accepts(spec, "einheit")
    ? [spec, ...einheiten.map(({ id: einheit }) => ({ ...spec, einheit }))]
    : [spec];

const withFachaufgaben: Enhancer = (spec) =>
  accepts(spec, "fachaufgabe")
    ? [
        spec,
        ...fachaufgaben.map(({ id: fachaufgabe }) => ({
          ...spec,
          fachaufgabe,
        })),
      ]
    : [spec];

const withFunktionen: Enhancer = (spec) =>
  accepts(spec, "funktion")
    ? [spec, ...funktionen.map(({ id: funktion }) => ({ ...spec, funktion }))]
    : [spec];

const withSymbolen: Enhancer = (spec) =>
  accepts(spec, "symbol")
    ? [spec, ...symbole.map(({ id: symbol }) => ({ ...spec, symbol }))]
    : [spec];

function accepts(
  { accepts }: EnhanceableTaktischesZeichen,
  type: ComponentType
): boolean {
  if (!accepts) return true;
  return accepts.includes(type);
}

function createSpecs(): Array<EnhanceableTaktischesZeichen> {
  return grundzeichens
    .map(({ id: grundzeichen, accepts }) => ({ grundzeichen, accepts }))
    .flatMap(withOrganisationen)
    .flatMap(withFachaufgaben)
    .flatMap(withEinheiten)
    .flatMap(withFunktionen)
    .flatMap(withSymbolen);
}

async function create(spec: EnhanceableTaktischesZeichen) {
  const { svg } = erzeugeTaktischesZeichen(spec);
  const dir = path.resolve(
    basedir,
    spec.grundzeichen,
    ...[
      spec.organisation ?? "keine",
      (accepts(spec, "fachaufgabe") && (spec.fachaufgabe ?? "keine")) || "",
    ].filter(Boolean)
  );

  const filename = path.resolve(
    dir,
    [
      spec.grundzeichen,
      spec.organisation ?? "keine",
      (accepts(spec, "fachaufgabe") && (spec.fachaufgabe ?? "keine")) || "",
      (accepts(spec, "einheit") && (spec.einheit ?? "keine")) || "",
      (accepts(spec, "funktion") && (spec.funktion ?? "keine")) || "",
      (accepts(spec, "symbol") && (spec.symbol ?? "keine")) || "",
    ]
      .filter(Boolean)
      .join("_") + ".svg"
  );

  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(filename, formatXml(svg), "utf8");
}

async function main() {
  const specs = createSpecs();
  console.log("Erzeuge %d Zeichen...", specs.length);
  await Promise.all(specs.map(create));
}

main().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
