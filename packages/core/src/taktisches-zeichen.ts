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
import type { Image, Point, TaktischesZeichen } from "./types";
import {
  addPoints,
  ImageImpl,
  placeComponent,
  subtractPoints,
  transformRect,
} from "./utils";
import { verwaltungsstufen } from "./verwaltungsstufen";

function get<T extends { id: string }>(
  id: string | undefined,
  items: Array<T>
): T | undefined {
  if (!id) return undefined;
  const item = items.find((i) => i.id === id);
  if (!item) throw new Error(`Item not found: ${id}`);
  return item;
}

export function erzeugeTaktischesZeichen({
  text,
  typ,
  name,
  organisationName,
  farbe,
  skipFontRegistration,
  ...spec
}: TaktischesZeichen): Image {
  const grund = get(spec.grundzeichen, grundzeichen);
  const org = get(spec.organisation, organisationen);
  const fachaufgabe = get(spec.fachaufgabe, fachaufgaben);
  const einheit = get(spec.einheit, einheiten);
  const verwaltungsstufe = get(spec.verwaltungsstufe, verwaltungsstufen);
  const funktion = get(spec.funktion, funktionen);
  const symbol = get(spec.symbol, symbole);

  if (!grund && !symbol) {
    throw new Error(
      'Entweder "grundzeichen" oder "symbol" müssen angegeben werden.'
    );
  }

  const svg = new SVG({ skipFontRegistration })
    .attr("color", "black")
    .attr("fill", "transparent")
    .attr("stroke", "black")
    .attr("stroke-width", 2);

  const viewBox: [Point, Point] = [
    [0, 0],
    [0, 0],
  ];

  if (grund) {
    viewBox[1] = grund.size;

    const fill = accepts(grund, "organisation") ? org?.background : undefined;

    svg.attr(
      "color",
      (accepts(grund, "farbe") && farbe ? farbe : grund.defaultColor) ??
        (accepts(grund, "organisation") ? org?.textColor : undefined) ??
        "black"
    );

    svg.push(grund.render(svg, { fill }));

    const clipPathId = `tz_${grund.id}`;

    if (grund.clipPath) {
      svg.def(svg.clipPath(clipPathId).push(grund.clipPath(svg)));
    }

    let mainPosition: Point = [0, 0];
    let mainScale = 1;

    if (fachaufgabe && accepts(grund, "fachaufgabe")) {
      const placed = placeComponent({
        parent: grund,
        component: fachaufgabe,
        padding: fachaufgabe.cover ? undefined : grund.padding,
        svg,
      });
      svg.push(
        svg.g().push(placed.element).attr("clip-path", `url(#${clipPathId})`)
      );
      mainPosition = placed.offset;
      mainScale = placed.scale;
    }

    let topAnchor = grund.einheitAnchor ?? [
      viewBox[0][0] + (viewBox[1][0] - viewBox[0][0]) / 2,
      0,
    ];

    if (einheit && accepts(grund, "einheit")) {
      const position = [
        topAnchor[0] - einheit.size[0] / 2,
        topAnchor[1] - einheit.size[1],
      ];

      topAnchor = addPoints(topAnchor, [0, -einheit.size[1]]);

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

    if (verwaltungsstufe && accepts(grund, "verwaltungsstufe")) {
      const position = [
        topAnchor[0] - verwaltungsstufe.size[0] / 2,
        topAnchor[1] - verwaltungsstufe.size[1],
      ];

      topAnchor = addPoints(topAnchor, [0, -verwaltungsstufe.size[1]]);

      // extend the viewbox if the icon is too large
      const ydiff = viewBox[0][1] - position[1];
      if (ydiff > 0) {
        viewBox[0] = subtractPoints(viewBox[0], [0, ydiff]);
        viewBox[1] = addPoints(viewBox[1], [0, ydiff]);
      }

      const xdiff = viewBox[0][0] - position[0];
      if (xdiff > 0) {
        viewBox[0] = subtractPoints(viewBox[0], [xdiff, 0]);
        viewBox[1] = addPoints(viewBox[1], [2 * xdiff, 0]);
      }

      svg.push(
        verwaltungsstufe
          .render(svg)
          .attr("transform", `translate(${position[0]},${position[1]})`)
      );
    }

    if (funktion && accepts(grund, "funktion")) {
      const offset = (grund.size[0] - funktion.size[0]) / 2;
      svg.push(
        svg
          .g()
          .attr("clip-path", `url(#${clipPathId})`)
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
            .attr("color", farbe)
            .attr("clip-path", `url(#${clipPathId})`)
            .push(
              placeComponent({
                parent: grund,
                component: symbol,
                padding: grund.padding,
                svg,
              }).element
            )
        );
      }

      if (text) {
        svg.push(
          svg
            .g()
            .attr("color", farbe)
            .attr("clip-path", `url(#${clipPathId})`)
            .push(
              placeComponent({
                parent: grund,
                component: createTextSymbol(text),
                padding: grund.textPadding ?? grund.padding,
                svg,
              }).element
            )
        );
      }
    }

    if (name && accepts(grund, "name")) {
      const grundNameArea = grund.nameArea ??
        grund.paintableArea ?? [[0, 0], grund.size];
      const fachaufgabeNameArea =
        fachaufgabe?.nameArea &&
        transformRect(fachaufgabe?.nameArea?.(grundNameArea), {
          offset: mainPosition,
          scale: mainScale,
        });
      const paintableArea = fachaufgabeNameArea ?? grundNameArea;

      svg.push(
        svg
          .g()
          .attr("clip-path", `url(#${clipPathId})`)
          .push(
            placeComponent({
              parent: { ...grund, paintableArea },
              component: createTextSymbol(name),
              align: ["start", "start"],
              svg,
            }).element
          )
      );
    }

    if (organisationName && accepts(grund, "name")) {
      const grundNameArea = grund.organisationNameArea ??
        grund.paintableArea ?? [[0, 0], grund.size];
      const fachaufgabeNameArea =
        fachaufgabe?.organisationNameArea &&
        transformRect(fachaufgabe?.organisationNameArea?.(grundNameArea), {
          offset: mainPosition,
          scale: mainScale,
        });
      const paintableArea = fachaufgabeNameArea ?? grundNameArea;

      svg.push(
        svg
          .g()
          .attr("clip-path", `url(#${clipPathId})`)
          .push(
            placeComponent({
              parent: { ...grund, paintableArea },
              component: createTextSymbol(organisationName),
              align: ["end", "end"],
              svg,
            }).element
          )
      );
    }

    if (typ && accepts(grund, "typ")) {
      const grundTypArea = grund.typArea ??
        grund.paintableArea ?? [[0, 0], grund.size];
      const fachaufgabeTypArea =
        fachaufgabe?.typArea &&
        transformRect(fachaufgabe?.typArea?.(grundTypArea), {
          offset: mainPosition,
          scale: mainScale,
        });
      const paintableArea = fachaufgabeTypArea ?? grundTypArea;

      svg.push(
        svg
          .g()
          .attr("clip-path", `url(#${clipPathId})`)
          .push(
            placeComponent({
              parent: { ...grund, paintableArea },
              component: createTextSymbol(typ),
              align: ["start", "end"],
              svg,
            }).element
          )
      );
    }
  } else if (symbol) {
    viewBox[1] = symbol.size;
    svg.attr("color", farbe ?? "black");
    svg.attr("stroke", "currentColor");
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

function accepts({ accepts }: Grundzeichen, type: ComponentType): boolean {
  if (!accepts) return true;
  return accepts.includes(type);
}
