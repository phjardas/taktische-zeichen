import { applyFontStyles, calculateTextWidth } from "./font";
import { Component } from "./utils";

export function createTextSymbol(text: string): Component {
  const width = calculateTextWidth(text);

  return {
    size: [width, getTextHeight(text)],
    render: (svg) =>
      applyFontStyles(svg.registerText().textNode("text", text))
        .attr("x", "0")
        .attr("y", "21.5")
        .attr("stroke", "none")
        .attr("fill", "black"),
    cover: false,
  };
}

function getTextHeight(text: string) {
  return ["g", "j", "p", "q", "y"].some((letter) => text.includes(letter))
    ? 28
    : 21.5;
}
