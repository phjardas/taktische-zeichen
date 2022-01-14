import { Element, SVGElementFactory } from "./svg";
import { type Point } from "./types";

export type SymbolId =
  | "drehleiter"
  | "hebegeraet"
  | "bagger"
  | "raeumgeraet"
  | "bruecke"
  | "sprengmittel"
  | "beleuchtung"
  | "bett"
  | "verpflegung"
  | "verbrauchsgueter"
  | "trinkwasser"
  | "brauchwasser"
  | "elektrizitaet"
  | "geraete"
  | "sprengung"
  | "transport"
  | "fahrzeug"
  | "fahrrad"
  | "kraftrad"
  | "flugzeug"
  | "hubschrauber"
  | "meldekopf"
  | "katsl"
  | "einsatzleitung"
  | "einsatzabschnittsleitung"
  | "untereinsatzabschnittsleitung"
  | "leitender-notarzt"
  | "organisatorischer-leiter-rettungsdienst"
  | "kreisbrandmeister"
  | "gemeindebrandinspektor"
  | "stadtbrandinspektor"
  | "kreisbrandinspektor"
  | "leiter-gefahrenabwehr"
  | "fuehrungsstab"
  | "entstehungsbrand"
  | "fortentwickelter-brand"
  | "vollbrand"
  | "sirene"
  | "lautsprecher";

export type SymbolRenderProps = {
  fill?: string;
};

export type Symbol = {
  id: SymbolId;
  label: string;
  size: Point;
  render(factory: SVGElementFactory, props?: SymbolRenderProps): Element;
};

export type SymbolSpec = Pick<Symbol, "size" | "render">;

function applyProps(element: Element, props?: SymbolRenderProps) {
  return element.attr("fill", props?.fill);
}

export const drehleiter: SymbolSpec = {
  size: [35, 35],
  render: (factory) => factory.path("M1,34 L24,11 H34 V1 H24 V11"),
};

export const hebegeraet: SymbolSpec = {
  size: [20, 30],
  render: (factory) => factory.path("M1,30 v-29 h8 a5 5 0 0 0 10 0"),
};

export const bagger: SymbolSpec = {
  size: [35, 23],
  render: (factory) =>
    hebegeraet
      .render(factory)
      .attr("transform", "translate(0,-8) rotate(45)")
      .attr("transform-origin", "1 30"),
};

export const bruecke: SymbolSpec = {
  size: [41, 16],
  render: (factory) =>
    factory.path("M.5,1 l10,5 h20 l10,-5 M.5,15 l10,-5 h20 l10,5"),
};

export const raeumgeraet: SymbolSpec = {
  size: [30, 19],
  render: (factory) => factory.path("M0,9 h21 m0,-9 v14 l8,4"),
};

export const sprengmittel: SymbolSpec = {
  size: [16, 17],
  render: (factory) =>
    factory
      .g()
      .push(factory.circle([8, 9], 1).attr("fill", "black"))
      .push(factory.circle([8, 9], 7))
      .push(factory.path("M4,2.5 l-1,-2 M11.5,2.5 l1,-2")),
};

export const beleuchtung: SymbolSpec = {
  size: [15, 20],
  render: (factory) =>
    factory
      .g()
      .push(factory.path("M1,20 v-14 a5 5 0 0 1 10 0"))
      .push(factory.circle([11, 9], 3)),
};

export const bett: SymbolSpec = {
  size: [30, 18],
  render: (factory) =>
    factory.path("M1,0 v18 m0,-5 h28 m0,5 v-18 m0,15 c0,-8 -28,-8 -28,0"),
};

export const verpflegung: SymbolSpec = {
  size: [17.8, 20],
  render: (factory) => factory.path("M10,10 l6.36,-6.36 a9 9 0 1 0 0 12.72 z"),
};

export const verbrauchsgueter: SymbolSpec = {
  size: [18, 24],
  render: (factory) => factory.path("M7,24 v-14 l-7,-10 h18 l-7,10 v14"),
};

export const trinkwasser: SymbolSpec = {
  size: [28, 14],
  render: (factory) =>
    factory.path("M1,14 v-3 a7 7 0 0 1 7 -7 h20 m-15,-3 v7 m-4,-7 h8"),
};

export const brauchwasser: SymbolSpec = {
  size: [50, 17],
  render: (factory) =>
    factory.path("M1,9 c0,-10 16,-10 16,-1 0,10 16,10 16,1 0,-10 16,-10 16,0"),
};

export const elektrizitaet: SymbolSpec = {
  size: [17, 24],
  render: (factory) =>
    factory
      .g()
      .push(factory.path("M14.5,1 l-10,10 h10 l-10,10"))
      .push(factory.path("M4.5,21 l5,2 l-8,0 l2,-7 Z").attr("fill", "black")),
};

export const geraete: SymbolSpec = {
  size: [37, 14],
  render: (factory) =>
    factory.path("M6,7 l25,0 m6,-6 a6 6 0 0 0 0 12 M0,1 a6 6 0 0 1 0 12"),
};

export const sprengung: SymbolSpec = {
  size: [10, 17],
  render: (factory) =>
    factory.path("M1,1 c0,5 3,15 4,15 1,0 4,-10 4,-15 Z").attr("fill", "black"),
};

export const transport: SymbolSpec = {
  size: [30, 30],
  render: (factory) =>
    factory
      .g()
      .push(factory.circle([15, 15], 14))
      .push(factory.path("M1,15 h28 M15,1 v28 M5,5 l20,20  M5,25 l20,-20")),
};

export const fahrzeug: SymbolSpec = {
  size: [75, 45],
  render: (factory, props) =>
    applyProps(factory.path("M1,44 V1 Q37.5,10 74,1 V44 Z"), props),
};

export const fahrrad: SymbolSpec = {
  size: [42, 45],
  render: (factory) => factory.path("M1,21 a20 20 0 0 1 40 0 m-20,-20 v45"),
};

export const kraftrad: SymbolSpec = {
  size: [42, 45],
  render: (factory) =>
    factory.path("M1,21 a20 20 0 0 1 40 0 m-20,-20 v45 m-10,-20 h20"),
};

export const flugzeug: SymbolSpec = {
  size: [38, 15],
  render: (factory, props) =>
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
};

export const hubschrauber: SymbolSpec = {
  size: [38, 23],
  render: (factory, props) =>
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
};

export const beschaedigt: SymbolSpec = {
  size: [30, 30],
  render: (factory) => factory.path("M1,1 L29,29 M1,29 L29,1"),
};

export const teilzerstoert: SymbolSpec = {
  size: [30, 30],
  render: (factory) =>
    factory.path("M9,1 L29,20 M1,20 L20,1 M1,9 L20,29 M9,29 L29,9"),
};

export const zerstoert: SymbolSpec = {
  size: [30, 30],
  render: (factory) =>
    factory.path(
      "M9,1 L29,20 M1,20 L20,1 M1,9 L20,29 M9,29 L29,9 M5,5 L25,25 M5,25 L25,5"
    ),
};

export const teilblockiert: SymbolSpec = {
  size: [6, 30],
  render: (factory) => factory.path("M1,0 V30 M5,0 V30"),
};

export const blockiert: SymbolSpec = {
  size: [14, 30],
  render: (factory) => factory.path("M1,0 V30 M5,0 V30 M9,0 V30 M13,0 V30"),
};

export const entstehungsbrand: SymbolSpec = {
  size: [13, 34],
  render: (factory) =>
    factory
      .g()
      .push(
        factory.clipPath("brand-clip").push(factory.path("M13,0 v34 h-12.5 Z"))
      )
      .push(
        factory
          .path("M12,5 v28 h-10 l12,-33")
          .attr("clip-path", "url(#brand-clip)")
          .attr("stroke", "#cc0000")
      ),
};

export const fortentwickelterBrand: SymbolSpec = {
  size: [23, 34],
  render: (factory) =>
    factory
      .g()
      .push(entstehungsbrand.render(factory).attr("id", "brand"))
      .push(factory.use("#brand").attr("x", 10)),
};

export const vollbrand: SymbolSpec = {
  size: [33, 34],
  render: (factory) =>
    factory
      .g()
      .push(entstehungsbrand.render(factory).attr("id", "brand"))
      .push(factory.use("#brand").attr("x", 10))
      .push(factory.use("#brand").attr("x", 20)),
};

export const sirene: SymbolSpec = {
  size: [30, 20],
  render: (factory) => factory.path("M2,8.5 a15 15 0 0 1 26 0 Z M15,8.5 v11.5"),
};

export const lautsprecher: SymbolSpec = {
  size: [27, 23],
  render: (factory) =>
    factory.path("M1,3.5 l5,3 v10 l-5,3 Z m5,3 l20,-5 v20 l-20,-5 Z"),
};

function getTextHeight(text: string) {
  return ["g", "j", "p", "q", "y"].some((letter) => text.includes(letter))
    ? 28
    : 21.5;
}

function textSymbol(text: string, width: number): SymbolSpec {
  return {
    size: [width, getTextHeight(text)],
    render: (factory) =>
      factory
        .text([-2, 21.5], text)
        .attr("fill", "black")
        .attr("stroke-width", 0)
        .attr("style", "font:bold 30px sans-serif"),
  };
}

export const meldekopf = textSymbol("M", 21);
export const katsl = textSymbol("KatSL", 84);
export const tel = textSymbol("TEL", 54);
export const einsatzleitung = textSymbol("EL", 35.5);
export const einsatzabschnittsleitung = textSymbol("EAL", 57);
export const untereinsatzabschnittsleitung = textSymbol("UEAL", 79);
export const leitenderNotarzt = textSymbol("LNA", 59.5);
export const organisatorischerLeiterRettungsdienst = textSymbol("OrgL", 69);
export const kreisbrandmeister = textSymbol("KBM", 64.5);
export const gemeindebrandinspektor = textSymbol("GBI", 49.5);
export const stadtbrandinspektor = textSymbol("SBI", 46);
export const kreisbrandinspektor = textSymbol("KBI", 48);
export const leiterGefahrenabwehr = textSymbol("LtrGA", 83);
export const fuehrungsstab = textSymbol("FüStab", 98.5);

export const symbole: Array<Symbol> = [
  { ...drehleiter, id: "drehleiter", label: "Drehleiter" },
  { ...hebegeraet, id: "hebegeraet", label: "Hebegerät" },
  { ...bagger, id: "bagger", label: "Bagger" },
  { ...raeumgeraet, id: "raeumgeraet", label: "Räumgerät" },
  { ...bruecke, id: "bruecke", label: "Brücke" },
  { ...sprengmittel, id: "sprengmittel", label: "Sprengmittel" },
  { ...beleuchtung, id: "beleuchtung", label: "Beleuchtung" },
  { ...bett, id: "bett", label: "Bett" },
  { ...verpflegung, id: "verpflegung", label: "Verpflegung" },
  { ...verbrauchsgueter, id: "verbrauchsgueter", label: "Verbrauchsgüter" },
  { ...trinkwasser, id: "trinkwasser", label: "Trinkwasser" },
  { ...brauchwasser, id: "brauchwasser", label: "Brauchwasser" },
  { ...elektrizitaet, id: "elektrizitaet", label: "Elektrizität" },
  { ...geraete, id: "geraete", label: "Geräte" },
  { ...sprengung, id: "sprengung", label: "Sprengung" },
  { ...transport, id: "transport", label: "Transport" },
  { ...fahrzeug, id: "fahrzeug", label: "Fahrzeug" },
  { ...fahrrad, id: "fahrrad", label: "Fahrrad" },
  { ...kraftrad, id: "kraftrad", label: "Kraftrad" },
  { ...flugzeug, id: "flugzeug", label: "Flugzeug" },
  { ...hubschrauber, id: "hubschrauber", label: "Hubschrauber" },
  { ...meldekopf, id: "meldekopf", label: "Meldekopf" },
  { ...katsl, id: "katsl", label: "Katastrophenschutzleitung" },
  { ...einsatzleitung, id: "einsatzleitung", label: "Einsatzleitung" },
  {
    ...einsatzabschnittsleitung,
    id: "einsatzabschnittsleitung",
    label: "Einsatzabschnittsleitung",
  },
  {
    ...untereinsatzabschnittsleitung,
    id: "untereinsatzabschnittsleitung",
    label: "Untereinsatzabschnittsleitung",
  },
  { ...leitenderNotarzt, id: "leitender-notarzt", label: "Leitender Notarzt" },
  {
    ...organisatorischerLeiterRettungsdienst,
    id: "organisatorischer-leiter-rettungsdienst",
    label: "Organisatorischer Leiter Rettungsdienst",
  },
  {
    ...kreisbrandmeister,
    id: "kreisbrandmeister",
    label: "Kreisbrandmeister",
  },
  {
    ...gemeindebrandinspektor,
    id: "gemeindebrandinspektor",
    label: "Gemeindebrandinspektor",
  },
  {
    ...stadtbrandinspektor,
    id: "stadtbrandinspektor",
    label: "Stadtbrandinspektor",
  },
  {
    ...kreisbrandinspektor,
    id: "kreisbrandinspektor",
    label: "Kreisbrandinspektor",
  },
  {
    ...leiterGefahrenabwehr,
    id: "leiter-gefahrenabwehr",
    label: "Leiter Gefahrenabwehr",
  },
  { ...fuehrungsstab, id: "fuehrungsstab", label: "Führungsstab" },
  { ...entstehungsbrand, id: "entstehungsbrand", label: "Entstehungsbrand" },
  {
    ...fortentwickelterBrand,
    id: "fortentwickelter-brand",
    label: "Fortentwickelter Brand",
  },
  { ...vollbrand, id: "vollbrand", label: "Vollbrand" },
  { ...sirene, id: "sirene", label: "Sirene" },
  { ...lautsprecher, id: "lautsprecher", label: "Lautsprecher" },
];
