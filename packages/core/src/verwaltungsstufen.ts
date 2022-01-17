import { SVG } from "./svg";
import type { Renderable } from "./types";

export type VerwaltungsstufeId =
  | "gemeinde"
  | "kreis"
  | "bezirk"
  | "land"
  | "brd"
  | "eu";

export type Verwaltungsstufe = Renderable & {
  id: VerwaltungsstufeId;
  label: string;
};

const stern = (svg: SVG) =>
  svg.path("M5,0 v10 M9.33,7.5 L0.67,2.5 M9.33,2.5 L0.67,7.5");

function sterne(count: number): Pick<Verwaltungsstufe, "size" | "render"> {
  return {
    size: [11 * count - 1, 11],
    render: (svg: SVG) => {
      svg.def(stern(svg).attr("id", "stern"));
      const g = svg.g();
      for (let i = 0; i < count; i++) {
        g.push(svg.use("#stern").attr("x", 11 * i));
      }
      return g;
    },
  };
}

export const verwaltungsstufen: Array<Verwaltungsstufe> = [
  {
    id: "gemeinde",
    label: "Gemeinde, kreisangehörige Stadt",
    size: [10, 11],
    render: stern,
  },
  {
    id: "kreis",
    label: "Kreis, Landkreis, kreisfreie Stadt",
    ...sterne(2),
  },
  {
    id: "bezirk",
    label: "Bezirk",
    ...sterne(3),
  },
  {
    id: "land",
    label: "Land, Freistaat",
    ...sterne(4),
  },
  {
    id: "brd",
    label: "Bundesrepublik Deutschland",
    ...sterne(5),
  },
  {
    id: "eu",
    label: "Europäische Union",
    size: [41, 26],
    render: (svg: SVG) =>
      svg
        .def(stern(svg).attr("id", "stern"))
        .push(
          svg
            .g()
            .push(stern(svg).attr("x", 10))
            .push(stern(svg).attr("y", 7.5))
            .push(stern(svg).attr("x", 21))
            .push(stern(svg).attr("x", 10).attr("y", 15))
            .push(stern(svg).attr("x", 21).attr("y", 15))
            .push(stern(svg).attr("x", 31).attr("y", 7.5))
        ),
  },
];
