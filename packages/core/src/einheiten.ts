import type { Renderable } from "./types";

export type EinheitId =
  | "trupp"
  | "staffel"
  | "gruppe"
  | "zug"
  | "zugtrupp"
  | "bereitschaft"
  | "abteilung"
  | "grossverband";

export type Einheit = Renderable & {
  id: EinheitId;
  label: string;
};

export const einheiten: Array<Einheit> = [
  {
    id: "trupp",
    label: "Trupp",
    size: [6, 7],
    render: (svg) => svg.circle([3, 3], 2).attr("fill", "black"),
  },
  {
    id: "staffel",
    label: "Staffel",
    size: [6, 14],
    render: (svg) =>
      svg
        .g()
        .attr("fill", "black")
        .push(svg.circle([3, 3], 2))
        .push(svg.circle([3, 10], 2)),
  },
  {
    id: "gruppe",
    label: "Gruppe",
    size: [13, 7],
    render: (svg) =>
      svg
        .g()
        .attr("fill", "black")
        .push(svg.circle([3, 3], 2))
        .push(svg.circle([10, 3], 2)),
  },
  {
    id: "zug",
    label: "Zug",
    size: [20, 7],
    render: (svg) =>
      svg
        .g()
        .attr("fill", "black")
        .push(svg.circle([3, 3], 2))
        .push(svg.circle([10, 3], 2))
        .push(svg.circle([17, 3], 2)),
  },
  {
    id: "zugtrupp",
    label: "Zugtrupp",
    size: [16, 7],
    render: (svg) =>
      svg
        .g()
        .attr("fill", "black")
        .push(svg.circle([8, 3], 2))
        .push(svg.circle([2, 12], 1.5))
        .push(svg.circle([8, 12], 1.5))
        .push(svg.circle([14, 12], 1.5)),
  },
  {
    id: "bereitschaft",
    label: "Bereitschaft (Verband I)",
    size: [5, 9],
    render: (svg) => svg.path("M1,1 h3 v7 h-3 Z").attr("fill", "black"),
  },
  {
    id: "abteilung",
    label: "Abteilung (Verband II)",
    size: [12, 9],
    render: (svg) =>
      svg.path("M1,1 h3 v7 h-3 Z m7,0 h3 v7 h-3 Z").attr("fill", "black"),
  },
  {
    id: "grossverband",
    label: "Großverband (Verband III)",
    size: [19, 9],
    render: (svg) =>
      svg
        .path("M1,1 h3 v7 h-3 Z m7,0 h3 v7 h-3 Z m7,0 h3 v7 h-3 Z")
        .attr("fill", "black"),
  },
];
