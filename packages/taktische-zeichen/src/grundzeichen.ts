import { Element, SVGElementFactory } from "./svg";
import type { Point } from "./types";

export type GrundzeichenId =
  | "taktische-formation"
  | "fahrzeug"
  | "kraftfahrzeug-landgebunden"
  | "kraftfahrzeug-gelaendegaengig";

export type GrundzeichenRenderProps = {
  fill?: string;
};

export type Grundzeichen = {
  id: GrundzeichenId;
  label: string;
  size: Point;
  render(props: GrundzeichenRenderProps, factory: SVGElementFactory): Element;
};

export const grundzeichen: Array<Grundzeichen> = [
  {
    id: "taktische-formation",
    label: "Taktische Formation",
    size: [75, 45],
    render: ({ fill }, factory) =>
      factory
        .rect()
        .attr("x", 1)
        .attr("y", 1)
        .attr("width", 73)
        .attr("height", 43)
        .attr("fill", fill),
  },
  {
    id: "fahrzeug",
    label: "Fahrzeug",
    size: [75, 55],
    render: ({ fill }, factory) =>
      factory.path("M1,44 V1 Q37.5,10 74,1 V44 Z").attr("fill", fill),
  },
  {
    id: "kraftfahrzeug-landgebunden",
    label: "Kraftfahrzeug landgebunden",
    size: [75, 65],
    render: ({ fill }, factory) =>
      factory
        .g()
        .push(factory.path("M1,44 V1 Q37.5,10 74,1 V44 Z").attr("fill", fill))
        .push(factory.circle([10, 49], 5))
        .push(factory.circle([65, 49], 5)),
  },
  {
    id: "kraftfahrzeug-gelaendegaengig",
    label: "Kraftfahrzeug geländegängig oder geländefähig",
    size: [75, 65],
    render: ({ fill }, factory) =>
      factory
        .g()
        .push(factory.path("M1,44 V1 Q37.5,10 74,1 V44 Z").attr("fill", fill))
        .push(factory.circle([10, 49], 5))
        .push(factory.circle([37.5, 49], 5))
        .push(factory.circle([65, 49], 5)),
  },
];
