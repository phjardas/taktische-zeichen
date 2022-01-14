import { SVGElementFactory } from "./svg";
import {
  beleuchtung,
  bett,
  brauchwasser,
  drehleiter,
  elektrizitaet,
  geraete,
  hebegeraet,
  raeumgeraet,
  sprengmittel,
  sprengung,
  SymbolSpec,
  transport,
  trinkwasser,
  verbrauchsgueter,
  verpflegung,
} from "./symbole";
import type { Renderable } from "./types";
import { Component, Parent, placeComponent } from "./utils";

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
  | "rettungswesen"
  | "aerztliche-versorgung"
  | "krankenhaus"
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
  | "erkundung";

export type Fachaufgabe = Renderable & {
  id: FachaufgabeId;
  label: string;
  cover?: boolean;
};

const brandbekaempfung = (factory: SVGElementFactory) =>
  factory.path("M0,22.5 H75 M75,0 L50,22.5 L75,45");

const logistik: Parent & Component = {
  size: [74, 45],
  paintableArea: [
    [0, 0],
    [74, 37],
  ],
  render: (factory: SVGElementFactory) =>
    factory.rect([0, 37], [75, 8]).attr("fill", "black"),
};

function logistikFachaufgabe({
  symbol,
  ...props
}: Pick<Fachaufgabe, "id" | "label"> & { symbol: SymbolSpec }): Fachaufgabe {
  return {
    ...props,
    cover: true,
    size: logistik.size,
    render: (factory) =>
      factory
        .g()
        .push(logistik.render(factory))
        .push(
          placeComponent({
            parent: logistik,
            component: symbol,
            padding: [13, 20, 8],
            factory,
          })
        ),
  };
}

const erkunden = (factory: SVGElementFactory) => factory.path("M0,45 L75,0");

const abc: Component = {
  size: [30, 30],
  render: (factory: SVGElementFactory) =>
    factory
      .g()
      .push(factory.circle([4, 4], 3).attr("fill", "black"))
      .push(factory.circle([26, 4], 3).attr("fill", "black"))
      .push(factory.path("M5.7,1.5 L29,29 M24.3,1.5 L1,29")),
};

function symbolFachaufgabe(
  symbol: SymbolSpec
): Pick<Fachaufgabe, "size" | "render"> {
  return {
    size: symbol.size,
    render: (factory) => symbol.render(factory),
  };
}

export const fachaufgaben: Array<Fachaufgabe> = [
  {
    id: "brandbekaempfung",
    label: "Brandbekämpfung",
    size: [75, 45],
    cover: true,
    render: brandbekaempfung,
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
    render: (factory) =>
      factory
        .g()
        .push(brandbekaempfung(factory))
        .push(
          factory.path(
            "M10,19 V14 c0,-6 4,-6 4,0 V14 c0,6 4,6 4,0 V14 c0,-6 4,-6 4,0 V14 c0,6 4,6 4,0 V14 c0,-6 4,-6 4,0 V19"
          )
        ),
  },
  {
    id: "technische-hilfeleistung",
    label: "Technische Hilfeleistung",
    size: [38, 10],
    render: (factory) =>
      factory.path(
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
    render: (factory) => factory.path("M0,15 H15 A22.5 20 180 1 0 60 15 H75"),
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
    ...abc,
  },
  {
    id: "messen",
    label: "Messen, Spüren",
    size: [75, 45],
    cover: true,
    render: (factory) =>
      factory
        .g()
        .push(erkunden(factory))
        .push(
          placeComponent({
            parent: { size: [75, 45] },
            component: abc,
            padding: [10, 20],
            factory,
          })
        ),
  },
  {
    id: "dekontamination",
    label: "Dekontamination",
    ...abc,
    render: (factory) =>
      factory
        .g()
        .push(abc.render(factory))
        .push(
          factory.path(
            "M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7"
          )
        ),
  },
  {
    id: "rettungswesen",
    label: "Rettungswesen, Sanitätswesen, Gesundheitswesen",
    size: [75, 45],
    cover: true,
    render: (factory) => factory.path("M0,22.5 H75 M37.5,0 V45"),
  },
  {
    id: "aerztliche-versorgung",
    label: "Ärztliche Versorgung",
    size: [75, 45],
    cover: true,
    render: (factory) => factory.path("M0,22.5 H75 M37.5,0 V45 M25,33 H50"),
  },
  {
    id: "krankenhaus",
    label: "Krankenhaus",
    size: [75, 45],
    cover: true,
    render: (factory) =>
      factory.path("M0,22.5 H75 M37.5,0 V45 M20,14.5 v16 M55,14.5 v16"),
  },
  {
    id: "betreuung",
    label: "Betreuung",
    size: [75, 45],
    cover: true,
    render: (factory) => factory.path("M0,45 L37.5,1 L75,45"),
  },
  {
    id: "seelsorge",
    label: "Seelsorge",
    size: [20, 27],
    render: (factory) => factory.path("M8,0 V27 m4,0 V0 M0,8 H20 m0,4 H0"),
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
    render: (factory) => factory.rect([0, 0], [75, 8]).attr("fill", "black"),
  },
  {
    id: "iuk",
    label: "Information und Kommunikation",
    size: [75, 45],
    cover: true,
    render: (factory) => factory.path("M0,0 l37.5,28 v-11 L75,45"),
  },
  {
    id: "erkundung",
    label: "Erkundung",
    size: [75, 45],
    cover: true,
    render: erkunden,
  },
];
