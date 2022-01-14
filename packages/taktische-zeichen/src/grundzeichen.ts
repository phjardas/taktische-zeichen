import { Element, SVGElementFactory } from "./svg";
import {
  fahrrad,
  fahrzeug,
  flugzeug,
  hubschrauber,
  kraftrad,
  person,
  SymbolSpec,
} from "./symbole";
import type { Padding, Point, Renderable } from "./types";

export type GrundzeichenId =
  | "taktische-formation"
  | "befehlsstelle"
  | "stelle"
  | "ortsfeste-stelle"
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

export type ComponentType =
  | "einheit"
  | "funktion"
  | "fachaufgabe"
  | "symbol"
  | "organisation";

export type Grundzeichen = Renderable<GrundzeichenRenderProps> & {
  id: GrundzeichenId;
  label: string;
  clipPath?(factory: SVGElementFactory): Element;
  paintableArea?: [Point, Point];
  padding?: Padding;
  einheitAnchor?: Point;
  accepts?: Array<ComponentType>;
};

function applyProps(element: Element, props?: GrundzeichenRenderProps) {
  return element.attr("fill", props?.fill);
}

function withProps(
  render: (factory: SVGElementFactory) => Element
): Grundzeichen["render"] {
  return (factory, props) => applyProps(render(factory), props);
}

function singleShape(
  render: (factory: SVGElementFactory) => Element
): Pick<Grundzeichen, "render" | "clipPath"> {
  return {
    render: withProps(render),
    clipPath: render,
  };
}

function symbolShape(
  symbol: SymbolSpec
): Pick<Grundzeichen, "size" | "render"> {
  return {
    size: symbol.size,
    render: (factory, props) => symbol.render(factory, props),
  };
}

const fahrzeugGrundzeichen: Pick<
  Grundzeichen,
  | "render"
  | "clipPath"
  | "size"
  | "paintableArea"
  | "einheitAnchor"
  | "accepts"
  | "padding"
> = {
  size: fahrzeug.size,
  render: (factory, props) => fahrzeug.render(factory, props),
  clipPath: fahrzeug.render,
  paintableArea: [[0, 0], fahrzeug.size],
  einheitAnchor: [37.5, 4.5],
  accepts: ["einheit", "fachaufgabe", "symbol", "organisation"],
  padding: [15, 20, 10],
};

export const grundzeichen: Array<Grundzeichen> = [
  {
    id: "taktische-formation",
    label: "Taktische Formation",
    size: [75, 45],
    accepts: ["einheit", "fachaufgabe", "symbol", "organisation"],
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
    accepts: ["einheit", "fachaufgabe", "symbol", "organisation"],
  },
  {
    id: "stelle",
    label: "Stelle, Einrichtung",
    size: [45, 45],
    ...singleShape((factory) => factory.circle([22.5, 22.5], 21.5)),
    accepts: ["fachaufgabe", "symbol", "organisation"],
    padding: [10, 10],
  },
  {
    id: "ortsfeste-stelle",
    label: "Stelle, Einrichtung (ortsfest)",
    size: [46, 47.5],
    render: (factory, props) =>
      factory
        .g()
        .push(applyProps(factory.circle([23, 25], 21.5), props))
        .push(factory.path("M.5,8 L23,1 L45.5,8")),
    clipPath: (factory) => factory.circle([23, 25], 21.5),
    accepts: ["fachaufgabe", "symbol", "organisation"],
    paintableArea: [
      [1.5, 3.5],
      [44.5, 46.5],
    ],
    padding: [10, 10],
  },
  {
    id: "person",
    label: "Person",
    size: person.size,
    render: withProps(person.render),
    clipPath: (factory) => person.render(factory),
    accepts: ["einheit", "fachaufgabe", "funktion", "symbol", "organisation"],
    padding: [15, 15],
  },
  {
    id: "gebaeude",
    label: "Gebäude",
    size: [75, 45],
    render: (factory, props) =>
      factory
        .g()
        .push(factory.path("M1,10 H74 V44 H1 Z").attr("fill", props?.fill))
        .push(factory.path("M1,10 L37.5,1 L74,10")),
    clipPath: (factory) => factory.path("M1,10 H74 V44 H1 Z"),
    paintableArea: [
      [0, 10],
      [75, 45],
    ],
    accepts: ["fachaufgabe", "symbol", "organisation"],
    padding: [10, 20],
  },
  {
    id: "fahrzeug",
    label: "Fahrzeug",
    ...fahrzeugGrundzeichen,
  },
  {
    id: "kraftfahrzeug-landgebunden",
    label: "Kraftfahrzeug landgebunden",
    ...fahrzeugGrundzeichen,
    size: [75, 55],
    render: (factory, props) =>
      factory
        .g()
        .push(applyProps(fahrzeug.render(factory), props))
        .push(factory.circle([10, 49], 5))
        .push(factory.circle([65, 49], 5)),
  },
  {
    id: "kraftfahrzeug-gelaendegaengig",
    label: "Kraftfahrzeug geländegängig oder geländefähig",
    ...fahrzeugGrundzeichen,
    size: [75, 55],
    render: (factory, props) =>
      factory
        .g()
        .push(applyProps(fahrzeug.render(factory), props))
        .push(factory.circle([10, 49], 5))
        .push(factory.circle([37.5, 49], 5))
        .push(factory.circle([65, 49], 5)),
  },
  {
    id: "wechsellader",
    label: "Wechsellader",
    size: [75, 55],
    render: (factory, props) =>
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
    accepts: ["einheit", "fachaufgabe", "symbol", "organisation"],
    padding: [15, 10, 10],
  },
  {
    id: "abrollbehaelter",
    label: "Abrollbehälter, Container",
    size: [75, 45],
    render: (factory, props) =>
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
    accepts: ["fachaufgabe", "symbol", "organisation"],
    padding: [15, 10, 10],
  },
  {
    id: "anhaenger",
    label: "Anhänger",
    size: [75, 45],
    render: (factory, props) =>
      applyProps(factory.path("M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7"), props),
    clipPath: (factory) => factory.path("M7,44 V1 Q35,10 74,1 V44 Z"),
    paintableArea: [
      [6, 0],
      [75, 45],
    ],
    einheitAnchor: [40, 4.5],
    accepts: ["fachaufgabe", "symbol", "organisation"],
    padding: [15, 10, 10],
  },
  {
    id: "schienenfahrzeug",
    label: "Schienenfahrzeug",
    ...fahrzeugGrundzeichen,
    size: [75, 55],
    render: (factory, props) =>
      factory
        .g()
        .push(applyProps(fahrzeug.render(factory), props))
        .push(factory.circle([10, 49], 5))
        .push(factory.circle([22, 49], 5))
        .push(factory.circle([53, 49], 5))
        .push(factory.circle([65, 49], 5)),
  },
  {
    id: "kettenfahrzeug",
    label: "Kettenfahrzeug",
    ...fahrzeugGrundzeichen,
    size: [75, 55],
    render: (factory, props) =>
      factory
        .g()
        .push(applyProps(fahrzeug.render(factory), props))
        .push(
          factory.path("M8 45 a4.5 4.5 0 0 0 0 9 h59 a4.5 4.5 0 0 0 0 -9 Z")
        ),
  },
  {
    id: "fahrrad",
    label: "Fahrrad",
    accepts: [],
    ...symbolShape(fahrrad),
  },
  {
    id: "kraftrad",
    label: "Kraftrad",
    accepts: [],
    ...symbolShape(kraftrad),
  },
  {
    id: "wasserfahrzeug",
    label: "Wasserfahrzeug",
    size: [42, 22],
    accepts: ["einheit", "organisation", "fachaufgabe"],
    ...singleShape((factory) => factory.path("M1,1 a20 20 0 0 0 40 0 Z")),
  },
  {
    id: "flugzeug",
    label: "Flugzeug",
    accepts: ["einheit", "organisation"],
    ...symbolShape(flugzeug),
  },
  {
    id: "hubschrauber",
    label: "Hubschrauber",
    accepts: ["einheit", "organisation"],
    ...symbolShape(hubschrauber),
  },
  {
    id: "massnahme",
    label: "Maßnahme",
    size: [45, 36],
    accepts: ["symbol"],
    ...singleShape((factory) =>
      factory.path("M22.5,1.8 L43.2,35 H1.8 Z").attr("fill", "white")
    ),
    padding: [15, 15, 5],
  },
  {
    id: "anlass",
    label: "Anlass, Ereignis",
    size: [45, 36],
    render: (factory) =>
      factory.path("M1,0.6 L22.5,34 L44,0.6").attr("fill", "white"),
    clipPath: (factory) => factory.path("M1,0.6 L22.5,34 L44,0.6 Z"),
    accepts: ["symbol"],
    padding: [5, 15, 15],
  },
  {
    id: "gefahr",
    label: "Gefahr",
    size: [45, 36],
    accepts: ["symbol"],
    ...singleShape((factory) =>
      factory.path("M22.5,34 L43.2,1 H1.8 Z").attr("fill", "white")
    ),
    padding: [5, 15, 15],
  },
];
