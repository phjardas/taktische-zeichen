import { SVG, Element } from "./svg";
import type { Image, Padding, Point, Rect, Renderable } from "./types";

export type Parent = {
  size: Point;
  paintableArea?: Rect;
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

export type Alignment = "center" | "start" | "end";

export type PlacedComponent = {
  element: Element;
  offset: Point;
  scale: number;
};

export function placeComponent({
  parent,
  component,
  padding = [0, 0],
  align,
  svg,
}: {
  parent: Parent;
  component: Component;
  padding?: Padding;
  align?: [Alignment, Alignment];
  svg: SVG;
}): PlacedComponent {
  const { offset, scale } = calculateComponentPosition({
    parent,
    component,
    padding,
    align,
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

  return {
    element: wrapper,
    offset,
    scale,
  };
}

// exported for tests
export function calculateComponentPosition({
  parent,
  component: {
    size: [iconWidth, iconHeight],
    cover = false,
  },
  padding = [0, 0, 0, 0],
  align = ["center", "center"],
}: {
  parent: Parent;
  component: Pick<Component, "size" | "cover">;
  padding?: Padding;
  align?: [Alignment, Alignment];
}): { offset: Point; scale: number } {
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
    paintableArea[0][0] +
    paddingLeft +
    applyAlign({
      size: actualIconWidth,
      total: paintableWidth,
      align: align[0],
    });
  const offsetY =
    paintableArea[0][1] +
    paddingTop +
    applyAlign({
      size: actualIconHeight,
      total: paintableHeight,
      align: align[1],
    });

  return { offset: [offsetX, offsetY], scale };
}

function applyAlign({
  size,
  total,
  align,
}: {
  size: number;
  total: number;
  align: Alignment;
}): number {
  switch (align) {
    case "start":
      return 0;
    case "end":
      return total - size;
    case "center":
      return (total - size) / 2;
  }
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

export function addPoints(...points: Array<Point>): Point {
  return [
    points.reduce((a, b) => a + b[0], 0),
    points.reduce((a, b) => a + b[1], 0),
  ];
}

export function subtractPoints(a: Point, b: Point): Point {
  return [a[0] - b[0], a[1] - b[1]];
}

export function scalePoint(a: Point, scale: number): Point {
  return [a[0] * scale, a[1] * scale];
}

export function transformRect(
  rect: Rect,
  { offset, scale }: { offset: Point; scale: number }
): Rect {
  const originalOffset: Point = rect[0];
  const size: Point = [rect[1][0] - rect[0][0], rect[1][1] - rect[0][1]];
  const scaledSize = scalePoint(size, scale);

  return [
    addPoints(originalOffset, offset),
    addPoints(originalOffset, offset, scaledSize),
  ];
}
