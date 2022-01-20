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

function stern(svg: SVG) {
  return svg.path("M5,0 v10 M9.33,7.5 L0.67,2.5 M9.33,2.5 L0.67,7.5");
}

function defineStern(svg: SVG) {
  return svg.def(
    stern(svg).attr("transform", "scale(0.8)").attr("id", "tz_stern")
  );
}

function sterne(count: number): Pick<Verwaltungsstufe, "size" | "render"> {
  return {
    size: [9 * count - 1, 9],
    render: (svg: SVG) => {
      const g = defineStern(svg).g();
      for (let i = 0; i < count; i++) {
        g.push(svg.use("#tz_stern").attr("x", 9 * i));
      }
      return g;
    },
  };
}

export const verwaltungsstufen: Array<Verwaltungsstufe> = [
  {
    id: "gemeinde",
    label: "Gemeinde, kreisangehörige Stadt",
    size: [8, 9],
    render: (svg) => svg.g().push(stern(svg).attr("transform", "scale(0.8)")),
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
    size: [33, 19],
    render: (svg: SVG) => {
      const g = defineStern(svg).g();
      return g
        .push(svg.use("#tz_stern").attr("x", 8))
        .push(svg.use("#tz_stern").attr("y", 5))
        .push(svg.use("#tz_stern").attr("x", 17))
        .push(svg.use("#tz_stern").attr("x", 8).attr("y", 10))
        .push(svg.use("#tz_stern").attr("x", 17).attr("y", 10))
        .push(svg.use("#tz_stern").attr("x", 25).attr("y", 5));
    },
  },
];
