const {
  erzeugeTaktischesZeichen,
  einheiten,
  grundzeichen,
  fachaufgaben,
  verwaltungsstufen,
  funktionen,
  organisationen,
  symbole,
} = require("taktische-zeichen-core");
const path = require("path");
const fs = require("fs").promises;

function erzeugeGrundzeichen() {
  return [
    "grundzeichen",
    grundzeichen
      .map((f) => ({
        id: f.id,
        label: f.label,
        src: erzeugeTaktischesZeichen({
          grundzeichen: f.id,
          skipFontRegistration: true,
        }).toString(),
      }))
      .sort((a, b) => a.label.localeCompare(b.label)),
  ];
}

function erzeugeFachaufgaben() {
  return [
    "fachaufgaben",
    fachaufgaben
      .map((f) => ({
        id: f.id,
        label: f.label,
        src: erzeugeTaktischesZeichen({
          grundzeichen: "taktische-formation",
          fachaufgabe: f.id,
          skipFontRegistration: true,
        }).toString(),
      }))
      .sort((a, b) => a.label.localeCompare(b.label)),
  ];
}

function erzeugeOrganisationen() {
  return [
    "organisationen",
    organisationen
      .map((f) => ({
        id: f.id,
        label: f.label,
        src: erzeugeTaktischesZeichen({
          grundzeichen: "stelle",
          organisation: f.id,
          skipFontRegistration: true,
        }).toString(),
      }))
      .sort((a, b) => a.label.localeCompare(b.label)),
  ];
}

function erzeugeEinheiten() {
  return [
    "einheiten",
    einheiten.map((f) => ({
      id: f.id,
      label: f.label,
      src: erzeugeTaktischesZeichen({
        grundzeichen: "taktische-formation",
        einheit: f.id,
        skipFontRegistration: true,
      }).toString(),
    })),
  ];
}

function erzeugeVerwaltungsstufen() {
  return [
    "verwaltungsstufen",
    verwaltungsstufen.map((f) => ({
      id: f.id,
      label: f.label,
      src: erzeugeTaktischesZeichen({
        grundzeichen: "taktische-formation",
        verwaltungsstufe: f.id,
        skipFontRegistration: true,
      }).toString(),
    })),
  ];
}

function erzeugeFunktionen() {
  return [
    "funktionen",
    funktionen.map((f) => ({
      id: f.id,
      label: f.label,
      src: erzeugeTaktischesZeichen({
        grundzeichen: "person",
        funktion: f.id,
        skipFontRegistration: true,
      }).toString(),
    })),
  ];
}

function erzeugeSymbole() {
  return [
    "symbole",
    symbole.map((f) => ({
      id: f.id,
      label: f.label,
      src: erzeugeTaktischesZeichen({
        grundzeichen: "ohne",
        symbol: f.id,
        skipFontRegistration: true,
      }).toString(),
    }))
    .sort((a, b) => a.label.localeCompare(b.label)),
];
}

async function main() {
  const entries = Object.fromEntries([
    erzeugeGrundzeichen(),
    erzeugeFachaufgaben(),
    erzeugeOrganisationen(),
    erzeugeEinheiten(),
    erzeugeVerwaltungsstufen(),
    erzeugeFunktionen(),
    erzeugeSymbole(),
  ]);
  await fs.writeFile(
    path.join(__dirname, "../views/views.11tydata.json"),
    JSON.stringify(entries, null, 2),
    "utf-8"
  );
}

main().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
