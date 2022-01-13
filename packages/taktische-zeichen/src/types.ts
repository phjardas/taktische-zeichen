import { type EinheitId } from "./einheiten";
import { type FachaufgabeId } from "./fachaufgaben";
import { type FunktionId } from "./funktionen";
import { type GrundzeichenId } from "./grundzeichen";
import { type OrganisationId } from "./organisationen";
import { type SymbolId } from "./symbole";

export type Point = [number, number];

export type Padding =
  | [number, number]
  | [number, number, number]
  | [number, number, number, number];

export type TaktischesZeichen = {
  grundzeichen: GrundzeichenId;
  organisation?: OrganisationId;
  fachaufgabe?: FachaufgabeId;
  einheit?: EinheitId;
  funktion?: FunktionId;
  symbol?: SymbolId;
};

export type Image = {
  readonly svg: string;
  readonly dataUrl: string;
  readonly size: Point;
};
