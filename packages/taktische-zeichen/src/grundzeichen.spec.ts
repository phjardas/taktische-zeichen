import { promises as fs } from "fs";
import * as formatXml from "prettify-xml";
import { grundzeichen } from "./grundzeichen";
import { SVGElementFactory } from "./svg";
import { subtractPoints } from "./utils";

describe("grundzeichen", () => {
  grundzeichen.forEach(({ id, size, clipPath, paintableArea, render }) => {
    it(id, async () => {
      const factory = new SVGElementFactory();
      const svg = factory
        .svg()
        .attr("fill", "transparent")
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .attr("viewBox", `0 0 ${size.join(" ")}`);

      // view box
      svg.push(
        factory.rect([0, 0], size).attr("stroke", "none").attr("fill", "white")
      );

      // actual item
      if (render) svg.push(render({ fill: "#cc0000" }, factory));

      // paintable area
      if (paintableArea) {
        svg.push(
          factory
            .rect(
              paintableArea[0],
              subtractPoints(paintableArea[1], paintableArea[0])
            )
            .attr("stroke", "none")
            .attr("fill", "rgba(0, 255, 0, .25)")
        );
      }

      // clip path
      if (clipPath) {
        svg.push(
          clipPath(factory)
            .attr("stroke", "rgba(0, 0, 255, .25)")
            .attr("stroke-width", 1)
        );
      }

      await fs.mkdir("test-icons", { recursive: true });
      await fs.writeFile(
        `test-icons/grundzeichen-${id}.svg`,
        formatXml(svg.render()),
        "utf8"
      );
    });
  });
});
