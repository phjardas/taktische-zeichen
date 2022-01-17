import { createFontStyle } from "./font";
import type { Point } from "./types";

export abstract class Element {
  readonly attributes: Record<string, string> = {};
  readonly styles: Record<string, string> = {};

  constructor(readonly name: string) {}

  attr(key: string, value: string | number | undefined): this {
    if (value !== undefined) this.attributes[key] = value.toString();
    return this;
  }

  style(key: string, value: string | number | undefined): this {
    if (value !== undefined) this.styles[key] = value.toString();
    return this;
  }

  abstract render(): string;

  protected renderTag(autoClose: boolean): string {
    let tag = `<${this.name}`;
    const attributes = this.renderAttributes();
    if (attributes) tag += ` ${attributes}`;

    if (autoClose) tag += " /";
    tag += ">";
    return tag;
  }

  private renderAttributes() {
    const attrs = this.attributes;

    const style = Object.entries(this.styles)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([key, value]) => `${key}:"${value}"`)
      .join(";");
    if (style) attrs.style = style;

    return Object.entries(attrs)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ");
  }
}

export class Leaf extends Element {
  constructor(name: string) {
    super(name);
  }

  render() {
    return this.renderTag(true);
  }
}

export class Container extends Element {
  readonly children: Array<Element> = [];

  constructor(name: string) {
    super(name);
  }

  push(child: Element): this {
    this.children.push(child);
    return this;
  }

  render() {
    if (!this.children.length) return this.renderTag(true);

    return (
      this.renderTag(false) +
      this.children.map((c) => c.render()).join("") +
      `</${this.name}>`
    );
  }
}

export class TextNode extends Element {
  constructor(name: string, readonly text: string) {
    super(name);
  }

  render() {
    return (
      this.renderTag(false) + "<![CDATA[" + this.text + `]]></${this.name}>`
    );
  }
}

export class SVG extends Container {
  private isTextRegistered = false;
  private defs = new Container("defs");

  constructor() {
    super("svg");
    this.attr("xmlns", "http://www.w3.org/2000/svg");
    this.push(this.defs);
  }

  def(element: Element) {
    this.defs.push(element);
    return this;
  }

  registerText() {
    if (!this.isTextRegistered) {
      this.def(createFontStyle(this));
      this.isTextRegistered = true;
    }

    return this;
  }

  g() {
    return new Container("g");
  }

  path(d: string) {
    return new Leaf("path").attr("d", d);
  }

  circle(center: Point, radius: number | string) {
    return new Leaf("circle")
      .attr("cx", center[0])
      .attr("cy", center[1])
      .attr("r", radius);
  }

  rect(pos: Point, size: Point) {
    return new Leaf("rect")
      .attr("x", pos[0])
      .attr("y", pos[1])
      .attr("width", size[0])
      .attr("height", size[1]);
  }

  mask(id: string) {
    return new Container("mask").attr("id", id);
  }

  clipPath(id: string) {
    return new Container("clipPath").attr("id", id);
  }

  use(href: string) {
    return new Leaf("use").attr("href", href);
  }

  textNode(name: string, content: string) {
    return new TextNode(name, content);
  }

  render() {
    return '<?xml version="1.0" encoding="UTF-8"?>\n' + super.render();
  }
}
