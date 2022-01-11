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

  svg.push(grund.render({ fill: org?.background }, factory));
  svg.push(
    factory.mask("grundzeichen").push(grund.render({ fill: "white" }, factory))
  );

  if (fachaufgabe) {
    svg.push(fachaufgabe.render(factory).attr("mask", "url(#grundzeichen)"));
  }

  return { svg: svg.render() };
}
