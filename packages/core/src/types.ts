import { type EinheitId } from "./einheiten";
import { type FachaufgabeId } from "./fachaufgaben";
import { type FunktionId } from "./funktionen";
import { type GrundzeichenId } from "./grundzeichen";
import { type OrganisationId } from "./organisationen";
import { SVG, type Element } from "./svg";
import { type SymbolId } from "./symbole";
import { type VerwaltungsstufeId } from "./verwaltungsstufen";

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
  name?: string;
};

export type Image = {
  readonly svg: SVG;
  readonly dataUrl: string;
  readonly size: Point;
  toString(): string;
};
