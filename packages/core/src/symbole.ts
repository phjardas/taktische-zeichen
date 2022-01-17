import { Element } from "./svg";
import { type Renderable } from "./types";

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
  | "entstehungsbrand"
  | "fortentwickelter-brand"
  | "vollbrand"
  | "sirene"
  | "lautsprecher"
  | "zelt"
  | "ablage"
  | "veterinaerwesen"
  | "person"
  | "person-verletzt"
  | "person-tot"
  | "person-vermisst"
  | "person-verschuettet"
  | "person-gerettet"
  | "beschaedigt"
  | "teilzerstoert"
  | "zerstoert"
  | "teilblockiert"
  | "blockiert"
  | "tendenz-steigend"
  | "tendenz-fallend"
  | "tendenz-unveraendert";

export type SymbolRenderProps = {
  fill?: string;
};

export type Symbol = Renderable<SymbolRenderProps> & {
  id: SymbolId;
  label: string;
};

export type SymbolSpec = Pick<Symbol, "size" | "render">;

function applyProps(element: Element, props?: SymbolRenderProps) {
  return element.attr("fill", props?.fill);
}

export const drehleiter: SymbolSpec = {
  size: [35, 35],
  render: (svg) => svg.path("M1,34 L24,11 H34 V1 H24 V11"),
};

export const hebegeraet: SymbolSpec = {
  size: [20, 30],
  render: (svg) => svg.path("M1,30 v-29 h8 a5 5 0 0 0 10 0"),
};

export const bagger: SymbolSpec = {
  size: [35, 23],
  render: (svg) =>
    hebegeraet
      .render(svg)
      .attr("transform", "translate(0,-8) rotate(45)")
      .attr("transform-origin", "1 30"),
};

export const bruecke: SymbolSpec = {
  size: [41, 16],
  render: (svg) => svg.path("M.5,1 l10,5 h20 l10,-5 M.5,15 l10,-5 h20 l10,5"),
};

export const raeumgeraet: SymbolSpec = {
  size: [30, 19],
  render: (svg) => svg.path("M0,9 h21 m0,-9 v14 l8,4"),
};

export const sprengmittel: SymbolSpec = {
  size: [16, 17],
  render: (svg) =>
    svg
      .g()
      .push(svg.circle([8, 9], 1).attr("fill", "black"))
      .push(svg.circle([8, 9], 7))
      .push(svg.path("M4,2.5 l-1,-2 M11.5,2.5 l1,-2")),
};

export const tendenzSteigend: SymbolSpec = {
  size: [45, 45],
  render: (svg) =>
    svg
      .g()
      .push(svg.path("M5,40 L38,7"))
      .push(svg.path("M40,5 l-8,3 l5,5 l3,-8").attr("fill", "black").attr("stroke-width", 0))      
      .push(svg.rect([1, 1], [43, 43])),
};

export const tendenzFallend: SymbolSpec = {
  size: [45, 45],
  render: (svg) =>
    svg
      .g()
      .push(svg.path("M5,5 L38,38"))
      .push(svg.path("M40,40 l-8,-3 l5,-5 l3,8").attr("fill", "black").attr("stroke-width", 0))      
      .push(svg.rect([1, 1], [43, 43])),
};

export const tendenzUnveraendert: SymbolSpec = {
  size: [45, 45],
  render: (svg) =>
    svg
      .g()
      .push(svg.path("M5,23 L38,23"))
      .push(svg.path("M40,23 l-8,4 l0,-8 l8,4").attr("fill", "black").attr("stroke-width", 0))      
      .push(svg.rect([1, 1], [43, 43])),
};

export const beleuchtung: SymbolSpec = {
  size: [15, 20],
  render: (svg) =>
    svg
      .g()
      .push(svg.path("M1,20 v-14 a5 5 0 0 1 10 0"))
      .push(svg.circle([11, 9], 3)),
};

export const bett: SymbolSpec = {
  size: [30, 18],
  render: (svg) =>
    svg.path("M1,0 v18 m0,-5 h28 m0,5 v-18 m0,15 c0,-8 -28,-8 -28,0"),
};

export const verpflegung: SymbolSpec = {
  size: [17.8, 20],
  render: (svg) => svg.path("M10,10 l6.36,-6.36 a9 9 0 1 0 0 12.72 z"),
};

export const verbrauchsgueter: SymbolSpec = {
  size: [18, 24],
  render: (svg) => svg.path("M7,24 v-14 l-7,-10 h18 l-7,10 v14"),
};

export const trinkwasser: SymbolSpec = {
  size: [28, 14],
  render: (svg) =>
    svg.path("M1,14 v-3 a7 7 0 0 1 7 -7 h20 m-15,-3 v7 m-4,-7 h8"),
};

export const brauchwasser: SymbolSpec = {
  size: [50, 17],
  render: (svg) =>
    svg.path("M1,9 c0,-10 16,-10 16,-1 0,10 16,10 16,1 0,-10 16,-10 16,0"),
};

export const elektrizitaet: SymbolSpec = {
  size: [17, 24],
  render: (svg) =>
    svg
      .g()
      .push(svg.path("M14.5,1 l-10,10 h10 l-10,10"))
      .push(svg.path("M4.5,21 l5,2 l-8,0 l2,-7 Z").attr("fill", "black")),
};

export const geraete: SymbolSpec = {
  size: [37, 14],
  render: (svg) =>
    svg.path("M6,7 l25,0 m6,-6 a6 6 0 0 0 0 12 M0,1 a6 6 0 0 1 0 12"),
};

export const sprengung: SymbolSpec = {
  size: [10, 17],
  render: (svg) =>
    svg.path("M1,1 c0,5 3,15 4,15 1,0 4,-10 4,-15 Z").attr("fill", "black"),
};

export const transport: SymbolSpec = {
  size: [30, 30],
  render: (svg) =>
    svg
      .g()
      .push(svg.circle([15, 15], 14))
      .push(svg.path("M1,15 h28 M15,1 v28 M5,5 l20,20  M5,25 l20,-20")),
};

export const fahrzeug: SymbolSpec = {
  size: [75, 45],
  render: (svg, props) =>
    applyProps(svg.path("M1,44 V1 Q37.5,10 74,1 V44 Z"), props),
};

export const fahrrad: SymbolSpec = {
  size: [42, 45],
  render: (svg) => svg.path("M1,21 a20 20 0 0 1 40 0 m-20,-20 v45"),
};

export const kraftrad: SymbolSpec = {
  size: [42, 45],
  render: (svg) =>
    svg.path("M1,21 a20 20 0 0 1 40 0 m-20,-20 v45 m-10,-20 h20"),
};

export const flugzeug: SymbolSpec = {
  size: [38, 15],
  render: (svg, props) =>
    svg
      .g()
      .push(svg.path("M19,0 v15"))
      .push(
        applyProps(
          svg.path("M5,3.5 h10 a4 4 0 0 1 0 8 h-10 a4 4 0 0 1 0 -8 Z"),
          props
        )
      )
      .push(
        applyProps(
          svg.path("M23,3.5 h10 a4 4 0 0 1 0 8 h-10 a4 4 0 0 1 0 -8 Z"),
          props
        )
      ),
};

export const hubschrauber: SymbolSpec = {
  size: [38, 23],
  render: (svg, props) =>
    svg
      .g()
      .push(svg.path("M19,2 v20 m-10,0 h20"))
      .push(
        applyProps(
          svg.path("M5,1 h10 a4 4 0 0 1 0 8 h-10 a4 4 0 0 1 0 -8 Z"),
          props
        )
      )
      .push(
        applyProps(
          svg.path("M23,1 h10 a4 4 0 0 1 0 8 h-10 a4 4 0 0 1 0 -8 Z"),
          props
        )
      ),
};

export const beschaedigt: SymbolSpec = {
  size: [30, 30],
  render: (svg) => svg.path("M1,1 L29,29 M1,29 L29,1"),
};

export const teilzerstoert: SymbolSpec = {
  size: [30, 30],
  render: (svg) => svg.path("M9,1 L29,20 M1,20 L20,1 M1,9 L20,29 M9,29 L29,9"),
};

export const zerstoert: SymbolSpec = {
  size: [30, 30],
  render: (svg) =>
    svg.path(
      "M9,1 L29,20 M1,20 L20,1 M1,9 L20,29 M9,29 L29,9 M5,5 L25,25 M5,25 L25,5"
    ),
};

export const teilblockiert: SymbolSpec = {
  size: [6, 30],
  render: (svg) => svg.path("M1,0 V30 M5,0 V30"),
};

export const blockiert: SymbolSpec = {
  size: [14, 30],
  render: (svg) => svg.path("M1,0 V30 M5,0 V30 M9,0 V30 M13,0 V30"),
};

export const entstehungsbrand: SymbolSpec = {
  size: [13, 34],
  render: (svg) =>
    svg
      .g()
      .push(svg.clipPath("brand-clip").push(svg.path("M13,0 v34 h-12.5 Z")))
      .push(
        svg
          .path("M12,5 v28 h-10 l12,-33")
          .attr("clip-path", "url(#brand-clip)")
          .attr("stroke", "#cc0000")
      ),
};

export const fortentwickelterBrand: SymbolSpec = {
  size: [23, 34],
  render: (svg) =>
    svg
      .g()
      .push(entstehungsbrand.render(svg).attr("id", "brand"))
      .push(svg.use("#brand").attr("x", 10)),
};

export const vollbrand: SymbolSpec = {
  size: [33, 34],
  render: (svg) =>
    svg
      .g()
      .push(entstehungsbrand.render(svg).attr("id", "brand"))
      .push(svg.use("#brand").attr("x", 10))
      .push(svg.use("#brand").attr("x", 20)),
};

export const sirene: SymbolSpec = {
  size: [30, 20],
  render: (svg) => svg.path("M2,8.5 a15 15 0 0 1 26 0 Z M15,8.5 v11.5"),
};

export const lautsprecher: SymbolSpec = {
  size: [27, 23],
  render: (svg) =>
    svg.path("M1,3.5 l5,3 v10 l-5,3 Z m5,3 l20,-5 v20 l-20,-5 Z"),
};

export const zelt: SymbolSpec = {
  size: [30, 30],
  render: (svg) => svg.path("M13,1 l15,28 h-26 l15,-28"),
};

export const ablage: SymbolSpec = {
  size: [30, 30],
  render: (svg) =>
    svg
      .path("M7,3 l-3,2 l3,2 Z m0,2 h16 m0,-2 l3,2 l-3,2 Z")
      .attr("fill", "black"),
};

export const veterinaerwesen: SymbolSpec = {
  size: [30, 30],
  render: (svg) => svg.path("M0,1 h5 l10,26 l10,-26 h5"),
};

export const person: SymbolSpec = {
  size: [45, 45],
  render: (svg) => svg.path("M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z"),
};

export const personVerletzt: SymbolSpec = {
  size: [45, 45],
  render: (svg) =>
    svg.path("M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z M22.5,1.5 v42"),
};

export const personTot: SymbolSpec = {
  size: [45, 45],
  render: (svg) =>
    svg.path(
      "M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z M22.5,1.5 v42 M14,10 h17"
    ),
};

export const personVermisst: SymbolSpec = {
  size: [49, 49],
  render: (svg) =>
    svg
      .g()
      .push(
        svg
          .path("M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z")
          .attr("transform", "translate(2,2)")
      )
      .push(svg.path("M1,23 L23,1 M26,48 L48,26")),
};

export const personVerschuettet: SymbolSpec = {
  size: [45, 45],
  render: (svg) =>
    svg.path("M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z M0,1 h45"),
};

export const personGerettet: SymbolSpec = {
  size: [45, 45],
  render: (svg) =>
    svg.path("M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z M0,44 h45"),
};

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
  { ...entstehungsbrand, id: "entstehungsbrand", label: "Entstehungsbrand" },
  {
    ...fortentwickelterBrand,
    id: "fortentwickelter-brand",
    label: "Fortentwickelter Brand",
  },
  { ...vollbrand, id: "vollbrand", label: "Vollbrand" },
  { ...sirene, id: "sirene", label: "Sirene" },
  { ...lautsprecher, id: "lautsprecher", label: "Lautsprecher" },
  { ...zelt, id: "zelt", label: "Zelt" },
  { ...ablage, id: "ablage", label: "Ablage" },
  { ...veterinaerwesen, id: "veterinaerwesen", label: "Veterinärwesen" },
  { ...person, id: "person", label: "Person" },
  { ...personVerletzt, id: "person-verletzt", label: "Person verletzt" },
  { ...personTot, id: "person-tot", label: "Person tot" },
  { ...personVermisst, id: "person-vermisst", label: "Person vermisst" },
  {
    ...personVerschuettet,
    id: "person-verschuettet",
    label: "Person verschuettet",
  },
  { ...personGerettet, id: "person-gerettet", label: "Person gerettet" },
  { ...beschaedigt, id: "beschaedigt", label: "beschädigt" },
  { ...teilzerstoert, id: "teilzerstoert", label: "teilzerstört" },
  { ...zerstoert, id: "zerstoert", label: "zerstört" },
  { ...teilblockiert, id: "teilblockiert", label: "teilblockiert" },
  { ...blockiert, id: "blockiert", label: "blockiert" },
  { ...tendenzSteigend, id: "tendenz-steigend", label: "Tendenz steigend" },
  { ...tendenzFallend, id: "tendenz-fallend", label: "Tendenz fallend" },
  { ...tendenzUnveraendert, id: "tendenz-unveraendert", label: "Tendenz unverändert" },
];