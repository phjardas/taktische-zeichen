import type { EinheitId } from "./einheiten.js";
import type { FachaufgabeId } from "./fachaufgaben.js";
import type { FunktionId } from "./funktionen.js";
import type { GrundzeichenId } from "./grundzeichen.js";
import type { OrganisationId } from "./organisationen.js";
import type { Element } from "./svg.js";
import { SVG } from "./svg.js";
import type { SymbolId } from "./symbole.js";
import type { VerwaltungsstufeId } from "./verwaltungsstufen.js";

export type Renderable<Props = unknown> = {
  size: Point;
  render: (svg: SVG, props?: Props) => Element;
};

export type Point = [number, number];

/**
 * - top-left coordinates
 * - bottom-right coordinates
 */
export type Rect = [Point, Point];

export type Padding =
  | [number, number]
  | [number, number, number]
  | [number, number, number, number];

export type TaktischesZeichen = {
  grundzeichen?: GrundzeichenId;
  organisation?: OrganisationId;
  fachaufgabe?: FachaufgabeId;
  einheit?: EinheitId;
  verwaltungsstufe?: VerwaltungsstufeId;
  funktion?: FunktionId;
  symbol?: SymbolId;
  text?: string;
  typ?: string;
  name?: string;
  organisationName?: string;
  farbe?: string;
  skipFontRegistration?: boolean;
};

export type Image = {
  readonly svg: SVG;
  readonly dataUrl: string;
  readonly size: Point;
  toString(): string;
};
