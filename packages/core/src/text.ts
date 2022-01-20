import { applyFontStyles, calculateTextWidth } from "./font";
import { Element, SVG } from "./svg";
import { Component } from "./utils";

export function renderText(svg: SVG, text: string): Element {
  return applyFontStyles(svg.registerText().textNode("text", text)).attr(
    "stroke",
    "none"
  );
}

export function createTextSymbol(text: string): Component {
  const width = calculateTextWidth(text);

  return {
    size: [width, getTextHeight(text)],
    render: (svg) =>
      renderText(svg, text)
        .attr("x", "0")
        .attr("y", "21.5")
        .attr("fill", "currentColor"),
    cover: false,
  };
}

function getTextHeight(text: string) {
  return ["g", "j", "p", "q", "y"].some((letter) => text.includes(letter))
    ? 28
    : 21.5;
}
