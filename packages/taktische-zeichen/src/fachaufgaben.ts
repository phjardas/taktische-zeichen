import { Element, SVGElementFactory } from "./svg";
import type { Point } from "./types";

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

export const fachaufgaben: Array<Fachaufgabe> = [
  {
    id: "brandbekaempfung",
    label: "Brandbekämpfung",
    size: [75, 45],
    render: (factory) => factory.path("M1,22.5 H74 M74,1 L50,22.5 L74,44"),
  },
  {
    id: "hoehenrettung",
    label: "Rettung aus Höhen und Tiefen",
    size: [35, 35],
    padding: [10, 10],
    render: (factory) => factory.path("M1,34 L24,11 H34 V1 H24 V11"),
  },
  {
    id: "wasserversorgung",
    label: "Wasserversorgung und -förderung",
    size: [75, 45],
    render: (factory) =>
      factory.path(
        "M1,22.5 H74 M74,1 L50,22.5 L74,44 M10,19 V14 c0,-6 4,-6 4,0 V14 c0,6 4,6 4,0 V14 c0,-6 4,-6 4,0 V14 c0,6 4,6 4,0 V14 c0,-6 4,-6 4,0 V19"
      ),
  },
  {
    id: "technische-hilfeleistung",
    label: "Technische Hilfeleistung",
    size: [38, 16],
    padding: [10, 10],
    render: (factory) =>
      factory.path(
        "M1,4 l11,3 M1,12 l11,-3 M12,5 h15 v6 h-15 Z M27,7 c3,-3 7,-3 10,0 M27,10 c3,-3 7,-3 10,0"
      ),
  },
  {
    id: "heben",
    label: "Heben von Lasten",
    size: [30, 30],
    padding: [10, 10],
    render: (factory) => factory.path("M1,29 v-28 h8 a5 5 0 0 0 10 0"),
  },
  {
    id: "bergung",
    label: "Bergung",
    size: [75, 45],
    render: (factory) => factory.path("M1,15 H15 A22.5 20 180 1 0 60 15 H74"),
  },
  {
    id: "raeumen",
    label: "Räumen, Beseitigung von Hindernissen",
    size: [30, 20],
    padding: [10, 10],
    render: (factory) => factory.path("M1,10 h21 m0,-9 v14 l8,4"),
  },
  {
    id: "entschaerfen",
    label: "Entschärfung, Kampfmittelräumung",
    size: [16, 17],
    padding: [10, 10],
    render: (factory) =>
      factory
        .g()
        .push(factory.circle([8, 9], 1).attr("fill", "black"))
        .push(factory.circle([8, 9], 7))
        .push(factory.path("M4,2.5 l-1,-2 M12,2.5 l1,-2")),
  },
  {
    id: "sprengen",
    label: "Sprengen",
    size: [9, 21],
    padding: [10, 10],
    render: (factory) =>
      factory
        .path("M1,1 c0,5 2,18 4,20 2,-2 4,-15 4,-20 Z")
        .attr("fill", "black"),
  },
  {
    id: "beleuchtung",
    label: "Beleuchtung",
    size: [15, 21],
    padding: [10, 10],
    render: (factory) =>
      factory
        .g()
        .push(factory.path("M1,20 v-14 a5 5 0 0 1 10 0"))
        .push(factory.circle([11, 9], 3)),
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
    size: [30, 30],
    padding: [10, 10],
    render: (factory) =>
      factory
        .g()
        .push(factory.circle([4, 4], 3).attr("fill", "black"))
        .push(factory.circle([26, 4], 3).attr("fill", "black"))
        .push(factory.path("M5.7,1.5 L29,29 M24.3,1.5 L1,29")),
  },
  {
    id: "messen",
    label: "Messen, Spüren",
    size: [30, 30],
    padding: [10, 10],
    render: (factory) =>
      factory
        .g()
        .push(factory.circle([4, 4], 3).attr("fill", "black"))
        .push(factory.circle([26, 4], 3).attr("fill", "black"))
        .push(factory.path("M5.7,1.5 L29,29 M24.3,1.5 L1,29 M0.5,20 L29.5,10")),
  },
  {
    id: "dekontamination",
    label: "Dekontamination",
    size: [30, 30],
    padding: [10, 10],
    render: (factory) =>
      factory
        .g()
        .push(factory.circle([4, 4], 3).attr("fill", "black"))
        .push(factory.circle([26, 4], 3).attr("fill", "black"))
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
    render: (factory) => factory.path("M1,22.5 H74 M37.5,1 V44"),
  },
  {
    id: "aerztliche-versorgung",
    label: "Ärztliche Versorgung",
    size: [75, 45],
    render: (factory) => factory.path("M1,22.5 H74 M37.5,1 V44 M25,33 H50"),
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
    render: (factory) => factory.path("M8,1 v25 m4,0 v-25 M1,8 h18 m0,4 h-18"),
  },
  {
    id: "unterbringung",
    label: "Unterbringung",
    size: [30, 20],
    padding: [10, 10],
    render: (factory) =>
      factory.path("M1,1 v18 m0,-5 h28 m0,5 v-20 m0,15 c0,-8 -28,-8 -28,0"),
  },
  {
    id: "logistik",
    label: "Versorgung, Logistik",
    size: [75, 45],
    render: (factory) =>
      factory.path("M1,37 h74 v6 h-74").attr("fill", "black"),
  },
  {
    id: "verpflegung",
    label: "Verpflegung",
    size: [75, 45],
    render: (factory) =>
      factory
        .g()
        .push(factory.path("M1,37 h74 v6 h-74").attr("fill", "black"))
        .push(factory.path("M37.5,18 l7,-5 a8.6 8.6 0 1 0 0 10 z")),
  },
  {
    id: "verbrauchsgueter",
    label: "Versorgung mit Verbrauchsgütern und Betriebsstoffen",
    size: [75, 45],
    render: (factory) =>
      factory
        .g()
        .push(factory.path("M1,37 h74 v6 h-74").attr("fill", "black"))
        .push(factory.path("M35,32 v-15 l-7,-12 h18 l-7,12 v15")),
  },
  {
    id: "versorgung-trinkwasser",
    label: "Versorgung mit Trinkwasser",
    size: [75, 45],
    render: (factory) =>
      factory
        .g()
        .push(factory.path("M1,37 h74 v6 h-74").attr("fill", "black"))
        .push(
          factory.path("M25,25 v-3 a7 7 0 0 1 7 -7 h20 m-15,-3 v7 m-4,-7 h8")
        ),
  },
  {
    id: "versorgung-brauchwasser",
    label: "Versorgung mit Brauchwasser",
    size: [75, 45],
    render: (factory) =>
      factory
        .g()
        .push(factory.path("M1,37 h74 v6 h-74").attr("fill", "black"))
        .push(factory.path("M25,18 c0,-5 8,-5 8,-1 0,5 8,5 8,1 0,-5 8,-5 8,0")),
  },
  {
    id: "versorgung-elektrizitaet",
    label: "Versorgung mit Elektrizität",
    size: [75, 45],
    render: (factory) =>
      factory
        .g()
        .push(factory.path("M1,37 h74 v6 h-74").attr("fill", "black"))
        .push(factory.path("M42.5,5 l-10,10 h10 l-10,10"))
        .push(
          factory.path("M32.5,25 l5,2 l-8,0 l2,-7 Z").attr("fill", "black")
        ),
  },
  {
    id: "instandhaltung",
    label: "Instandhaltung",
    size: [75, 45],
    render: (factory) =>
      factory
        .g()
        .push(factory.path("M1,37 h74 v6 h-74").attr("fill", "black"))
        .push(
          factory.path(
            "M25,18 l25,0 m6,-6 a6 6 0 0 0 0 12 M19,12 a6 6 0 0 1 0 12"
          )
        ),
  },
  {
    id: "fuehrung",
    label: "Führung, Leitung, Stab",
    size: [75, 45],
    render: (factory) => factory.path("M1,1 h74 v6 h-74").attr("fill", "black"),
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
    render: (factory) => factory.path("M0,45 L75,0"),
  },
];
