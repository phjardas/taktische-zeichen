import { promises as fs } from "fs";
import * as formatXml from "prettify-xml";
import * as icons from "./icons";
import { SVGElementFactory } from "./svg";

describe("icons", () => {
  Object.entries(icons).forEach(([name, { size, render }]) => {
    it(name, async () => {
      const factory = new SVGElementFactory();
      const svg = factory
        .svg()
        .attr("fill", "transparent")
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .attr("viewBox", `0 0 ${size.join(" ")}`)
        .push(
          factory
            .rect([0, 0], size)
            .attr("stroke", "none")
            .attr("fill", "white")
        )
        .push(render(factory))
        .render();

      await fs.mkdir("test-icons", { recursive: true });
      await fs.writeFile(`test-icons/icon-${name}.svg`, formatXml(svg), "utf8");
    });
  });
});
