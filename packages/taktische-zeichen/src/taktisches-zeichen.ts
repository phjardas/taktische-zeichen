import { einheiten } from "./einheiten";
import { fachaufgaben } from "./fachaufgaben";
import { funktionen } from "./funktionen";
import { grundzeichen } from "./grundzeichen";
import { organisationen } from "./organisationen";
import { SVGElementFactory } from "./svg";
import { type Image, type Point, type TaktischesZeichen } from "./types";
import { addPoints, placeComponent, subtractPoints } from "./utils";

function get<T extends { id: string }>(id: string, items: Array<T>): T {
  const item = items.find((i) => i.id === id);
  if (!item) throw new Error(`Item not found: ${id}`);
  return item;
}

export function erzeugeTaktischesZeichen(spec: TaktischesZeichen): Image {
  const grund = get(spec.grundzeichen, grundzeichen);
  const org = spec.organisation
    ? get(spec.organisation, organisationen)
    : undefined;
  const fachaufgabe = spec.fachaufgabe
    ? get(spec.fachaufgabe, fachaufgaben)
    : undefined;
  const einheit = spec.einheit ? get(spec.einheit, einheiten) : undefined;
  const funktion = spec.funktion ? get(spec.funktion, funktionen) : undefined;

  let viewBox: [Point, Point] = [[0, 0], grund.size];

  const factory = new SVGElementFactory();
  const svg = factory
    .svg()
    .attr("fill", "transparent")
    .attr("stroke", "black")
    .attr("stroke-width", 2);

  const defs = factory.defs();
  svg.push(defs);

  svg.push(grund.render({ fill: org?.background }, factory));
  if (grund.clipPath) {
    defs.push(factory.clipPath("gz-mask").push(grund.clipPath(factory)));
  }

  if (fachaufgabe) {
    const icon = placeComponent({
      parent: grund,
      component: fachaufgabe,
      factory,
    }).attr("clip-path", "url(#gz-mask)");
    svg.push(icon);
  }

  if (einheit) {
    const anchor = grund.einheitAnchor ?? [
      viewBox[0][0] + (viewBox[1][0] - viewBox[0][0]) / 2,
      0,
    ];
    const position = [
      anchor[0] - einheit.size[0] / 2,
      anchor[1] - einheit.size[1],
    ];

    // extend the viewbox if the icon protrudes to the top
    const ydiff = viewBox[0][1] - position[1];
    if (ydiff > 0) {
      viewBox[0] = subtractPoints(viewBox[0], [0, ydiff]);
      viewBox[1] = addPoints(viewBox[1], [0, ydiff]);
    }

    svg.push(
      einheit
        .render(factory)
        .attr("transform", `translate(${position[0]},${position[1]})`)
    );
  }

  if (funktion) {
    const offset = (grund.size[0] - funktion.size[0]) / 2;
    svg.push(
      factory
        .g()
        .attr("clip-path", "url(#gz-mask)")
        .push(
          funktion.render(factory).attr("transform", `translate(${offset},0)`)
        )
    );
  }

  svg.attr("viewBox", viewBox.flatMap((p) => p).join(" "));

  return {
    get svg() {
      return svg.render();
    },
    size: [viewBox[1][0] - viewBox[0][0], viewBox[1][1] - viewBox[0][1]],
    get dataUrl() {
      return `data:image/svg+xml;base64,${Buffer.from(this.svg).toString(
        "base64"
      )}`;
    },
  };
}
