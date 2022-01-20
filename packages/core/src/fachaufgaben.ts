import { SVG } from "./svg";
import {
  abc,
  beleuchtung,
  bett,
  brauchwasser,
  dekontamination,
  drehleiter,
  elektrizitaet,
  geraete,
  hebegeraet,
  hund,
  pumpe,
  raeumgeraet,
  schlachten,
  sprengmittel,
  sprengung,
  SymbolSpec,
  transport,
  trinkwasser,
  verbrauchsgueter,
  verpflegung,
  veterinaerwesen,
  warnung,
  wasser,
  wasserfahrzeug,
} from "./symbole";
import type { Rect, Renderable } from "./types";
import { addPoints, Component, Parent, placeComponent } from "./utils";

export type FachaufgabeId =
  | "brandbekaempfung"
  | "hoehenrettung"
  | "wasserversorgung"
  | "technische-hilfeleistung"
  | "heben"
  | "bergung"
  | "raeumen"
  | "entschaerfen"
  | "sprengen"
  | "beleuchtung"
  | "transport"
  | "abc"
  | "messen"
  | "dekontamination"
  | "dekontamination-personen"
  | "dekontamination-geraete"
  | "umweltschaeden-gewaesser"
  | "rettungswesen"
  | "aerztliche-versorgung"
  | "krankenhaus"
  | "einsatzeinheit"
  | "betreuung"
  | "seelsorge"
  | "unterbringung"
  | "logistik"
  | "verpflegung"
  | "verbrauchsgueter"
  | "versorgung-trinkwasser"
  | "versorgung-brauchwasser"
  | "versorgung-elektrizitaet"
  | "instandhaltung"
  | "fuehrung"
  | "iuk"
  | "erkundung"
  | "veterinaerwesen"
  | "schlachten"
  | "wasserrettung"
  | "wasserfahrzeuge"
  | "rettungshunde"
  | "pumpen"
  | "abwehr-wassergefahren"
  | "warnen";

export type Fachaufgabe = Renderable & {
  id: FachaufgabeId;
  label: string;
  cover?: boolean;
  nameArea?: (grundNameArea: Rect) => Rect;
  organisationNameArea?: (grundNameArea: Rect) => Rect;
};

const brandbekaempfung = (svg: SVG) =>
  svg.path("M0,22.5 H75 M75,0 L50,22.5 L75,45");

const logistik: Parent & Component = {
  size: [74, 45],
  paintableArea: [
    [0, 0],
    [74, 37],
  ],
  render: (svg: SVG) => svg.rect([0, 37], [75, 8]).attr("fill", "black"),
};

function logistikFachaufgabe({
  symbol,
  ...props
}: Pick<Fachaufgabe, "id" | "label"> & { symbol: SymbolSpec }): Fachaufgabe {
  return {
    ...props,
    cover: true,
    size: logistik.size,
    organisationNameArea: (grund) => [
      addPoints(grund[0], [0, -7]),
      addPoints(grund[1], [0, -7]),
    ],
    render: (svg) =>
      svg
        .g()
        .push(logistik.render(svg))
        .push(
          placeComponent({
            parent: logistik,
            component: symbol,
            padding: [13, 20, 8],
            svg,
          }).element
        ),
  };
}

const erkunden = (svg: SVG) => svg.path("M0,45 L75,0");

function symbolFachaufgabe(
  symbol: SymbolSpec
): Pick<Fachaufgabe, "size" | "render"> {
  return {
    size: symbol.size,
    render: (svg) => symbol.render(svg),
  };
}

export const fachaufgaben: Array<Fachaufgabe> = [
  {
    id: "brandbekaempfung",
    label: "Brandbekämpfung",
    size: [75, 45],
    cover: true,
    render: brandbekaempfung,
    organisationNameArea: (grund) => [grund[0], addPoints(grund[1], [-8, 0])],
  },
  {
    id: "hoehenrettung",
    label: "Rettung aus Höhen und Tiefen",
    ...symbolFachaufgabe(drehleiter),
  },
  {
    id: "wasserversorgung",
    label: "Wasserversorgung und -förderung",
    size: [75, 45],
    cover: true,
    render: (svg) =>
      svg
        .g()
        .push(brandbekaempfung(svg))
        .push(
          svg.path(
            "M27,19 v-5 c0,-6 4,-6 4,0 c0,6 4,6 4,0 c0,-6 4,-6 4,0 c0,6 4,6 4,0 c0,-6 4,-6 4,0 v5"
          )
        ),
    organisationNameArea: (grund) => [grund[0], addPoints(grund[1], [-8, 0])],
  },
  {
    id: "technische-hilfeleistung",
    label: "Technische Hilfeleistung",
    size: [38, 10],
    render: (svg) =>
      svg.path(
        "M1,1 l11,3 M1,9 l11,-3 M12,2 h15 v6 h-15 Z M27,4 c3,-3 7,-3 10,0 M27,7 c3,-3 7,-3 10,0"
      ),
  },
  {
    id: "heben",
    label: "Heben von Lasten",
    ...symbolFachaufgabe(hebegeraet),
  },
  {
    id: "bergung",
    label: "Bergung",
    size: [75, 45],
    cover: true,
    render: (svg) => svg.path("M0,15 H15 A22.5 20 180 1 0 60 15 H75"),
  },
  {
    id: "raeumen",
    label: "Räumen, Beseitigung von Hindernissen",
    ...symbolFachaufgabe(raeumgeraet),
  },
  {
    id: "entschaerfen",
    label: "Entschärfung, Kampfmittelräumung",
    ...symbolFachaufgabe(sprengmittel),
  },
  {
    id: "sprengen",
    label: "Sprengen",
    ...symbolFachaufgabe(sprengung),
  },
  {
    id: "beleuchtung",
    label: "Beleuchtung",
    ...symbolFachaufgabe(beleuchtung),
  },
  {
    id: "transport",
    label: "Transport",
    ...symbolFachaufgabe(transport),
  },
  {
    id: "abc",
    label: "Gefahrenabwehr bei Gefährlichen Stoffen und Gütern, ABC-Schutz",
    ...symbolFachaufgabe(abc),
  },
  {
    id: "messen",
    label: "Messen, Spüren",
    size: [75, 45],
    cover: true,
    render: (svg) =>
      svg
        .g()
        .push(erkunden(svg))
        .push(
          placeComponent({
            parent: { size: [75, 45] },
            component: abc,
            padding: [10, 20],
            svg,
          }).element
        ),
  },
  {
    id: "dekontamination",
    label: "Dekontamination",
    ...symbolFachaufgabe(dekontamination),
  },
  {
    id: "dekontamination-personen",
    label: "Dekontamination Personen",
    size: dekontamination.size,
    render: (svg) =>
      svg
        .g()
        .push(dekontamination.render(svg))
        .push(svg.path("M13.5,30 v-9 h2 a2 2 0 0 1 0 4.5 h-2")),
  },
  {
    id: "dekontamination-geraete",
    label: "Dekontamination Geräte",
    size: dekontamination.size,
    render: (svg) =>
      svg
        .g()
        .push(dekontamination.render(svg))
        .push(svg.path("M18.5,23 a4 4 0 1 0 0 4 m-3,-1 h3 v4")),
  },
  {
    id: "umweltschaeden-gewaesser",
    label: "Beseitigung von Umweltschäden auf Gewässern, Ölschadenbekämpfung",
    size: [75, 45],
    cover: true,
    render: (svg) =>
      svg
        .g()
        .push(
          dekontamination
            .render(svg)
            .attr("transform", "scale(.6) translate(47.5,14)")
        )
        .push(
          wasser.render(svg).attr("transform", "scale(.8) translate(31,35)")
        ),
  },
  {
    id: "rettungswesen",
    label: "Rettungswesen, Sanitätswesen, Gesundheitswesen",
    size: [75, 45],
    cover: true,
    render: (svg) => svg.path("M0,22.5 H75 M37.5,0 V45"),
  },
  {
    id: "aerztliche-versorgung",
    label: "Ärztliche Versorgung",
    size: [75, 45],
    cover: true,
    render: (svg) => svg.path("M0,22.5 H75 M37.5,0 V45 M25,33 H50"),
  },
  {
    id: "krankenhaus",
    label: "Krankenhaus",
    size: [75, 45],
    cover: true,
    render: (svg) =>
      svg.path("M0,22.5 H75 M37.5,0 V45 M20,14.5 v16 M55,14.5 v16"),
  },
  {
    id: "einsatzeinheit",
    label: "Einsatzeinheit",
    size: [75, 45],
    cover: true,
    render: (svg) => svg.path("M0,22.5 H75 M37.5,0 V45 M0,45 L37.5,1 L75,45"),
  },
  {
    id: "betreuung",
    label: "Betreuung",
    size: [75, 45],
    cover: true,
    render: (svg) => svg.path("M0,45 L37.5,1 L75,45"),
    organisationNameArea: (grund) => [grund[0], addPoints(grund[1], [-5, 0])],
  },
  {
    id: "seelsorge",
    label: "Seelsorge",
    size: [20, 27],
    render: (svg) => svg.path("M8,0 V27 m4,0 V0 M0,8 H20 m0,4 H0"),
  },
  {
    id: "unterbringung",
    label: "Unterbringung",
    ...symbolFachaufgabe(bett),
  },
  {
    id: "logistik",
    label: "Versorgung, Logistik",
    cover: true,
    ...logistik,
  },
  logistikFachaufgabe({
    id: "verpflegung",
    label: "Verpflegung",
    symbol: verpflegung,
  }),
  logistikFachaufgabe({
    id: "verbrauchsgueter",
    label: "Versorgung mit Verbrauchsgütern und Betriebsstoffen",
    symbol: verbrauchsgueter,
  }),
  logistikFachaufgabe({
    id: "versorgung-trinkwasser",
    label: "Versorgung mit Trinkwasser",
    symbol: trinkwasser,
  }),
  logistikFachaufgabe({
    id: "versorgung-brauchwasser",
    label: "Versorgung mit Brauchwasser",
    symbol: brauchwasser,
  }),
  logistikFachaufgabe({
    id: "versorgung-elektrizitaet",
    label: "Versorgung mit Elektrizität",
    symbol: elektrizitaet,
  }),
  logistikFachaufgabe({
    id: "instandhaltung",
    label: "Instandhaltung",
    symbol: geraete,
  }),
  {
    id: "fuehrung",
    label: "Führung, Leitung, Stab",
    size: [75, 45],
    cover: true,
    render: (svg) => svg.rect([0, 0], [75, 8]).attr("fill", "black"),
    nameArea: (grund) => [
      addPoints(grund[0], [0, 7]),
      addPoints(grund[1], [0, 7]),
    ],
  },
  {
    id: "iuk",
    label: "Information und Kommunikation",
    size: [75, 45],
    cover: true,
    nameArea: (grund) => [
      addPoints(grund[0], [17, 0]),
      addPoints(grund[1], [17, 0]),
    ],
    organisationNameArea: (grund) => [grund[0], addPoints(grund[1], [-10, 0])],
    render: (svg) => svg.path("M0,0 l37.5,28 v-11 L75,45"),
  },
  {
    id: "erkundung",
    label: "Erkundung",
    size: [75, 45],
    cover: true,
    render: erkunden,
  },
  {
    id: "veterinaerwesen",
    label: "Veterinärwesen",
    ...symbolFachaufgabe(veterinaerwesen),
  },
  {
    id: "schlachten",
    label: "Schlachten",
    ...symbolFachaufgabe(schlachten),
  },
  {
    id: "wasserrettung",
    label: "Wasserrettung",
    size: [75, 45],
    cover: true,
    render: (svg) =>
      svg
        .g()
        .push(
          svg.path(
            "M15,10 a10 10 0 0 1 15 0 a10 10 0 0 0 15 0 a10 10 0 0 1 15 0"
          )
        )
        .push(
          svg.path(
            "M15,16 a10 10 0 0 1 15 0 a10 10 0 0 0 15 0 a10 10 0 0 1 15 0"
          )
        )
        .push(svg.path("M37.5,23 l8,8 -8,8 -8,-8 Z")),
  },
  {
    id: "wasserfahrzeuge",
    label: "Einsatz von Wasserfahrzeugen, Fahren auf dem Wasser",
    size: [75, 45],
    cover: true,
    render: (svg) =>
      svg
        .g()
        .push(
          wasserfahrzeug
            .render(svg)
            .attr("transform", "scale(.5) translate(54,30)")
        )
        .push(wasser.render(svg).attr("transform", "scale(.7) translate(5,25)"))
        .push(
          wasser.render(svg).attr("transform", "scale(.7) translate(70,25)")
        ),
  },
  {
    id: "rettungshunde",
    label: "Suchen und Orten mit Rettungshunden",
    ...symbolFachaufgabe(hund),
  },
  {
    id: "pumpen",
    label: "Pumpen, Lenzen, Beseitigen von Wasserschäden",
    ...symbolFachaufgabe(pumpe),
  },
  {
    id: "abwehr-wassergefahren",
    label: "Abwehr von Wassergefahren, Deichverteidigung",
    size: [75, 45],
    cover: true,
    render: (svg) =>
      svg
        .g()
        .push(svg.path("M20,35 h10 l10,-25 h10 l5,15 h10"))
        .push(
          wasser.render(svg).attr("transform", "scale(.8) translate(10,15)")
        ),
  },
  {
    id: "warnen",
    label: "Warnen",
    ...symbolFachaufgabe(warnung),
  },
];
