import { Fragments } from "./fragments";
import { Organisationen } from "./organisationen";
import { SVGBuilder } from "./svg";
import { IconDescriptor, SVG } from "./types";

export class IconFactory {
  private fragments = new Fragments();
  private organisationen = new Organisationen();

  async createIcon(descriptor: IconDescriptor): Promise<SVG> {
    const svg = new SVGBuilder();
    const org = descriptor.organisation
      ? await this.organisationen.getOrganisation(descriptor.organisation)
      : undefined;

    const grundzeichen = await this.fragments.getFragment(
      descriptor.grundzeichen
    );
    const grundzeichenData = await this.fragments.getFragmentData(grundzeichen);
    svg.rootProp("viewBox", `0 0 ${grundzeichen.size.join(" ")}`);
    svg.rootProp("fill", "transparent");
    svg.rootProp("stroke", "#000000");
    svg.rootProp("stroke-width", "2");

    svg.push(
      org?.background
        ? grundzeichenData.replace("/>", ` fill="${org.background}" />`)
        : grundzeichenData
    );

    if (descriptor.fachaufgabe) {
      const fachaufgabe = await this.fragments.getFragment(
        descriptor.fachaufgabe
      );
      const fachaufgabeData = await this.fragments.getFragmentData(fachaufgabe);
      svg.push(fachaufgabeData);
    }

    return svg;
  }
}
