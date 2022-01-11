export type Point = [number, number];

export type IconDescriptor = {
  grundzeichen: string;
  organisation?: string;
  fachaufgabe?: string;
};

export type SVG = {
  toString(pretty?: boolean): string;
};
