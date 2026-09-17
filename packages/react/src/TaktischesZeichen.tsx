import { SVGProps } from "react";
import {
  Container,
  Element,
  erzeugeTaktischesZeichen,
  TextNode,
  type TaktischesZeichen,
} from "@taktische-zeichen/core";

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
  typ,
  organisationName,
  farbe,
  skipFontRegistration,
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
    typ,
    organisationName,
    farbe,
    skipFontRegistration,
  });

  return render(svg, props);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- `element.name` is a dynamic string tag; typing additionalProps as an object type makes TSX resolve the element's props to bare IntrinsicAttributes and reject `style`/spread props that are actually valid DOM attributes.
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

function withCamelCaseKeys<T>(obj: Record<string, T>): Record<string, T> {
  return Object.entries(obj).reduce<Record<string, T>>(
    (acc, [key, value]) => ({ ...acc, [toCamelCase(key)]: value }),
    {},
  );
}

function toCamelCase(str: string): string {
  return str.replace(
    /^([A-Z])|[\s-_](\w)/g,
    function (_: string, p1: string | undefined, p2: string | undefined) {
      if (p2) return p2.toUpperCase();
      return (p1 ?? "").toLowerCase();
    },
  );
}
