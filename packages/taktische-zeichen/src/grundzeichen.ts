import { Element, SVGElementFactory } from "./svg";
import type { Point } from "./types";

export type GrundzeichenId =
  | "taktische-formation"
  | "befehlsstelle"
  | "stelle"
  | "person"
  | "gebaeude"
  | "fahrzeug"
  | "kraftfahrzeug-landgebunden"
  | "kraftfahrzeug-gelaendegaengig"
  | "wechsellader"
  | "abrollbehaelter"
  | "anhaenger"
  | "schienenfahrzeug"
  | "kettenfahrzeug";

export type GrundzeichenRenderProps = {
  fill?: string;
};

export type Grundzeichen = {
  id: GrundzeichenId;
  label: string;
  size: Point;
  render(props: GrundzeichenRenderProps, factory: SVGElementFactory): Element;
  clipPath?(factory: SVGElementFactory): Element;
  paintableArea?: [Point, Point];
};

export const grundzeichen: Array<Grundzeichen> = [
  {
    id: "taktische-formation",
    label: "Taktische Formation",
    size: [75, 45],
    render: ({ fill }, factory) =>
      factory.path("M1,1 H74 V44 H1 Z").attr("fill", fill),
  },
  {
    id: "befehlsstelle",
    label: "Befehlsstelle",
    size: [75, 52],
    render: ({ fill }, factory) =>
      factory.path("M1,51 V1 H74 V44 H1").attr("fill", fill),
    clipPath: (factory) => factory.path("M1,1 H74 V44 H1 Z"),
    paintableArea: [
      [0, 0],
      [75, 45],
    ],
  },
  {
    id: "stelle",
    label: "Stelle, Einrichtung",
    size: [45, 45],
    render: ({ fill }, factory) =>
      factory.circle([22.5, 22.5], 21.5).attr("fill", fill),
    clipPath: (factory) => factory.circle([22.5, 22.5], 21.5),
  },
  {
    id: "person",
    label: "Person",
    size: [45, 45],
    render: ({ fill }, factory) =>
      factory.path("M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z").attr("fill", fill),
    clipPath: (factory) => factory.path("M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z"),
  },
  {
    id: "gebaeude",
    label: "Gebäude",
    size: [75, 45],
    render: ({ fill }, factory) =>
      factory
        .g()
        .push(factory.path("M1,10 H74 V44 H1 Z").attr("fill", fill))
        .push(factory.path("M1,10 L37.5,1 L74,10")),
    clipPath: (factory) => factory.path("M1,10 H74 V44 H1 Z"),
    paintableArea: [
      [0, 10],
      [75, 45],
    ],
  },
  {
    id: "fahrzeug",
    label: "Fahrzeug",
    size: [75, 45],
    render: ({ fill }, factory) =>
      factory.path("M1,44 V1 Q37.5,10 74,1 V44 Z").attr("fill", fill),
  },
  {
    id: "kraftfahrzeug-landgebunden",
    label: "Kraftfahrzeug landgebunden",
    size: [75, 55],
    render: ({ fill }, factory) =>
      factory
        .g()
        .push(factory.path("M1,44 V1 Q37.5,10 74,1 V44 Z").attr("fill", fill))
        .push(factory.circle([10, 49], 5))
        .push(factory.circle([65, 49], 5)),
    clipPath: (factory) => factory.path("M1,44 V1 Q37.5,10 74,1 V44 Z"),
    paintableArea: [
      [0, 0],
      [75, 45],
    ],
  },
  {
    id: "kraftfahrzeug-gelaendegaengig",
    label: "Kraftfahrzeug geländegängig oder geländefähig",
    size: [75, 55],
    render: ({ fill }, factory) =>
      factory
        .g()
        .push(factory.path("M1,44 V1 Q37.5,10 74,1 V44 Z").attr("fill", fill))
        .push(factory.circle([10, 49], 5))
        .push(factory.circle([37.5, 49], 5))
        .push(factory.circle([65, 49], 5)),
    clipPath: (factory) => factory.path("M1,44 V1 Q37.5,10 74,1 V44 Z"),
    paintableArea: [
      [0, 0],
      [75, 45],
    ],
  },
  {
    id: "wechsellader",
    label: "Wechsellader",
    size: [75, 55],
    render: ({ fill }, factory) =>
      factory
        .g()
        .push(factory.path("M1,1 v43 h73"))
        .push(factory.path("M4,1 Q36.5,10 73,1 v40 h-69 Z").attr("fill", fill))
        .push(factory.circle([10, 49], 5))
        .push(factory.circle([65, 49], 5)),
    clipPath: (factory) => factory.path("M4,1 Q36.5,10 73,1 v40 h-69 Z"),
    paintableArea: [
      [3, 0],
      [75, 42],
    ],
  },
  {
    id: "abrollbehaelter",
    label: "Abrollbehälter, Container",
    size: [75, 45],
    render: ({ fill }, factory) =>
      factory
        .g()
        .push(factory.path("M7,44 V1 Q35,10 74,1 V44 Z").attr("fill", fill))
        .push(factory.circle([4, 10], 3)),
    clipPath: (factory) => factory.path("M7,44 V1 Q35,10 74,1 V44 Z"),
    paintableArea: [
      [7, 0],
      [75, 45],
    ],
  },
  {
    id: "anhaenger",
    label: "Anhänger",
    size: [75, 45],
    render: ({ fill }, factory) =>
      factory.path("M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7").attr("fill", fill),
    clipPath: (factory) => factory.path("M7,44 V1 Q35,10 74,1 V44 Z"),
    paintableArea: [
      [7, 0],
      [75, 45],
    ],
  },
  {
    id: "schienenfahrzeug",
    label: "Schienenfahrzeug",
    size: [75, 55],
    render: ({ fill }, factory) =>
      factory
        .g()
        .push(factory.path("M1,44 V1 Q37.5,10 74,1 V44 Z").attr("fill", fill))
        .push(factory.circle([10, 49], 5))
        .push(factory.circle([22, 49], 5))
        .push(factory.circle([53, 49], 5))
        .push(factory.circle([65, 49], 5)),
    clipPath: (factory) => factory.path("M1,44 V1 Q37.5,10 74,1 V44 Z"),
    paintableArea: [
      [0, 0],
      [75, 45],
    ],
  },
  {
    id: "kettenfahrzeug",
    label: "Kettenfahrzeug",
    size: [75, 55],
    render: ({ fill }, factory) =>
      factory
        .g()
        .push(factory.path("M1,44 V1 Q37.5,10 74,1 V44 Z").attr("fill", fill))
        .push(
          factory.path("M5 47 a2.5 2.5 0 0 0 0 5 h65 a2.5 2.5 0 0 0 0 -5 Z")
        ),
    clipPath: (factory) => factory.path("M1,44 V1 Q37.5,10 74,1 V44 Z"),
    paintableArea: [
      [0, 0],
      [75, 45],
    ],
  },
];
