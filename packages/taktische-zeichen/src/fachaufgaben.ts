import { Element, SVGElementFactory } from "./svg";
import type { Point } from "./types";

export type FachaufgabeId =
  | "brandbekaempfung"
  | "hoehenrettung"
  | "wasserversorgung"
  | "technische-hilfeleistung"
  | "bergung"
  | "transport"
  | "abc"
  | "messen"
  | "dekontamination"
  | "rettungswesen"
  | "aerztliche-versorgung"
  | "betreuung"
  | "logistik"
  | "verpflegung"
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
    id: "bergung",
    label: "Bergung",
    size: [75, 45],
    render: (factory) => factory.path("M1,15 H15 A22.5 20 180 1 0 60 15 H74"),
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
    id: "logistik",
    label: "Versorgung, Logistik",
    size: [30, 20],
    padding: [10, 10],
    render: (factory) => factory.path("M2,17 h26 v2 h-26 v-18 m26,0 v18"),
  },
  {
    id: "verpflegung",
    label: "Verpflegung",
    size: [30, 20],
    padding: [10, 10],
    render: (factory) =>
      factory.path(
        "M2,17 h26 v2 h-26 v-18 m26,0 v18 M15,8 l4,-3 a5.66 5.66 0 1 0 0 6 z"
      ),
  },
  {
    id: "fuehrung",
    label: "Führung, Leitung, Stab",
    size: [75, 45],
    render: (factory) => factory.path("M1,3 h73 v-2 h-73 v44 m73,0 v-44"),
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
