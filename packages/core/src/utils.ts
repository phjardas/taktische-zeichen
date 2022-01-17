import { SVG } from "./svg";
import type { Image, Padding, Point, Renderable } from "./types";

export type Parent = {
  size: Point;
  paintableArea?: [Point, Point];
};

export type Component = Renderable<any> & {
  size: Point;
  cover?: boolean;
};

export function render(renderable: Renderable): Image {
  const svg = new SVG()
    .attr("fill", "transparent")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("viewBox", `0 0 ${renderable.size[0]} ${renderable.size[1]}`);
  svg.push(renderable.render(svg));

  return new ImageImpl(svg, renderable.size);
}

export class ImageImpl implements Image {
  constructor(public readonly svg: SVG, public readonly size: Point) {}

  get dataUrl() {
    const data =
      typeof window !== "undefined"
        ? btoa(this.toString())
        : Buffer.from(this.toString()).toString("base64");
    return `data:image/svg+xml;base64,${data}`;
  }

  toString() {
    return this.svg.render();
  }
}

export function placeComponent({
  parent,
  component,
  padding = [0, 0],
  svg,
}: {
  parent: Parent;
  component: Component;
  padding?: Padding;
  svg: SVG;
}) {
  const { offset, scale } = calculateComponentPosition({
    parent,
    component,
    padding,
  });

  const transformations: Array<string> = [];
  if (offset[0] !== 0 || offset[1] !== 0) {
    transformations.push(`translate(${offset[0]},${offset[1]})`);
  }
  if (scale !== 1) transformations.push(`scale(${scale})`);

  const wrapper = svg.g().push(component.render(svg));

  if (transformations.length) {
    wrapper.attr("transform", transformations.join(" "));
  }

  return wrapper;
}

// exported for tests
export function calculateComponentPosition({
  parent,
  component: {
    size: [iconWidth, iconHeight],
    cover = false,
  },
  padding = [0, 0, 0, 0],
}: {
  parent: Parent;
  component: Pick<Component, "size" | "cover">;
  padding?: Padding;
}) {
  const [paddingTop, paddingRight, paddingBottom, paddingLeft] =
    resolvePadding(padding);
  const paintableArea = parent.paintableArea ?? [[0, 0], parent.size];
  const paintableWidth =
    paintableArea[1][0] - paintableArea[0][0] - paddingLeft - paddingRight;
  const paintableHeight =
    paintableArea[1][1] - paintableArea[0][1] - paddingTop - paddingBottom;
  const scale = cover
    ? Math.max(paintableWidth / iconWidth, paintableHeight / iconHeight)
    : Math.min(paintableWidth / iconWidth, paintableHeight / iconHeight);
  const actualIconWidth = iconWidth * scale;
  const actualIconHeight = iconHeight * scale;
  const offsetX =
    paintableArea[0][0] + paddingLeft + (paintableWidth - actualIconWidth) / 2;
  const offsetY =
    paintableArea[0][1] + paddingTop + (paintableHeight - actualIconHeight) / 2;

  return { offset: [offsetX, offsetY], scale };
}

// exported for tests
export function resolvePadding(
  padding: Padding
): [number, number, number, number] {
  if (padding.length === 4) return padding;
  if (padding.length === 3)
    return [padding[0], padding[1], padding[2], padding[1]];
  return [padding[0], padding[1], padding[0], padding[1]];
}

export function addPoints(a: Point, b: Point): Point {
  return [a[0] + b[0], a[1] + b[1]];
}

export function subtractPoints(a: Point, b: Point): Point {
  return [a[0] - b[0], a[1] - b[1]];
}
