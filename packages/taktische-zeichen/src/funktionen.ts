import { Element, SVGElementFactory } from "./svg";
import type { Point } from "./types";

export type FunktionId = "fuehrungskraft" | "sonderfunktion";

export type Funktion = {
  id: FunktionId;
  label: string;
  size: Point;
  render(factory: SVGElementFactory): Element;
};

export const funktionen: Array<Funktion> = [
  {
    id: "fuehrungskraft",
    label: "Führungskraft",
    size: [30, 8],
    render: (factory) =>
      factory.path("M0,0 h30 v8 h-30 Z").attr("fill", "black"),
  },
  {
    id: "sonderfunktion",
    label: "Sonderfunktion (Fachberater)",
    size: [30, 8],
    render: (factory) => factory.path("M0,8 h30"),
  },
];
