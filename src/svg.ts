import { SVG } from "./types";

export class SVGBuilder implements SVG {
  private rootProps: Record<string, string> = {};
  private lines: Array<string> = [];

  rootProp(key: string, value: string): typeof this {
    this.rootProps[key] = value;
    return this;
  }

  push(line: string): typeof this {
    this.lines.push(line);
    return this;
  }

  private get openTag() {
    return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg"${Object.entries(
      this.rootProps
    )
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([key, value]) => ` ${key}="${value}"`)
      .join("")}>`;
  }

  toString(pretty = false): string {
    const lines = pretty ? this.lines.map((l) => `  ${l}`) : this.lines;
    return [this.openTag, ...lines, "</svg>"].join(pretty ? "\n" : "");
  }
}
