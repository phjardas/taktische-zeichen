import { Element, SVG } from "./svg";
import {
  fahrrad,
  fahrzeug,
  flugzeug,
  hubschrauber,
  kraftrad,
  person,
  SymbolSpec,
} from "./symbole";
import type { Padding, Point, Rect, Renderable } from "./types";

export type GrundzeichenId =
  | "ohne"
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
  | "verwaltungsstufe"
  | "funktion"
  | "fachaufgabe"
  | "symbol"
  | "organisation"
  | "name";

export type Grundzeichen = Renderable<GrundzeichenRenderProps> & {
  id: GrundzeichenId;
  label: string;
  clipPath?(svg: SVG): Element;
  paintableArea?: Rect;
  nameArea?: Rect;
  padding?: Padding;
  textPadding?: Padding;
  einheitAnchor?: Point;
  accepts?: Array<ComponentType>;
};

function applyProps(element: Element, props?: GrundzeichenRenderProps) {
  return element.attr("fill", props?.fill);
}

function withProps(render: (svg: SVG) => Element): Grundzeichen["render"] {
  return (svg, props) => applyProps(render(svg), props);
}

function singleShape(
  render: (svg: SVG) => Element
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
    render: (svg, props) => symbol.render(svg, props),
  };
}

const fahrzeugAccepts: Array<ComponentType> = [
  "fachaufgabe",
  "symbol",
  "organisation",
  "name",
];

const fahrzeugGrundzeichen: Pick<
  Grundzeichen,
  | "render"
  | "clipPath"
  | "size"
  | "paintableArea"
  | "nameArea"
  | "einheitAnchor"
  | "accepts"
  | "padding"
  | "textPadding"
> = {
  size: fahrzeug.size,
  render: (svg, props) => fahrzeug.render(svg, props),
  clipPath: fahrzeug.render,
  paintableArea: [[0, 0], fahrzeug.size],
  nameArea: [
    [4, 10],
    [32, 18],
  ],
  einheitAnchor: [37.5, 4.5],
  accepts: [...fahrzeugAccepts, "einheit", "verwaltungsstufe"],
  padding: [15, 20, 10],
  textPadding: [15, 10, 10],
};

export const grundzeichen: Array<Grundzeichen> = [
  {
    id: "ohne",
    label: "Kein Grundzeichen",
    size: [45, 45],
    accepts: ["symbol"],
    render: (svg) => svg.g(),
  },
  {
    id: "taktische-formation",
    label: "Taktische Formation",
    size: [75, 45],
    accepts: [...fahrzeugAccepts, "einheit", "verwaltungsstufe"],
    padding: [10, 20],
    nameArea: [
      [4, 6],
      [32, 18],
    ],
    textPadding: [10, 10],
    ...singleShape((svg) => svg.path("M1,1 H74 V44 H1 Z")),
  },
  {
    id: "befehlsstelle",
    label: "Befehlsstelle",
    size: [75, 55],
    render: withProps((svg) => svg.path("M1,55 V1 H74 V44 H1")),
    clipPath: (svg) => svg.path("M1,1 H74 V44 H1 Z"),
    paintableArea: [
      [0, 0],
      [75, 45],
    ],
    nameArea: [
      [4, 6],
      [32, 18],
    ],
    padding: [10, 20],
    textPadding: [10, 10],
    accepts: [...fahrzeugAccepts, "einheit", "verwaltungsstufe"],
  },
  {
    id: "stelle",
    label: "Stelle, Einrichtung",
    size: [45, 45],
    ...singleShape((svg) => svg.circle([22.5, 22.5], 21.5)),
    accepts: ["fachaufgabe", "symbol", "organisation"],
    padding: [10, 10],
    textPadding: [10, 5],
  },
  {
    id: "ortsfeste-stelle",
    label: "Stelle, Einrichtung (ortsfest)",
    size: [46, 47.5],
    render: (svg, props) =>
      svg
        .g()
        .push(applyProps(svg.circle([23, 25], 21.5), props))
        .push(svg.path("M.5,8 L23,1 L45.5,8")),
    clipPath: (svg) => svg.circle([23, 25], 21.5),
    accepts: ["fachaufgabe", "symbol", "organisation"],
    paintableArea: [
      [1.5, 3.5],
      [44.5, 46.5],
    ],
    padding: [10, 10],
    textPadding: [10, 5],
  },
  {
    id: "person",
    label: "Person",
    size: person.size,
    render: withProps(person.render),
    clipPath: (svg) => person.render(svg),
    accepts: [
      "einheit",
      "verwaltungsstufe",
      "fachaufgabe",
      "funktion",
      "symbol",
      "organisation",
    ],
    padding: [15, 15],
    textPadding: [10, 12],
  },
  {
    id: "gebaeude",
    label: "Gebäude",
    size: [75, 45],
    render: (svg, props) =>
      svg
        .g()
        .push(svg.path("M1,10 H74 V44 H1 Z").attr("fill", props?.fill))
        .push(svg.path("M1,10 L37.5,1 L74,10")),
    clipPath: (svg) => svg.path("M1,10 H74 V44 H1 Z"),
    paintableArea: [
      [0, 10],
      [75, 45],
    ],
    nameArea: [
      [4, 13],
      [32, 24],
    ],
    accepts: ["fachaufgabe", "symbol", "organisation", "name"],
    padding: [10, 20],
    textPadding: [10, 10],
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
    render: (svg, props) =>
      svg
        .g()
        .push(applyProps(fahrzeug.render(svg), props))
        .push(svg.circle([10, 49], 5))
        .push(svg.circle([65, 49], 5)),
  },
  {
    id: "kraftfahrzeug-gelaendegaengig",
    label: "Kraftfahrzeug geländegängig oder geländefähig",
    ...fahrzeugGrundzeichen,
    size: [75, 55],
    render: (svg, props) =>
      svg
        .g()
        .push(applyProps(fahrzeug.render(svg), props))
        .push(svg.circle([10, 49], 5))
        .push(svg.circle([37.5, 49], 5))
        .push(svg.circle([65, 49], 5)),
  },
  {
    id: "wechsellader",
    label: "Wechsellader",
    size: [75, 55],
    render: (svg, props) =>
      svg
        .g()
        .push(svg.path("M1,1 v43 h73"))
        .push(applyProps(svg.path("M4,1 Q36.5,10 74,1 v40 h-70 Z"), props))
        .push(svg.circle([10, 49], 5))
        .push(svg.circle([65, 49], 5)),
    clipPath: (svg) => svg.path("M4,1 Q36.5,10 73,1 v40 h-69 Z"),
    paintableArea: [
      [3, 0],
      [75, 42],
    ],
    nameArea: [
      [7, 10],
      [32, 17],
    ],
    einheitAnchor: [39.5, 4.5],
    accepts: [...fahrzeugAccepts, "einheit", "verwaltungsstufe"],
    padding: [15, 10, 10],
  },
  {
    id: "abrollbehaelter",
    label: "Abrollbehälter, Container",
    size: [75, 45],
    render: (svg, props) =>
      svg
        .g()
        .push(applyProps(svg.path("M7,44 V1 Q35,10 74,1 V44 Z"), props))
        .push(svg.circle([4, 10], 3)),
    clipPath: (svg) => svg.path("M7,44 V1 Q35,10 74,1 V44 Z"),
    paintableArea: [
      [6, 0],
      [75, 45],
    ],
    nameArea: [
      [10, 10],
      [38, 17],
    ],
    einheitAnchor: [40, 4.5],
    accepts: fahrzeugAccepts,
    padding: [15, 10, 10],
  },
  {
    id: "anhaenger",
    label: "Anhänger",
    size: [75, 45],
    render: (svg, props) =>
      applyProps(svg.path("M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7"), props),
    clipPath: (svg) => svg.path("M7,44 V1 Q35,10 74,1 V44 Z"),
    paintableArea: [
      [6, 0],
      [75, 45],
    ],
    nameArea: [
      [10, 10],
      [38, 17],
    ],
    einheitAnchor: [40, 4.5],
    accepts: fahrzeugAccepts,
    padding: [15, 10, 10],
  },
  {
    id: "schienenfahrzeug",
    label: "Schienenfahrzeug",
    ...fahrzeugGrundzeichen,
    size: [75, 55],
    render: (svg, props) =>
      svg
        .g()
        .push(applyProps(fahrzeug.render(svg), props))
        .push(svg.circle([10, 49], 5))
        .push(svg.circle([22, 49], 5))
        .push(svg.circle([53, 49], 5))
        .push(svg.circle([65, 49], 5)),
  },
  {
    id: "kettenfahrzeug",
    label: "Kettenfahrzeug",
    ...fahrzeugGrundzeichen,
    size: [75, 55],
    render: (svg, props) =>
      svg
        .g()
        .push(applyProps(fahrzeug.render(svg), props))
        .push(svg.path("M8 45 a4.5 4.5 0 0 0 0 9 h59 a4.5 4.5 0 0 0 0 -9 Z")),
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
    nameArea: [
      [4, 2.5],
      [20, 10],
    ],
    accepts: [
      "einheit",
      "verwaltungsstufe",
      "organisation",
      "fachaufgabe",
      "name",
    ],
    ...singleShape((svg) => svg.path("M1,1 a20 20 0 0 0 40 0 Z")),
  },
  {
    id: "flugzeug",
    label: "Flugzeug",
    accepts: ["einheit", "verwaltungsstufe", "organisation"],
    ...symbolShape(flugzeug),
  },
  {
    id: "hubschrauber",
    label: "Hubschrauber",
    accepts: ["einheit", "verwaltungsstufe", "organisation"],
    ...symbolShape(hubschrauber),
  },
  {
    id: "massnahme",
    label: "Maßnahme",
    size: [45, 36],
    accepts: ["symbol"],
    ...singleShape((svg) =>
      svg.path("M22.5,1.8 L43.2,35 H1.8 Z").attr("fill", "white")
    ),
    padding: [15, 15, 5],
  },
  {
    id: "anlass",
    label: "Anlass, Ereignis",
    size: [45, 36],
    render: (svg) => svg.path("M1,0.6 L22.5,34 L44,0.6").attr("fill", "white"),
    clipPath: (svg) => svg.path("M1,0.6 L22.5,34 L44,0.6 Z"),
    accepts: ["symbol"],
    padding: [5, 15, 15],
  },
  {
    id: "gefahr",
    label: "Gefahr",
    size: [45, 36],
    accepts: ["symbol"],
    ...singleShape((svg) =>
      svg.path("M22.5,34 L43.2,1 H1.8 Z").attr("fill", "white")
    ),
    padding: [5, 15, 15],
  },
];
