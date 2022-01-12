import { Element, SVGElementFactory } from "./svg";
import type { Point } from "./types";

export type FachaufgabeId =
  | "brandbekaempfung"
  | "hoehenrettung"
  | "wasserversorgung"
  | "bergung"
  | "rettungswesen"
  | "aerztliche-versorgung";

export type Fachaufgabe = {
  id: FachaufgabeId;
  label: string;
  size: Point;
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
    size: [45, 45],
    render: (factory) => factory.path("M6,39 L29,16 H39 V6 H29 V16"),
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
    id: "bergung",
    label: "Bergung",
    size: [75, 45],
    render: (factory) => factory.path("M1,15 H15 A22.5 20 180 1 0 60 15 H74"),
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
];
