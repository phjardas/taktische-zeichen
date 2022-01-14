import type { Renderable } from "./types";

export type FunktionId = "fuehrungskraft" | "sonderfunktion";

export type Funktion = Renderable & {
  id: FunktionId;
  label: string;
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
