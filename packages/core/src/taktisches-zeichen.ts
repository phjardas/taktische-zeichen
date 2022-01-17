import { einheiten } from "./einheiten";
import { fachaufgaben } from "./fachaufgaben";
import { funktionen } from "./funktionen";
import {
  grundzeichen,
  type ComponentType,
  type Grundzeichen,
} from "./grundzeichen";
import { organisationen } from "./organisationen";
import { SVG } from "./svg";
import { symbole } from "./symbole";
import { createTextSymbol } from "./text";
import {
  type Image,
  type Point,
  type TaktischesZeichen,
  type Padding,
} from "./types";
import {
  addPoints,
  ImageImpl,
  placeComponent,
  resolvePadding,
  subtractPoints,
} from "./utils";

function get<T extends { id: string }>(
  id: string | undefined,
  items: Array<T>
): T | undefined {
  if (!id) return undefined;
  const item = items.find((i) => i.id === id);
  if (!item) throw new Error(`Item not found: ${id}`);
  return item;
}

export function erzeugeTaktischesZeichen(spec: TaktischesZeichen): Image {
  const grund = get(spec.grundzeichen, grundzeichen);
  const org = get(spec.organisation, organisationen);
  const fachaufgabe = get(spec.fachaufgabe, fachaufgaben);
  const einheit = get(spec.einheit, einheiten);
  const funktion = get(spec.funktion, funktionen);
  const symbol = get(spec.symbol, symbole);

  if (!grund && !symbol) {
    throw new Error(
      'Entweder "grundzeichen" oder "symbol" müssen angegeben werden.'
    );
  }

  const svg = new SVG()
    .attr("fill", "transparent")
    .attr("stroke", "black")
    .attr("stroke-width", 2);

  const viewBox: [Point, Point] = [
    [0, 0],
    [0, 0],
  ];

  if (grund) {
    viewBox[1] = grund.size;

    svg.push(
      grund.render(svg, {
        fill: accepts(grund, "organisation") ? org?.background : undefined,
      })
    );

    if (grund.clipPath) {
      svg.def(svg.clipPath("gz-mask").push(grund.clipPath(svg)));
    }

    if (fachaufgabe && accepts(grund, "fachaufgabe")) {
      const icon = placeComponent({
        parent: grund,
        component: fachaufgabe,
        padding: fachaufgabe.cover ? undefined : grund.padding,
        svg,
      });
      svg.push(svg.g().push(icon).attr("clip-path", "url(#gz-mask)"));
    }

    if (einheit && accepts(grund, "einheit")) {
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
          .render(svg)
          .attr("transform", `translate(${position[0]},${position[1]})`)
      );
    }

    if (funktion && accepts(grund, "funktion")) {
      const offset = (grund.size[0] - funktion.size[0]) / 2;
      svg.push(
        svg
          .g()
          .attr("clip-path", "url(#gz-mask)")
          .push(
            funktion.render(svg).attr("transform", `translate(${offset},0)`)
          )
      );
    }

    if (accepts(grund, "symbol")) {
      if (symbol) {
        svg.push(
          svg
            .g()
            .attr("clip-path", "url(#gz-mask)")
            .push(
              placeComponent({
                parent: grund,
                component: symbol,
                padding: grund.padding,
                svg,
              })
            )
        );
      }

      if (spec.text) {
        svg.push(
          svg
            .g()
            .attr("clip-path", "url(#gz-mask)")
            .push(
              placeComponent({
                parent: grund,
                component: createTextSymbol(spec.text, {
                  fill: org?.textColor ?? "black",
                }),
                padding: getTextPadding(grund.padding),
                svg,
              })
            )
        );
      }
    }
  } else if (symbol) {
    viewBox[1] = symbol.size;
    svg.push(symbol.render(svg));
  } else {
    throw new Error(
      'Entweder "grundzeichen" oder "symbol" müssen angegeben werden.'
    );
  }

  svg.attr("viewBox", viewBox.flatMap((p) => p).join(" "));

  return new ImageImpl(svg, [
    viewBox[1][0] - viewBox[0][0],
    viewBox[1][1] - viewBox[0][1],
  ]);
}

function getTextPadding(padding?: Padding): Padding | undefined {
  if (!padding) return undefined;
  const pad = resolvePadding(padding);
  return [pad[0], pad[1] / 2, pad[2], pad[3] / 2];
}

function accepts({ accepts }: Grundzeichen, type: ComponentType): boolean {
  if (!accepts) return true;
  return accepts.includes(type);
}
