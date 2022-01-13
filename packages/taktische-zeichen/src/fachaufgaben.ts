import {
  beleuchtung,
  bett,
  brauchwasser,
  drehleiter,
  elektrizitaet,
  geraete,
  hebegeraet,
  Icon,
  raeumgeraet,
  sprengmittel,
  sprengung,
  trinkwasser,
  verbrauchsgueter,
  verpflegung,
} from "./icons";
import { Element, SVGElementFactory } from "./svg";
import type { Point } from "./types";
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

export type Fachaufgabe = {
  id: FachaufgabeId;
  label: string;
  size: Point;
  padding?: Point;
  render(factory: SVGElementFactory): Element;
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
  icon,
  ...props
}: Pick<Fachaufgabe, "id" | "label"> & { icon: Icon }): Fachaufgabe {
  return {
    ...props,
    size: logistik.size,
    render: (factory) =>
      factory
        .g()
        .push(logistik.render(factory))
        .push(
          placeComponent({
            parent: logistik,
            component: { ...icon, padding: [10, 10] },
            factory,
          })
        ),
  };
}

const erkunden = (factory: SVGElementFactory) => factory.path("M0,45 L75,0");

const abc: Component = {
  size: [30, 30],
  padding: [10, 10],
  render: (factory: SVGElementFactory) =>
    factory
      .g()
      .push(factory.circle([4, 4], 3).attr("fill", "black"))
      .push(factory.circle([26, 4], 3).attr("fill", "black"))
      .push(factory.path("M5.7,1.5 L29,29 M24.3,1.5 L1,29")),
};

export const fachaufgaben: Array<Fachaufgabe> = [
  {
    id: "brandbekaempfung",
    label: "Brandbekämpfung",
    size: [75, 45],
    render: brandbekaempfung,
  },
  {
    id: "hoehenrettung",
    label: "Rettung aus Höhen und Tiefen",
    padding: [10, 10],
    ...drehleiter,
  },
  {
    id: "wasserversorgung",
    label: "Wasserversorgung und -förderung",
    size: [75, 45],
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
    padding: [10, 10],
    render: (factory) =>
      factory.path(
        "M1,1 l11,3 M1,9 l11,-3 M12,2 h15 v6 h-15 Z M27,4 c3,-3 7,-3 10,0 M27,7 c3,-3 7,-3 10,0"
      ),
  },
  {
    id: "heben",
    label: "Heben von Lasten",
    padding: [10, 10],
    ...hebegeraet,
  },
  {
    id: "bergung",
    label: "Bergung",
    size: [75, 45],
    render: (factory) => factory.path("M0,15 H15 A22.5 20 180 1 0 60 15 H75"),
  },
  {
    id: "raeumen",
    label: "Räumen, Beseitigung von Hindernissen",
    padding: [10, 10],
    ...raeumgeraet,
  },
  {
    id: "entschaerfen",
    label: "Entschärfung, Kampfmittelräumung",
    padding: [10, 10],
    ...sprengmittel,
  },
  {
    id: "sprengen",
    label: "Sprengen",
    padding: [10, 10],
    ...sprengung,
  },
  {
    id: "beleuchtung",
    label: "Beleuchtung",
    padding: [10, 10],
    ...beleuchtung,
  },
  {
    id: "transport",
    label: "Transport",
    size: [30, 30],
    padding: [10, 10],
    render: (factory) =>
      factory
        .g()
        .push(factory.circle([15, 15], 14))
        .push(factory.path("M1,15 h28 M15,1 v28 M5,5 l20,20  M5,25 l20,-20")),
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
    render: (factory) =>
      factory
        .g()
        .push(erkunden(factory))
        .push(
          placeComponent({
            parent: { size: [75, 45] },
            component: abc,
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
    render: (factory) => factory.path("M0,22.5 H75 M37.5,0 V45"),
  },
  {
    id: "aerztliche-versorgung",
    label: "Ärztliche Versorgung",
    size: [75, 45],
    render: (factory) => factory.path("M0,22.5 H75 M37.5,0 V45 M25,33 H50"),
  },
  {
    id: "betreuung",
    label: "Betreuung",
    size: [75, 45],
    render: (factory) => factory.path("M0,45 L37.5,1 L75,45"),
  },
  {
    id: "seelsorge",
    label: "Seelsorge",
    size: [20, 27],
    padding: [10, 10],
    render: (factory) => factory.path("M8,0 V27 m4,0 V0 M0,8 H20 m0,4 H0"),
  },
  {
    id: "unterbringung",
    label: "Unterbringung",
    padding: [10, 10],
    ...bett,
  },
  {
    id: "logistik",
    label: "Versorgung, Logistik",
    ...logistik,
  },
  logistikFachaufgabe({
    id: "verpflegung",
    label: "Verpflegung",
    icon: verpflegung,
  }),
  logistikFachaufgabe({
    id: "verbrauchsgueter",
    label: "Versorgung mit Verbrauchsgütern und Betriebsstoffen",
    icon: verbrauchsgueter,
  }),
  logistikFachaufgabe({
    id: "versorgung-trinkwasser",
    label: "Versorgung mit Trinkwasser",
    icon: trinkwasser,
  }),
  logistikFachaufgabe({
    id: "versorgung-brauchwasser",
    label: "Versorgung mit Brauchwasser",
    icon: brauchwasser,
  }),
  logistikFachaufgabe({
    id: "versorgung-elektrizitaet",
    label: "Versorgung mit Elektrizität",
    icon: elektrizitaet,
  }),
  logistikFachaufgabe({
    id: "instandhaltung",
    label: "Instandhaltung",
    icon: geraete,
  }),
  {
    id: "fuehrung",
    label: "Führung, Leitung, Stab",
    size: [75, 45],
    render: (factory) => factory.rect([0, 0], [75, 8]).attr("fill", "black"),
  },
  {
    id: "iuk",
    label: "Information und Kommunikation",
    size: [75, 45],
    render: (factory) => factory.path("M0,0 l37.5,28 v-11 L75,45"),
  },
  {
    id: "erkundung",
    label: "Erkundung",
    size: [75, 45],
    render: erkunden,
  },
];
