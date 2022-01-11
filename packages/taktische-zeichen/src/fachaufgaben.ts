import { Element, SVGElementFactory } from "./svg";
import type { Point } from "./types";

export type FachaufgabeId = "brandbekaempfung" | "bergung" | "rettungswesen";

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
];
