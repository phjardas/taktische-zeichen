import { SVGProps } from "react";
import {
  Container,
  TextNode,
  Element,
  erzeugeTaktischesZeichen,
  type TaktischesZeichen,
} from "taktische-zeichen-core";

export type Props = TaktischesZeichen & SVGProps<SVGSVGElement>;

export default function TaktischesZeichen({
  grundzeichen,
  fachaufgabe,
  organisation,
  einheit,
  verwaltungsstufe,
  funktion,
  symbol,
  text,
  name,
  ...props
}: Props) {
  const { svg } = erzeugeTaktischesZeichen({
    grundzeichen,
    fachaufgabe,
    organisation,
    einheit,
    verwaltungsstufe,
    funktion,
    symbol,
    text,
    name,
  });

  return render(svg, props);
}

function render(element: Element, additionalProps?: any) {
  const children =
    element instanceof Container
      ? element.children.map((child, key) => render(child, { key }))
      : element instanceof TextNode
      ? element.text
      : null;

  return (
    <element.name
      {...withCamelCaseKeys(element.attributes)}
      style={withCamelCaseKeys(element.styles)}
      {...additionalProps}
    >
      {children}
    </element.name>
  );
}

function withCamelCaseKeys(obj: Record<string, any>): Record<string, any> {
  return Object.entries(obj)
    .map(([key, value]) => [toCamelCase(key), value])
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
}

function toCamelCase(str: string): string {
  return str.replace(/^([A-Z])|[\s-_](\w)/g, function (_, p1, p2) {
    if (p2) return p2.toUpperCase();
    return p1.toLowerCase();
  });
}
