import { Element, SVGElementFactory } from "./svg";
import type { Padding, Point } from "./types";

export type GrundzeichenId =
  | "ohne"
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
  | "kettenfahrzeug"
  | "fahrrad"
  | "kraftrad"
  | "wasserfahrzeug"
  | "flugzeug"
  | "hubschrauber"
  | "massnahme"
  | "anlass"
  | "gefahr";

export type GrundzeichenRenderProps = {
  fill?: string;
};

export type ComponentType = "einheit" | "funktion" | "fachaufgabe" | "symbol";

export type Grundzeichen = {
  id: GrundzeichenId;
  label: string;
  size: Point;
  render?(props: GrundzeichenRenderProps, factory: SVGElementFactory): Element;
  clipPath?(factory: SVGElementFactory): Element;
  paintableArea?: [Point, Point];
  padding?: Padding;
  einheitAnchor?: Point;
  accepts?: Array<ComponentType>;
};

function applyProps(element: Element, { fill }: GrundzeichenRenderProps) {
  return element.attr("fill", fill);
}

function withProps(
  render: (factory: SVGElementFactory) => Element
): Grundzeichen["render"] {
  return (props, factory) => applyProps(render(factory), props);
}

function singleShape(
  render: (factory: SVGElementFactory) => Element
): Pick<Grundzeichen, "render" | "clipPath"> {
  return {
    render: withProps(render),
    clipPath: render,
  };
}

const fahrzeugShape = (factory: SVGElementFactory) =>
  factory.path("M1,44 V1 Q37.5,10 74,1 V44 Z");

const fahrzeug: Pick<
  Grundzeichen,
  | "render"
  | "clipPath"
  | "size"
  | "paintableArea"
  | "einheitAnchor"
  | "accepts"
  | "padding"
> = {
  size: [75, 45],
  render: withProps(fahrzeugShape),
  clipPath: (factory) => factory.path("M1,44 V1 Q37.5,10 74,1 V44 Z"),
  paintableArea: [
    [0, 0],
    [75, 45],
  ],
  einheitAnchor: [37.5, 4.5],
  accepts: ["einheit", "fachaufgabe", "symbol"],
  padding: [15, 20, 10],
};

export const grundzeichen: Array<Grundzeichen> = [
  {
    id: "ohne",
    label: "Ohne Grundzeichen",
    size: [45, 45],
    accepts: ["symbol"],
  },
  {
    id: "taktische-formation",
    label: "Taktische Formation",
    size: [75, 45],
    accepts: ["einheit", "fachaufgabe", "symbol"],
    padding: [10, 20],
    ...singleShape((factory) => factory.path("M1,1 H74 V44 H1 Z")),
  },
  {
    id: "befehlsstelle",
    label: "Befehlsstelle",
    size: [75, 55],
    render: withProps((factory) => factory.path("M1,55 V1 H74 V44 H1")),
    clipPath: (factory) => factory.path("M1,1 H74 V44 H1 Z"),
    paintableArea: [
      [0, 0],
      [75, 45],
    ],
    padding: [10, 20],
    accepts: ["einheit", "fachaufgabe", "symbol"],
  },
  {
    id: "stelle",
    label: "Stelle, Einrichtung",
    size: [45, 45],
    ...singleShape((factory) => factory.circle([22.5, 22.5], 21.5)),
    accepts: ["einheit", "fachaufgabe", "symbol"],
    padding: [10, 10],
  },
  {
    id: "person",
    label: "Person",
    size: [45, 45],
    ...singleShape((factory) =>
      factory.path("M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z")
    ),
    accepts: ["einheit", "fachaufgabe", "funktion", "symbol"],
    padding: [15, 15],
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
    accepts: ["fachaufgabe", "symbol"],
    padding: [10, 20],
  },
  {
    id: "fahrzeug",
    label: "Fahrzeug",
    ...fahrzeug,
  },
  {
    id: "kraftfahrzeug-landgebunden",
    label: "Kraftfahrzeug landgebunden",
    ...fahrzeug,
    size: [75, 55],
    render: (props, factory) =>
      factory
        .g()
        .push(applyProps(fahrzeugShape(factory), props))
        .push(factory.circle([10, 49], 5))
        .push(factory.circle([65, 49], 5)),
  },
  {
    id: "kraftfahrzeug-gelaendegaengig",
    label: "Kraftfahrzeug geländegängig oder geländefähig",
    ...fahrzeug,
    size: [75, 55],
    render: (props, factory) =>
      factory
        .g()
        .push(applyProps(fahrzeugShape(factory), props))
        .push(factory.circle([10, 49], 5))
        .push(factory.circle([37.5, 49], 5))
        .push(factory.circle([65, 49], 5)),
  },
  {
    id: "wechsellader",
    label: "Wechsellader",
    size: [75, 55],
    render: (props, factory) =>
      factory
        .g()
        .push(factory.path("M1,1 v43 h73"))
        .push(applyProps(factory.path("M4,1 Q36.5,10 74,1 v40 h-70 Z"), props))
        .push(factory.circle([10, 49], 5))
        .push(factory.circle([65, 49], 5)),
    clipPath: (factory) => factory.path("M4,1 Q36.5,10 73,1 v40 h-69 Z"),
    paintableArea: [
      [3, 0],
      [75, 42],
    ],
    einheitAnchor: [39.5, 4.5],
    accepts: ["einheit", "fachaufgabe", "symbol"],
    padding: [15, 10, 10],
  },
  {
    id: "abrollbehaelter",
    label: "Abrollbehälter, Container",
    size: [75, 45],
    render: (props, factory) =>
      factory
        .g()
        .push(applyProps(factory.path("M7,44 V1 Q35,10 74,1 V44 Z"), props))
        .push(factory.circle([4, 10], 3)),
    clipPath: (factory) => factory.path("M7,44 V1 Q35,10 74,1 V44 Z"),
    paintableArea: [
      [6, 0],
      [75, 45],
    ],
    einheitAnchor: [40, 4.5],
    accepts: ["fachaufgabe", "symbol"],
    padding: [15, 10, 10],
  },
  {
    id: "anhaenger",
    label: "Anhänger",
    size: [75, 45],
    render: (props, factory) =>
      applyProps(factory.path("M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7"), props),
    clipPath: (factory) => factory.path("M7,44 V1 Q35,10 74,1 V44 Z"),
    paintableArea: [
      [6, 0],
      [75, 45],
    ],
    einheitAnchor: [40, 4.5],
    accepts: ["fachaufgabe", "symbol"],
    padding: [15, 10, 10],
  },
  {
    id: "schienenfahrzeug",
    label: "Schienenfahrzeug",
    ...fahrzeug,
    size: [75, 55],
    render: (props, factory) =>
      factory
        .g()
        .push(applyProps(fahrzeugShape(factory), props))
        .push(factory.circle([10, 49], 5))
        .push(factory.circle([22, 49], 5))
        .push(factory.circle([53, 49], 5))
        .push(factory.circle([65, 49], 5)),
  },
  {
    id: "kettenfahrzeug",
    label: "Kettenfahrzeug",
    ...fahrzeug,
    size: [75, 55],
    render: (props, factory) =>
      factory
        .g()
        .push(applyProps(fahrzeugShape(factory), props))
        .push(factory.path("M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z")),
  },
  {
    id: "fahrrad",
    label: "Fahrrad",
    size: [42, 45],
    accepts: [],
    render: (_, factory) =>
      factory.path("M1,21 a20 20 0 0 1 40 0 m-20,-20 v45"),
  },
  {
    id: "kraftrad",
    label: "Kraftrad",
    size: [42, 45],
    accepts: [],
    render: (_, factory) =>
      factory.path("M1,21 a20 20 0 0 1 40 0 m-20,-20 v45 m-10,-20 h20"),
  },
  {
    id: "wasserfahrzeug",
    label: "Wasserfahrzeug",
    size: [42, 22],
    accepts: ["einheit", "fachaufgabe"],
    ...singleShape((factory) => factory.path("M1,1 a20 20 0 0 0 40 0 Z")),
  },
  {
    id: "flugzeug",
    label: "Flugzeug",
    size: [38, 15],
    accepts: ["einheit"],
    render: (props, factory) =>
      factory
        .g()
        .push(factory.path("M19,0 v15"))
        .push(
          applyProps(
            factory.path("M5,3.5 h10 a4 4 0 0 1 0 8 h-10 a4 4 0 0 1 0 -8 Z"),
            props
          )
        )
        .push(
          applyProps(
            factory.path("M23,3.5 h10 a4 4 0 0 1 0 8 h-10 a4 4 0 0 1 0 -8 Z"),
            props
          )
        ),
  },
  {
    id: "hubschrauber",
    label: "Hubschrauber",
    size: [38, 23],
    accepts: ["einheit"],
    render: (props, factory) =>
      factory
        .g()
        .push(factory.path("M19,2 v20 m-10,0 h20"))
        .push(
          applyProps(
            factory.path("M5,1 h10 a4 4 0 0 1 0 8 h-10 a4 4 0 0 1 0 -8 Z"),
            props
          )
        )
        .push(
          applyProps(
            factory.path("M23,1 h10 a4 4 0 0 1 0 8 h-10 a4 4 0 0 1 0 -8 Z"),
            props
          )
        ),
  },
  {
    id: "massnahme",
    label: "Maßnahme",
    size: [45, 36],
    accepts: ["symbol"],
    ...singleShape((factory) => factory.path("M22.5,1.8 L43.2,35 H1.8 Z")),
    padding: [15, 15, 5],
  },
  {
    id: "anlass",
    label: "Anlass, Ereignis",
    size: [45, 36],
    render: (_, factory) => factory.path("M1,0.6 L22.5,34 L44,0.6"),
    clipPath: (factory) => factory.path("M1,0.6 L22.5,34 L44,0.6 Z"),
    accepts: ["symbol"],
    padding: [5, 15, 15],
  },
  {
    id: "gefahr",
    label: "Gefahr",
    size: [45, 36],
    accepts: ["symbol"],
    ...singleShape((factory) => factory.path("M22.5,34 L43.2,1 H1.8 Z")),
    padding: [5, 15, 15],
  },
];
