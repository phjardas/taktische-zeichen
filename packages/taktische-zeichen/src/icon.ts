import { fachaufgaben, type FachaufgabeId } from "./fachaufgaben";
import { grundzeichen, type GrundzeichenId } from "./grundzeichen";
import { organisationen, type OrganisationId } from "./organisationen";
import { SVGElementFactory } from "./svg";

export type IconDescriptor = {
  grundzeichen: GrundzeichenId;
  organisation?: OrganisationId;
  fachaufgabe?: FachaufgabeId;
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

  const factory = new SVGElementFactory();
  const svg = factory
    .svg()
    .attr("fill", "transparent")
    .attr("stroke", "#000000")
    .attr("stroke-width", 2)
    .attr("viewBox", `0 0 ${grund.size.join(" ")}`);

  const defs = factory.defs();
  svg.push(defs);

  svg.push(grund.render({ fill: org?.background }, factory));

  if (fachaufgabe) {
    const paintableArea = grund.paintableArea ?? [[0, 0], grund.size];
    const paintableWidth = paintableArea[1][0] - paintableArea[0][0];
    const paintableHeight = paintableArea[1][1] - paintableArea[0][1];
    const iconWidth = fachaufgabe.size[0];
    const iconHeight = fachaufgabe.size[1];
    const scale = Math.min(
      paintableWidth / iconWidth,
      paintableHeight / iconHeight
    );
    const actualIconWidth = iconWidth * scale;
    const actualIconHeight = iconHeight * scale;
    const offsetX =
      paintableArea[0][0] + (paintableWidth - actualIconWidth) / 2;
    const offsetY =
      paintableArea[0][1] + (paintableHeight - actualIconHeight) / 2;

    defs.push(
      factory.mask("gz-mask").push(grund.render({ fill: "white" }, factory))
    );
    defs.push(fachaufgabe.render(factory).attr("id", "fachaufgabe"));

    const icon = factory
      .use("#fachaufgabe")
      .attr("x", offsetX)
      .attr("y", offsetY);

    if (scale !== 1) icon.attr("transform", `scale(${scale})`);

    svg.push(factory.g().attr("mask", "url(#gz-mask)").push(icon));
  }

  return { svg: svg.render() };
}
