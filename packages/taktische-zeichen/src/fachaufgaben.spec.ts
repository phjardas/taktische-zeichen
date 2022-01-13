import { promises as fs } from "fs";
import * as formatXml from "prettify-xml";
import { fachaufgaben } from "./fachaufgaben";
import { SVGElementFactory } from "./svg";

describe("fachaufgaben", () => {
  fachaufgaben.forEach(({ id, size, render }) => {
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

      await fs.mkdir("test-icons", { recursive: true });
      await fs.writeFile(
        `test-icons/fachaufgabe-${id}.svg`,
        formatXml(svg),
        "utf8"
      );
    });
  });
});
