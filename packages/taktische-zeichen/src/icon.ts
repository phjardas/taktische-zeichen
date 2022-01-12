import { einheiten, type EinheitId } from "./einheiten";
import {
  fachaufgaben,
  type Fachaufgabe,
  type FachaufgabeId,
} from "./fachaufgaben";
import {
  grundzeichen,
  type Grundzeichen,
  type GrundzeichenId,
} from "./grundzeichen";
import { funktionen, type FunktionId } from "./funktionen";
import { organisationen, type OrganisationId } from "./organisationen";
import { Container, SVGElementFactory } from "./svg";
import { Point } from "./types";

export type IconDescriptor = {
  grundzeichen: GrundzeichenId;
  organisation?: OrganisationId;
  fachaufgabe?: FachaufgabeId;
  einheit?: EinheitId;
  funktion?: FunktionId;
};

export type Icon = {
  svg: string;
};

function get<T extends { id: string }>(id: string, items: Array<T>): T {
  const item = items.find((i) => i.id === id);
  if (!item) throw new Error(`Item not found: ${id}`);
  return item;
}

export function createIcon(descriptor: IconDescriptor): Icon {
  const grund = get(descriptor.grundzeichen, grundzeichen);
  const org = descriptor.organisation
    ? get(descriptor.organisation, organisationen)
    : undefined;
  const fachaufgabe = descriptor.fachaufgabe
    ? get(descriptor.fachaufgabe, fachaufgaben)
    : undefined;
  const einheit = descriptor.einheit
    ? get(descriptor.einheit, einheiten)
    : undefined;
  const funktion = descriptor.funktion
    ? get(descriptor.funktion, funktionen)
    : undefined;

  let viewBox: [Point, Point] = [[0, 0], grund.size];

  const factory = new SVGElementFactory();
  const svg = factory
    .svg()
    .attr("fill", "transparent")
    .attr("stroke", "black")
    .attr("stroke-width", 2);

  const defs = factory.defs();
  svg.push(defs);

  svg.push(grund.render({ fill: org?.background }, factory));
  defs.push(
    factory.clipPath("gz-mask").push(grund.render({ fill: "white" }, factory))
  );

  if (fachaufgabe) {
    addFachaufgabe({ grundzeichen: grund, fachaufgabe, svg, factory });
  }

  if (einheit) {
    viewBox[0] = [viewBox[0][0], viewBox[0][1] - einheit.size[1]];
    viewBox[1] = [viewBox[1][0], viewBox[1][1] + einheit.size[1]];
    const offset = (grund.size[0] - einheit.size[0]) / 2;
    svg.push(
      einheit
        .render(factory)
        .attr("transform", `translate(${offset},${-einheit.size[1]})`)
    );
  }

  if (funktion) {
    const offset = (grund.size[0] - funktion.size[0]) / 2;
    svg.push(
      factory
        .g()
        .attr("clip-path", "url(#gz-mask)")
        .push(
          funktion.render(factory).attr("transform", `translate(${offset},0)`)
        )
    );
  }

  svg.attr("viewBox", viewBox.flatMap((p) => p).join(" "));

  return { svg: svg.render() };
}

function addFachaufgabe({
  grundzeichen,
  fachaufgabe,
  svg,
  factory,
}: {
  grundzeichen: Grundzeichen;
  fachaufgabe: Fachaufgabe;
  svg: Container;
  factory: SVGElementFactory;
}) {
  const { scale, offset } = placeIcon({
    paintableArea: grundzeichen.paintableArea ?? [[0, 0], grundzeichen.size],
    icon: fachaufgabe,
  });

  const icon = fachaufgabe.render(factory).attr("id", "fachaufgabe");

  const transformations: Array<string> = [];
  if (offset[0] !== 0 || offset[1] !== 0) {
    transformations.push(`translate(${offset[0]},${offset[1]})`);
  }
  if (scale !== 1) transformations.push(`scale(${scale})`);

  if (transformations.length) {
    icon.attr("transform", transformations.join(" "));
  }

  svg.push(factory.g().attr("clip-path", "url(#gz-mask)").push(icon));
}

function placeIcon({
  paintableArea,
  icon,
}: {
  paintableArea: [Point, Point];
  icon: { size: Point; padding?: Point };
}) {
  const padding = icon.padding ?? [0, 0];
  const paintableWidth =
    paintableArea[1][0] - paintableArea[0][0] - padding[0] * 2;
  const paintableHeight =
    paintableArea[1][1] - paintableArea[0][1] - padding[1] * 2;
  const iconWidth = icon.size[0];
  const iconHeight = icon.size[1];
  const scale = Math.min(
    paintableWidth / iconWidth,
    paintableHeight / iconHeight
  );
  const actualIconWidth = iconWidth * scale;
  const actualIconHeight = iconHeight * scale;
  const offsetX =
    paintableArea[0][0] + (paintableWidth - actualIconWidth) / 2 + padding[0];
  const offsetY =
    paintableArea[0][1] + (paintableHeight - actualIconHeight) / 2 + padding[1];

  return { offset: [offsetX, offsetY], scale };
}
