import { Element, SVGElementFactory } from "./svg";
import { Point } from "./types";

export type Parent = {
  size: Point;
  paintableArea?: [Point, Point];
};

export type Component = {
  size: Point;
  padding?: Point;
  render: (factory: SVGElementFactory) => Element;
};

export function placeComponent({
  parent,
  component,
  factory,
}: {
  parent: Parent;
  component: Component;
  factory: SVGElementFactory;
}) {
  const icon = component.render(factory);
  const { offset, scale } = calculateComponentPosition({ parent, component });

  const transformations: Array<string> = [];
  if (offset[0] !== 0 || offset[1] !== 0) {
    transformations.push(`translate(${offset[0]},${offset[1]})`);
  }
  if (scale !== 1) transformations.push(`scale(${scale})`);

  if (transformations.length) {
    icon.attr("transform", transformations.join(" "));
  }

  return factory.g().push(icon);
}

export function calculateComponentPosition({
  parent,
  component: {
    size: [iconWidth, iconHeight],
    padding = [0, 0],
  },
}: {
  parent: Parent;
  component: Pick<Component, "size" | "padding">;
}) {
  const paintableArea = parent.paintableArea ?? [[0, 0], parent.size];
  const paintableWidth =
    paintableArea[1][0] - paintableArea[0][0] - padding[0] * 2;
  const paintableHeight =
    paintableArea[1][1] - paintableArea[0][1] - padding[1] * 2;
  const scale = Math.min(
    paintableWidth / iconWidth,
    paintableHeight / iconHeight
  );
  const actualIconWidth = iconWidth * scale;
  const actualIconHeight = iconHeight * scale;
  const offsetX =
    paintableArea[0][0] + (paintableWidth - actualIconWidth) / 2 + padding[0];
  const offsetY =
    paintableArea[0][1] + (paintableHeight - actualIconHeight) / 2 + padding[1];

  return { offset: [offsetX, offsetY], scale };
}

export function addPoints(a: Point, b: Point): Point {
  return [a[0] + b[0], a[1] + b[1]];
}

export function subtractPoints(a: Point, b: Point): Point {
  return [a[0] - b[0], a[1] - b[1]];
}
