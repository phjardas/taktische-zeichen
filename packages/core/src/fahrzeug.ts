import { writeFileSync } from "node:fs";
import { GrundzeichenRenderProps, type Grundzeichen } from "./grundzeichen";
import { SVG, type Element } from "./svg";
import type { Point, Renderable } from "./types";
import { ImageImpl } from "./utils";

export type FahrzeugTyp =
  | "fahrzeug"
  | "anhaenger"
  | "wasserfahrzeug"
  | "luftfahrzeug";

export type FahrzeugAntrieb =
  | "strasse"
  | "gelaendefaehig"
  | "gelaendegaengig"
  | "ketten"
  | "amphibisch"
  | "schiene"
  | "pkw"
  | "lkw"
  | "drehfluegler"
  | "flaechenfluegler";

export type FahrzeugSchutz = "geschuetzt";

export type FahrzeugBeladung = "abrollbehaelter" | "wechselbehaelter";

export type FahrzeugSpec = {
  readonly typ: FahrzeugTyp;
  readonly antrieb?: FahrzeugAntrieb;
  readonly schutz?: FahrzeugSchutz;
  readonly beladung?: FahrzeugBeladung;
};

type FahrzeugTypRenderProps = {
  readonly fill?: string;
  readonly schutz?: FahrzeugSchutz;
  readonly beladung?: FahrzeugBeladung;
};

type FahrzeugTypSpec = Renderable<FahrzeugTypRenderProps> & {
  readonly antriebPosition?: {
    readonly center: Point;
    readonly width: number;
  };
  readonly supported: {
    readonly antriebe?: readonly FahrzeugAntrieb[];
    readonly schutz?: readonly FahrzeugSchutz[];
    readonly beladung?: readonly FahrzeugBeladung[];
  };
};

const typen: Record<FahrzeugTyp, FahrzeugTypSpec> = {
  fahrzeug: {
    render: (svg, props) => {
      if (props?.schutz && props.beladung) {
        throw new Error(
          "Ein Fahrzeug kann nicht gleichzeitig als geschützt und mit Beladung dargestellt werden."
        );
      }

      if (props?.beladung) {
        return svg
          .g()
          .push(svg.path("M1,0 v44 h74"))
          .push(
            renderBeladung(props.beladung, svg, {
              ...props,
              offset: [3, 0],
              size: [72, 42],
            })
          );
      }

      return applyProps(
        svg.path(
          props?.schutz === "geschuetzt"
            ? "M1,1 V43.5 Q37.5,34 74,43.5 V1 Z"
            : "M1,44 V1.5 Q37.5,10 74,1.5 V44 Z"
        ),
        props
      );
    },
    size: [75, 45],
    supported: {
      antriebe: [
        "strasse",
        "gelaendefaehig",
        "gelaendegaengig",
        "ketten",
        "amphibisch",
        "schiene",
      ],
      schutz: ["geschuetzt"],
      beladung: ["abrollbehaelter", "wechselbehaelter"],
    },
  },
  anhaenger: {
    render: (svg, props) => {
      if (props?.beladung) {
        return svg
          .g()
          .push(svg.path("M7,0 v44 H74M7,16 h-6 v3 h7"))
          .push(
            renderBeladung(props.beladung, svg, {
              ...props,
              offset: [9, 0],
              size: [65, 42],
            })
          );
      }

      return svg
        .g()
        .push(applyProps(svg.path("M7,44 V1.5 Q35,10 74,1.5 V44 Z"), props))
        .push(svg.path("M7,16 h-6 v3 h7"));
    },
    size: [75, 45],
    antriebPosition: { center: [40.5, 45], width: 69 },
    supported: {
      antriebe: ["strasse", "schiene", "pkw", "lkw"],
      beladung: ["abrollbehaelter", "wechselbehaelter"],
    },
  },
  wasserfahrzeug: {
    render: (svg, props) =>
      applyProps(svg.path("M1,1 a36.5 36.5 0 0 0 73 0 Z"), props),
    size: [75, 39],
    supported: {},
  },
  luftfahrzeug: {
    render: (svg, props) =>
      applyProps(svg.path("M1,38 a36.5 36.5 0 0 1 73 0 Z"), props),
    size: [75, 39],
    supported: {
      antriebe: ["drehfluegler", "flaechenfluegler"],
    },
  },
};

type FahrzeugAntriebRenderProps = {
  readonly typ: FahrzeugTypSpec;
};

type FahrzeugAntriebSpec = {
  readonly render: (svg: SVG, props: FahrzeugAntriebRenderProps) => Element;
  readonly adjustSize: (size: Point) => Point;
};

const antriebe: Record<FahrzeugAntrieb, FahrzeugAntriebSpec> = {
  strasse: {
    render: (svg, { typ }) => {
      const { center, width } = getAntriebPosition(typ);
      const left = center[0] - width / 2 + 10;
      const right = center[0] + width / 2 - 10;

      return svg
        .g()
        .push(svg.circle([left, center[1] + 4], 5))
        .push(svg.circle([right, center[1] + 4], 5));
    },
    adjustSize: ([width, height]) => [width, height + 10],
  },
  gelaendefaehig: {
    render: (svg, { typ }) => {
      const { center, width } = getAntriebPosition(typ);
      const left = center[0] - width / 2 + 10;
      const right = center[0] + width / 2 - 10;

      return svg
        .g()
        .push(svg.circle([left, center[1] + 4], 5))
        .push(svg.circle([center[0], center[1] + 4], 5))
        .push(svg.circle([right, center[1] + 4], 5));
    },
    adjustSize: ([width, height]) => [width, height + 10],
  },
  gelaendegaengig: {
    render: (svg, { typ }) => {
      const { center, width } = getAntriebPosition(typ);
      const left = center[0] - width / 2 + 10;
      const right = center[0] + width / 2 - 10;

      return svg
        .g()
        .push(svg.circle([left, center[1] + 4], 5))
        .push(svg.circle([center[0], center[1] + 4], 5))
        .push(svg.circle([right, center[1] + 4], 5))
        .push(
          svg.line([left + 5, center[1] + 4], [center[0] - 5, center[1] + 4])
        )
        .push(
          svg.line([center[0] + 5, center[1] + 4], [right - 5, center[1] + 4])
        );
    },
    adjustSize: ([width, height]) => [width, height + 10],
  },
  amphibisch: {
    render: (svg, { typ }) => {
      const { center, width } = getAntriebPosition(typ);
      const left = center[0] - width / 2 + 10;
      const right = center[0] + width / 2 - 10;
      const wiggleWidth = width - 44;

      return svg
        .g()
        .push(svg.circle([left, center[1] + 4], 5))
        .push(svg.circle([right, center[1] + 4], 5))
        .push(
          svg.path(
            `M${left + 12},${center[1] + 5} a7 7 0 0 1 ${wiggleWidth / 3} 0 a7 7 0 0 0 ${wiggleWidth / 3} 0 a7 7 0 0 1 ${wiggleWidth / 3} 0`
          )
        );
    },
    adjustSize: ([width, height]) => [width, height + 10],
  },
  schiene: {
    render: (svg, { typ }) => {
      const { center, width } = getAntriebPosition(typ);
      const left = center[0] - width / 2 + 10;
      const right = center[0] + width / 2 - 10;

      return svg
        .g()
        .push(svg.circle([left, center[1] + 4], 5))
        .push(svg.circle([left + 10, center[1] + 4], 5))
        .push(svg.circle([right - 10, center[1] + 4], 5))
        .push(svg.circle([right, center[1] + 4], 5));
    },
    adjustSize: ([width, height]) => [width, height + 10],
  },
  pkw: {
    render: (svg, { typ }) => {
      const { center } = getAntriebPosition(typ);
      return svg.g().push(svg.circle([center[0], center[1] + 4], 5));
    },
    adjustSize: ([width, height]) => [width, height + 10],
  },
  lkw: {
    render: (svg, { typ }) => {
      const { center } = getAntriebPosition(typ);
      return svg
        .g()
        .push(svg.circle([center[0] - 5, center[1] + 4], 5))
        .push(svg.circle([center[0] + 5, center[1] + 4], 5));
    },
    adjustSize: ([width, height]) => [width, height + 10],
  },
  ketten: {
    render: (svg, { typ }) => {
      const { center, width } = getAntriebPosition(typ);

      return svg.path(
        `M${center[0] - width / 2 + 8} ${center[1]} a4.5 4.5 0 0 0 0 9 h${width - 16} a4.5 4.5 0 0 0 0 -9 Z`
      );
    },
    adjustSize: ([width, height]) => [width, height + 10],
  },
  drehfluegler: {
    render: (svg, { typ }) => {
      const { center, width } = getAntriebPosition(typ);
      const rotorLength = width / 2;

      return svg
        .path(
          `M${center[0] - rotorLength / 2} ${center[1] + 1} l${rotorLength} 8 v-8 l-${rotorLength} 8 z`
        )
        .attr("fill", "currentColor")
        .attr("stroke-width", 0);
    },
    adjustSize: ([width, height]) => [width, height + 9],
  },
  flaechenfluegler: {
    render: (svg, { typ }) => {
      const { center, width } = getAntriebPosition(typ);
      const rotorLength = width / 2;

      return svg
        .path(
          `M${center[0] - rotorLength / 2} ${center[1] + 1} l${rotorLength} 8 a3 3 180 0 0 0 -8 l-${rotorLength} 8 a3 3 180 0 1 0 -8 z`
        )
        .attr("fill", "currentColor")
        .attr("stroke-width", 0);
    },
    adjustSize: ([width, height]) => [width, height + 9],
  },
};

type FahrzeugBeladungRenderProps = {
  readonly offset: Point;
  readonly size: Point;
  readonly fill?: string;
};

type FahrzeugBeladungSpec = {
  readonly render: (svg: SVG, props: FahrzeugBeladungRenderProps) => Element;
};

const beladungen: Record<FahrzeugBeladung, FahrzeugBeladungSpec> = {
  abrollbehaelter: {
    render: (svg, { offset, size, ...props }) =>
      svg
        .g()
        .push(
          applyProps(
            svg.path(
              `M${offset[0] + 7} ${offset[1] + 1} h${size[0] - 8} v${size[1] - 2} h-${size[0] - 8} z`
            ),
            props
          )
        )
        .push(svg.circle([offset[0] + 4, offset[1] + 10], 3)),
  },
  wechselbehaelter: {
    render: (svg, { offset, size, ...props }) =>
      svg
        .g()
        .push(
          applyProps(
            svg.path(
              `M${offset[0] + 1} ${offset[1] + 5} h${size[0] - 2} v${size[1] - 6} h-${size[0] - 2}z`
            ),
            props
          )
        )
        .push(
          svg.path(
            `M${offset[0] + 1} ${offset[1] + 5} a4 4 180 0 1 8 0 M${offset[0] + size[0] - 1} ${offset[1] + 5} a4 4 180 0 0 -8 0`
          )
        ),
  },
};

function renderBeladung(
  beladung: FahrzeugBeladung,
  svg: SVG,
  props: FahrzeugBeladungRenderProps
): Element {
  const spec = beladungen[beladung];
  if (!spec) throw new Error(`Unbekannter Beladungs-Typ: ${beladung}`);
  return spec.render(svg, props);
}

function getAntriebPosition(typ: FahrzeugTypSpec): {
  center: Point;
  width: number;
} {
  return {
    center: typ.antriebPosition?.center ?? [typ.size[0] / 2, typ.size[1]],
    width: typ.antriebPosition?.width ?? typ.size[0],
  };
}

function erstelleFahrzeugGrundzeichen(
  spec: FahrzeugSpec
): Omit<Grundzeichen, "id" | "label"> {
  const typ = typen[spec.typ];
  if (!typ) throw new Error(`Unbekannter Fahrzeugtyp: ${spec.typ}`);

  if (spec.antrieb && !typ.supported.antriebe?.includes(spec.antrieb)) {
    throw new Error(
      `Fahrzeugtyp ${spec.typ} unterstützt Antrieb ${spec.antrieb} nicht`
    );
  }

  const antrieb = spec.antrieb ? antriebe[spec.antrieb] : undefined;

  return {
    render: (svg, props) => {
      const g = svg.g();
      let size = typ.size;
      g.push(
        typ.render(svg, {
          schutz: spec.schutz,
          beladung: spec.beladung,
          ...props,
        })
      );

      if (antrieb) {
        g.push(antrieb.render(svg, { typ }));
        size = antrieb.adjustSize(size);
      }

      return g;
    },
    get size() {
      return antrieb ? antrieb.adjustSize(typ.size) : typ.size;
    },
  };
}

function applyProps(element: Element, props?: FahrzeugTypRenderProps) {
  return element.attr("fill", props?.fill);
}

// FIXME: test

type TestSpec = {
  readonly id: string;
  readonly spec: FahrzeugSpec;
  readonly props?: GrundzeichenRenderProps;
};

const specs: readonly TestSpec[] = Object.entries(typen).flatMap(
  ([typ, typSpec]) =>
    [undefined, ...(typSpec.supported.antriebe ?? [])].flatMap((antrieb) =>
      [undefined, ...(typSpec.supported.schutz ?? [])].flatMap((schutz) =>
        (schutz
          ? [undefined]
          : [undefined, ...(typSpec.supported.beladung ?? [])]
        ).map((beladung) => ({
          id: [typ, antrieb, schutz, beladung].filter(Boolean).join("-"),
          spec: {
            typ: typ as FahrzeugTyp,
            antrieb,
            schutz,
            beladung,
          },
          props: {
            fill: "#fa321e",
          },
        }))
      )
    )
);

const files = [];

for (const spec of specs) {
  const grundzeichen = erstelleFahrzeugGrundzeichen(spec.spec);

  const svg = new SVG({ skipFontRegistration: true })
    .attr("color", "black")
    .attr("fill", "transparent")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("viewBox", `0 0 ${grundzeichen.size[0]} ${grundzeichen.size[1]}`)
    .attr("style", "background:white");

  svg.push(grundzeichen.render(svg, spec.props));

  const img = new ImageImpl(svg, grundzeichen.size);

  const filename = `${spec.id}.svg`;
  console.log(
    "%s: %d/%d",
    filename,
    grundzeichen.size[0],
    grundzeichen.size[1]
  );
  writeFileSync(`out/${filename}`, img.toString());
  files.push(filename);
}

const html = `<!DOCTYPE html>
<style>:root { font-family: sans-serif; }</style>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:20px;">
${files
  .sort()
  .map(
    (filename) =>
      `<div style="display:flex;flex-direction:column;gap:10px;align-items:center;text-align:center"><img src="${filename}"/><span>${filename.replace(".svg", "")}</span></div>`
  )
  .join("\n")}
</div>`;
writeFileSync("out/index.html", html);
