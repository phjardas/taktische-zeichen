import { Element } from "./svg";
import { renderText } from "./text";
import { type Point, type Renderable } from "./types";

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
  | "bergung"
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
  | "warnung"
  | "zelt"
  | "sichten"
  | "sammeln"
  | "sammelplatz-betroffene"
  | "veterinaerwesen"
  | "schlachten"
  | "tier-verletzt"
  | "tier-tot"
  | "person"
  | "person-verletzt"
  | "person-tot"
  | "person-vermisst"
  | "person-verschuettet"
  | "person-gerettet"
  | "person-zu-transportieren"
  | "person-transportiert"
  | "beschaedigt"
  | "teilzerstoert"
  | "zerstoert"
  | "teilblockiert"
  | "blockiert"
  | "tendenz-steigend"
  | "tendenz-fallend"
  | "tendenz-unveraendert"
  | "ausfall-25"
  | "ausfall-50"
  | "ausfall-75"
  | "ausfall-100"
  | "abc"
  | "dekontamination"
  | "dekontamination-personen"
  | "dekontamination-geraete"
  | "wasser"
  | "wasserfahrzeug"
  | "pumpe"
  | "bilduebertragung"
  | "bilduebertragung-funk"
  | "datenuebertragung"
  | "datenuebertragung-funk"
  | "fax"
  | "fax-funk"
  | "fernsprechen"
  | "fernsprechen-funk"
  | "fernschreiben"
  | "fernschreiben-funk"
  | "festbilduebertragung"
  | "festbilduebertragung-funk"
  | "relaisfunkbetrieb"
  | "richtbetrieb"
  | "kabelbau"
  | "vermutung"
  | "akut"
  | "technische-hilfeleistung"
  | "seelsorge"
  | "drohne";

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
  size: [35.5, 23],
  render: (svg) => svg.path("M1,22 l20.5,-20.5 l5,5 a5 5 0 0 0 8 8"),
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
      .push(svg.circle([8, 9], 1).attr("fill", "currentColor"))
      .push(svg.circle([8, 9], 7))
      .push(svg.path("M4,2.5 l-1,-2 M11.5,2.5 l1,-2")),
};

export const technischeHilfeleistung: SymbolSpec = {
  size: [38, 10],
  render: (svg) =>
    svg.path(
      "M1,1 l11,3 M1,9 l11,-3 M12,2 h15 v6 h-15 Z M27,4 c3,-3 7,-3 10,0 M27,7 c3,-3 7,-3 10,0"
    ),
};

export const seelsorge: SymbolSpec = {
  size: [20, 27],
  render: (svg) => svg.path("M8,0 V27 m4,0 V0 M0,8 H20 m0,4 H0"),
};

export const bergung: SymbolSpec = {
  size: [75, 45],
  render: (svg) => svg.path("M0,15 H15 A22.5 20 180 1 0 60 15 H75"),
};

export const ausfall25: SymbolSpec = {
  size: [45, 45],
  render: (svg) =>
    svg
      .g()
      .push(svg.rect([1, 1], [43, 43]).attr("fill", "green"))
      .push(svg.rect([22, 1], [22, 22]).attr("fill", "red"))
      .push(svg.circle([22, 22], 10).attr("fill", "white"))
      .push(
        svg
          .registerText()
          .textNode("text", "1")
          .attr("x", "18")
          .attr("y", "27")
          .attr("stroke", "none")
          .attr("fill", "black")
      ),
};

export const ausfall50: SymbolSpec = {
  size: [45, 45],
  render: (svg) =>
    svg
      .g()
      .push(svg.rect([1, 1], [43, 43]).attr("fill", "green"))
      .push(svg.rect([22, 1], [22, 43]).attr("fill", "red"))
      .push(svg.circle([22, 22], 10).attr("fill", "white"))
      .push(
        svg
          .registerText()
          .textNode("text", "2")
          .attr("x", "18")
          .attr("y", "27")
          .attr("stroke", "none")
          .attr("fill", "black")
      ),
};

export const ausfall75: SymbolSpec = {
  size: [45, 45],
  render: (svg) =>
    svg
      .g()
      .push(svg.rect([1, 1], [43, 43]).attr("fill", "red"))
      .push(svg.rect([1, 1], [21, 21]).attr("fill", "green"))
      .push(svg.circle([22, 22], 10).attr("fill", "white"))
      .push(
        svg
          .registerText()
          .textNode("text", "3")
          .attr("x", "18")
          .attr("y", "27")
          .attr("stroke", "none")
          .attr("fill", "black")
      ),
};

export const ausfall100: SymbolSpec = {
  size: [45, 45],
  render: (svg) =>
    svg
      .g()
      .push(svg.rect([1, 1], [43, 43]).attr("fill", "red"))
      .push(svg.circle([22, 22], 10).attr("fill", "white"))
      .push(
        svg
          .registerText()
          .textNode("text", "4")
          .attr("x", "18")
          .attr("y", "27")
          .attr("stroke", "none")
          .attr("fill", "black")
      ),
};

export const tendenzSteigend: SymbolSpec = {
  size: [45, 45],
  render: (svg) =>
    svg
      .g()
      .push(svg.path("M5,40 L38,7"))
      .push(
        svg
          .path("M40,5 l-8,3 l5,5 l3,-8")
          .attr("fill", "black")
          .attr("stroke-width", 0)
      )
      .push(svg.rect([1, 1], [43, 43])),
};

export const tendenzFallend: SymbolSpec = {
  size: [45, 45],
  render: (svg) =>
    svg
      .g()
      .push(svg.path("M5,5 L38,38"))
      .push(
        svg
          .path("M40,40 l-8,-3 l5,-5 l3,8")
          .attr("fill", "black")
          .attr("stroke-width", 0)
      )
      .push(svg.rect([1, 1], [43, 43])),
};

export const tendenzUnveraendert: SymbolSpec = {
  size: [45, 45],
  render: (svg) =>
    svg
      .g()
      .push(svg.path("M5,23 L38,23"))
      .push(
        svg
          .path("M40,23 l-8,4 l0,-8 l8,4")
          .attr("fill", "black")
          .attr("stroke-width", 0)
      )
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
      .push(svg.clipPath("tz_brand-clip").push(svg.path("M13,0 v34 h-12.5 Z")))
      .push(
        svg
          .path("M12,5 v28 h-10 l12,-33")
          .attr("clip-path", "url(#tz_brand-clip)")
          .attr("stroke", "#cc0000")
      ),
};

export const fortentwickelterBrand: SymbolSpec = {
  size: [23, 34],
  render: (svg) =>
    svg
      .g()
      .push(entstehungsbrand.render(svg).attr("id", "tz_brand"))
      .push(svg.use("#tz_brand").attr("x", 10)),
};

export const vollbrand: SymbolSpec = {
  size: [33, 34],
  render: (svg) =>
    svg
      .g()
      .push(entstehungsbrand.render(svg).attr("id", "tz_brand"))
      .push(svg.use("#tz_brand").attr("x", 10))
      .push(svg.use("#tz_brand").attr("x", 20)),
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

export const warnung: SymbolSpec = {
  size: [38.5, 23],
  render: (svg) =>
    svg.path(
      "M1,3.5 l5,3 v10 l-5,3 Z m5,3 l20,-5 v20 l-20,-5 Z M30,4 a25 25 0 0 1 0 16 m5,-18 a25 25 0 0 1 0 20"
    ),
};

export const zelt: SymbolSpec = {
  size: [30, 30],
  render: (svg) => svg.path("M13,1 l15,28 h-26 l15,-28"),
};

export const sichten: SymbolSpec = {
  size: [30, 30],
  render: (svg) =>
    svg
      .path("M7,3 l-3,2 l3,2 Z m0,2 h16 m0,-2 l3,2 l-3,2 Z")
      .attr("fill", "black"),
};

export const sammeln: SymbolSpec = {
  size: [42, 12],
  render: (svg) =>
    svg.path("M0,6 h30 m-5,-5 l5,5 -5,5 m6,-5.1 a5 5 0 1 1 0 .2 Z"),
};

export const sammelplatzBetroffene: SymbolSpec = {
  size: [35, 46],
  render: (svg) =>
    svg
      .g()
      .push(
        svg
          .path("M5,10 l-3,2 l3,2 Z m0,2 h25 m0,-2 l3,2 l-3,2 Z")
          .attr("fill", "currentColor")
      )
      .push(svg.path("M17.5,0 v30 l-15,15 m30,0 l-15,-15")),
};

export const veterinaerwesen: SymbolSpec = {
  size: [30, 30],
  render: (svg) => svg.path("M0,1 h5 l10,26 l10,-26 h5"),
};

export const schlachten: SymbolSpec = {
  size: [45, 12],
  render: (svg) => svg.path("M0,1 h45 m-39,0 l-4,10 h15 l-4,-10"),
};

export const tierVerletzt: SymbolSpec = {
  size: [30, 35],
  render: (svg) => svg.path("M0,6 h5 l10,26 l10,-26 h5 M15,0 v20"),
};

export const tierTot: SymbolSpec = {
  size: [30, 35],
  render: (svg) => svg.path("M0,6 h5 l10,26 l10,-26 h5 M15,0 v20 m-5,-14 h10"),
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

export const personZuTransportieren: SymbolSpec = {
  size: [45, 48],
  render: (svg) =>
    svg.path(
      "M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z M0,44 h43 m-3,-2 l3,2 l-3,2 Z"
    ),
};

export const personTransportiert: SymbolSpec = {
  size: [45, 48],
  render: (svg) =>
    svg.path(
      "M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z M0,44 h43 m-3,-2 l3,2 l-3,2 Z m4,-2 v8"
    ),
};

export const abc: SymbolSpec = {
  size: [30, 30],
  render: (svg) =>
    svg
      .g()
      .push(svg.circle([4, 4], 3).attr("fill", "black"))
      .push(svg.circle([26, 4], 3).attr("fill", "black"))
      .push(svg.path("M5.7,1.5 L29,29 M24.3,1.5 L1,29")),
};

export const dekontamination: SymbolSpec = {
  size: abc.size,
  render: (svg) =>
    svg
      .g()
      .push(abc.render(svg))
      .push(
        svg.path(
          "M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7"
        )
      ),
};

export const dekontaminationPersonen: SymbolSpec = {
  size: abc.size,
  render: (svg) =>
    svg
      .g()
      .push(dekontamination.render(svg))
      .push(svg.path("M13.5,30 v-9 h2 a2 2 0 0 1 0 4.5 h-2")),
};

export const dekontaminationGeraete: SymbolSpec = {
  size: abc.size,
  render: (svg) =>
    svg
      .g()
      .push(dekontamination.render(svg))
      .push(svg.path("M18.5,23 a4 4 0 1 0 0 4 m-3,-1 h3 v4")),
};

export const wasser: SymbolSpec = {
  size: [32, 12.5],
  render: (svg) =>
    svg.path(
      "M1,3.5 a7 7 0 0 1 10 0 a7 7 0 0 0 10 0 a7 7 0 0 1 10 0 M1,9 a7 7 0 0 1 10 0 a7 7 0 0 0 10 0 a7 7 0 0 1 10 0"
    ),
};

export const wasserfahrzeug: SymbolSpec = {
  size: [42, 22],
  render: (svg) => svg.path("M1,1 a20 20 0 0 0 40 0 Z"),
};

export const hund: SymbolSpec = {
  size: [33, 19],
  render: (svg) =>
    svg.path(
      "M2,10 h10 l-5,-8 Z m10,0 h15 l5,-8 m-10,16 l5,-8 5,8 m-15,0 l-5,-8 -5,8"
    ),
};

export const pumpe: SymbolSpec = {
  size: [42, 42],
  render: (svg) => {
    const g = svg.g().attr("transform", "translate(22 22)");
    g.push(svg.circle([0, 0], 10));
    for (let i = 0; i < 5; i++) {
      g.push(
        svg
          .path("M0,-10 a8 8 0 0 1 5 -10")
          .attr("transform", `rotate(${i * 72 + 50})`)
      );
    }
    return g;
  },
};

const vermutung: SymbolSpec = {
  size: [15, 22],
  render: (svg) =>
    renderText(svg, "?").attr("y", 21.5).attr("fill", "currentColor"),
};

const akut: SymbolSpec = {
  size: [5, 33],
  render: (svg) =>
    svg
      .path("M1,1 v10 l1,15 h1 l1,-15 v-10 Z m0,28 h3 v3 h-3 Z")
      .attr("fill", "currentColor"),
};

const funk: SymbolSpec = {
  size: [62, 12.5],
  render: (svg) => svg.path("M1,1.5 l10,10 10,-10 10,10 10,-10 10,10 10,-10"),
};

function mitFunk(symbol: SymbolSpec): SymbolSpec {
  const margin = 1;
  const scale = Math.min(symbol.size[0] / funk.size[0], 1);
  const newSize: Point = [
    symbol.size[0],
    symbol.size[1] + margin + funk.size[1] * scale,
  ];

  return {
    size: newSize,
    render: (svg) =>
      svg
        .g()
        .push(symbol.render(svg))
        .push(
          funk
            .render(svg)
            .attr(
              "transform",
              `scale(${scale}) translate(0 ${
                (symbol.size[1] + margin) / scale
              })`
            )
        ),
  };
}

const bilduebertragung: SymbolSpec = {
  size: [42, 27],
  render: (svg) =>
    svg.path(
      "M1,6 a5 5 0 0 1 5 -5 h30 a5 5 0 0 1 5 5 v15 a5 5 0 0 1 -5 5 h-30 a5 5 0 0 1 -5 -5 Z"
    ),
};
const bilduebertragungFunk = mitFunk(bilduebertragung);

const datenuebertragung: SymbolSpec = {
  size: [45, 17],
  render: (svg) => svg.path("M0,1 h15 v15 h15 v-15 h15"),
};
const datenuebertragungFunk = mitFunk(datenuebertragung);

const fax: SymbolSpec = {
  size: [50, 22],
  render: (svg) => renderText(svg, "Fax").attr("y", 21.5).attr("fill", "black"),
};
const faxFunk = mitFunk(fax);

const fernsprechen: SymbolSpec = {
  size: [45, 2],
  render: (svg) => svg.path("M0,1 h45"),
};
const fernsprechenFunk = mitFunk(fernsprechen);

const fernschreiben: SymbolSpec = {
  size: [45, 6],
  render: (svg) => svg.path("M0,1 h45 M0,5 h45"),
};
const fernschreibenFunk = mitFunk(fernschreiben);

const festbilduebertragung: SymbolSpec = {
  size: [40, 40],
  render: (svg) =>
    svg.path(
      "M0,8 h40 m-40,8 h40 m-40,8 h40 m-40,8 h40 M8,0 v40 m8,-40 v40 m8,-40 v40 m8,-40 v40"
    ),
};
const festbilduebertragungFunk = mitFunk(festbilduebertragung);

const relaisfunkbetrieb: SymbolSpec = {
  size: [45, 11.5],
  render: (svg) =>
    svg
      .g()
      .push(svg.path("M0,1 h45"))
      .push(
        svg
          .path(
            "M1,1.5 l10,10 10,-10 10,10 10,-10 10,10 10,-10 M-3,1.5 a7 7 0 0 1 0 11 M65,1.5 a7 7 0 0 0 0 11"
          )
          .attr("transform", "scale(0.65) translate(3.7 4)")
      ),
};

const richtbetrieb: SymbolSpec = {
  size: [22, 36],
  render: (svg) => svg.path("M0,1 h12 m-6,0 v20 l15,-10 v25"),
};

const kabelbau: SymbolSpec = {
  size: [22, 35],
  render: (svg) => svg.path("M1,0 a10 10 0 0 0 20 0 m-10,10 v25"),
};

const drohne: SymbolSpec = {
  size: [40, 13],
  render: (svg) =>
    svg
      .path("M0,0 l20,5 20,-5 v3 l-20,10 -20,-10 z")
      .attr("stroke", "none")
      .attr("fill", "currentColor"),
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
  { ...warnung, id: "warnung", label: "Warnung" },
  { ...zelt, id: "zelt", label: "Zelt" },
  { ...sichten, id: "sichten", label: "Sichten, ordnen, verteilen" },
  { ...sammeln, id: "sammeln", label: "Sammeln" },
  {
    ...sammelplatzBetroffene,
    id: "sammelplatz-betroffene",
    label: "Sammelplatz für Betroffene",
  },
  { ...veterinaerwesen, id: "veterinaerwesen", label: "Veterinärwesen" },
  { ...schlachten, id: "schlachten", label: "Schlachten" },
  { ...tierVerletzt, id: "tier-verletzt", label: "Tier verletzt" },
  { ...tierTot, id: "tier-tot", label: "Tier tot" },
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
  {
    ...personZuTransportieren,
    id: "person-zu-transportieren",
    label: "Person zu transportieren",
  },
  {
    ...personTransportiert,
    id: "person-transportiert",
    label: "Person transportiert",
  },
  { ...beschaedigt, id: "beschaedigt", label: "beschädigt" },
  { ...teilzerstoert, id: "teilzerstoert", label: "teilzerstört" },
  { ...zerstoert, id: "zerstoert", label: "zerstört" },
  { ...teilblockiert, id: "teilblockiert", label: "teilblockiert" },
  { ...blockiert, id: "blockiert", label: "blockiert" },
  { ...tendenzSteigend, id: "tendenz-steigend", label: "Tendenz steigend" },
  { ...tendenzFallend, id: "tendenz-fallend", label: "Tendenz fallend" },
  {
    ...tendenzUnveraendert,
    id: "tendenz-unveraendert",
    label: "Tendenz unverändert",
  },
  { ...ausfall25, id: "ausfall-25", label: "Ausfall 25%" },
  { ...ausfall50, id: "ausfall-50", label: "Ausfall 50%" },
  { ...ausfall75, id: "ausfall-75", label: "Ausfall 75%" },
  { ...ausfall100, id: "ausfall-100", label: "Totalausfall" },
  { ...abc, id: "abc", label: "Gefährliche Stoffen oder Güter, ABC" },
  { ...dekontamination, id: "dekontamination", label: "Dekontamination" },
  {
    ...dekontaminationPersonen,
    id: "dekontamination-personen",
    label: "Dekontamination (Personen)",
  },
  {
    ...dekontaminationGeraete,
    id: "dekontamination-geraete",
    label: "Dekontamination (Geräte)",
  },
  { ...wasser, id: "wasser", label: "Wasser" },
  { ...wasserfahrzeug, id: "wasserfahrzeug", label: "Wasserfahrzeug" },
  { ...pumpe, id: "pumpe", label: "Pumpe" },

  {
    ...bilduebertragung,
    id: "bilduebertragung",
    label: "Bildübertragung (Draht)",
  },
  {
    ...bilduebertragungFunk,
    id: "bilduebertragung-funk",
    label: "Bildübertragung (Funk)",
  },
  {
    ...datenuebertragung,
    id: "datenuebertragung",
    label: "Datenübertragung (Draht)",
  },
  {
    ...datenuebertragungFunk,
    id: "datenuebertragung-funk",
    label: "Datenübertragung (Funk)",
  },
  { ...fax, id: "fax", label: "Fax (Draht)" },
  { ...faxFunk, id: "fax-funk", label: "Fax (Funk)" },
  { ...fernsprechen, id: "fernsprechen", label: "Fernsprechen (Draht)" },
  {
    ...fernsprechenFunk,
    id: "fernsprechen-funk",
    label: "Fernsprechen (Funk)",
  },
  { ...fernschreiben, id: "fernschreiben", label: "Fernschreiben (Draht)" },
  {
    ...fernschreibenFunk,
    id: "fernschreiben-funk",
    label: "Fernschreiben (Funk)",
  },
  {
    ...festbilduebertragung,
    id: "festbilduebertragung",
    label: "Festbildübertragung (Draht)",
  },
  {
    ...festbilduebertragungFunk,
    id: "festbilduebertragung-funk",
    label: "Festbildübertragung (Funk)",
  },
  {
    ...relaisfunkbetrieb,
    id: "relaisfunkbetrieb",
    label: "Relaisfunkbetrieb",
  },
  { ...richtbetrieb, id: "richtbetrieb", label: "Richtbetrieb" },
  { ...kabelbau, id: "kabelbau", label: "Kabelbau" },
  { ...vermutung, id: "vermutung", label: "Vermutung" },
  { ...akut, id: "akut", label: "Akute Situation" },
  {
    ...technischeHilfeleistung,
    id: "technische-hilfeleistung",
    label: "Technische Hilfeleistung",
  },
  { ...bergung, id: "bergung", label: "Bergung" },
  { ...seelsorge, id: "seelsorge", label: "Seelsorge" },
  { ...drohne, id: "drohne", label: "Drohne" },
];
