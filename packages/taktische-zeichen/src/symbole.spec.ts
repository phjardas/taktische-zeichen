import { promises as fs } from "fs";
import * as formatXml from "prettify-xml";
import { SVGElementFactory } from "./svg";
import { symbole } from "./symbole";

describe("symbole", () => {
  symbole.forEach(({ id, size, render }) => {
    it(id, async () => {
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

      await fs.mkdir("test-symbole", { recursive: true });
      await fs.writeFile(
        `test-symbole/symbol-${id}.svg`,
        formatXml(svg),
        "utf8"
      );
    });
  });
});
