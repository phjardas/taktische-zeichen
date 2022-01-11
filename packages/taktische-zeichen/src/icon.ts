import { Fragment, fragments } from "./fragments";
import { Organisation, organisationen } from "./organisationen";
import { SVGBuilder } from "./svg";
import { IconDescriptor, SVG } from "./types";

function getOrganisation(id: string): Organisation {
  const org = organisationen.find((o) => o.id === id);
  if (!org) throw new Error(`Organisation not found: ${id}`);
  return org;
}

function getFragment(id: string): Fragment {
  const f = fragments.find((f) => f.id === id);
  if (!f) throw new Error(`Fragment not found: ${id}`);
  return f;
}

export function createIcon(descriptor: IconDescriptor): SVG {
  const svg = new SVGBuilder();
  const org = descriptor.organisation
    ? getOrganisation(descriptor.organisation)
    : undefined;

  const grundzeichen = getFragment(descriptor.grundzeichen);
  svg.rootProp("viewBox", `0 0 ${grundzeichen.size.join(" ")}`);
  svg.rootProp("fill", "transparent");
  svg.rootProp("stroke", "#000000");
  svg.rootProp("stroke-width", "2");

  svg.push(
    org?.background
      ? grundzeichen.content.replace("/>", ` fill="${org.background}" />`)
      : grundzeichen.content
  );

  svg.push(
    `<mask id="grundzeichen">${grundzeichen.content.replace(
      "/>",
      ` fill="white" />`
    )}</mask>`
  );

  if (descriptor.fachaufgabe) {
    const fachaufgabe = getFragment(descriptor.fachaufgabe);
    svg.push(`<g mask="url(#grundzeichen)">${fachaufgabe.content}</g>`);
  }

  return svg;
}
