import { describe, expectTypeOf, it } from "vitest";
import {
  einheiten,
  erzeugeTaktischesZeichen,
  fachaufgaben,
  funktionen,
  grundzeichen,
  organisationen,
  verwaltungsstufen,
} from "./index.js";
import type {
  EinheitId,
  FachaufgabeId,
  FunktionId,
  Grundzeichen,
  GrundzeichenId,
  Image,
  OrganisationId,
  TaktischesZeichen,
  VerwaltungsstufeId,
} from "./index.js";

describe("ID union types are not widened to string", () => {
  // toExtend proves a real literal from the data table is assignable into
  // the union. toEqualTypeOf<string> uses expect-type's strict (invariant)
  // structural equality, so `.not.toEqualTypeOf<string>()` fails as soon as
  // the union is accidentally widened to plain `string` - which is exactly
  // the regression these tests exist to catch. (`extends`-based checks such
  // as `toBeString`/`toExtend<string>` are unsuitable here: every string
  // literal union trivially extends `string`, so they would never fail.)
  it("GrundzeichenId accepts a real literal but rejects arbitrary string", () => {
    expectTypeOf<"kraftfahrzeug-gelaendegaengig">().toExtend<GrundzeichenId>();
    expectTypeOf<GrundzeichenId>().not.toEqualTypeOf<string>();
  });

  it("OrganisationId accepts a real literal but rejects arbitrary string", () => {
    expectTypeOf<"feuerwehr">().toExtend<OrganisationId>();
    expectTypeOf<OrganisationId>().not.toEqualTypeOf<string>();
  });

  it("EinheitId accepts a real literal but rejects arbitrary string", () => {
    expectTypeOf<"trupp">().toExtend<EinheitId>();
    expectTypeOf<EinheitId>().not.toEqualTypeOf<string>();
  });

  it("VerwaltungsstufeId accepts a real literal but rejects arbitrary string", () => {
    expectTypeOf<"gemeinde">().toExtend<VerwaltungsstufeId>();
    expectTypeOf<VerwaltungsstufeId>().not.toEqualTypeOf<string>();
  });

  it("FunktionId accepts a real literal but rejects arbitrary string", () => {
    expectTypeOf<"fuehrungskraft">().toExtend<FunktionId>();
    expectTypeOf<FunktionId>().not.toEqualTypeOf<string>();
  });

  it("FachaufgabeId accepts a real literal but rejects arbitrary string", () => {
    expectTypeOf<"brandbekaempfung">().toExtend<FachaufgabeId>();
    expectTypeOf<FachaufgabeId>().not.toEqualTypeOf<string>();
  });
});

describe("erzeugeTaktischesZeichen options", () => {
  it("accepts a valid TaktischesZeichen options object", () => {
    expectTypeOf(erzeugeTaktischesZeichen)
      .parameter(0)
      .toEqualTypeOf<TaktischesZeichen>();

    erzeugeTaktischesZeichen({
      grundzeichen: "kraftfahrzeug-gelaendegaengig",
      organisation: "feuerwehr",
      fachaufgabe: "brandbekaempfung",
      einheit: "gruppe",
      verwaltungsstufe: "gemeinde",
      funktion: "fuehrungskraft",
      text: "1",
      typ: "LF 20",
      name: "Florian Musterstadt 1/44/1",
      organisationName: "Musterstadt",
      farbe: "#ff0000",
      skipFontRegistration: true,
    });
  });

  it("rejects an invalid grundzeichen value", () => {
    // @ts-expect-error "nicht-existent" is not a valid GrundzeichenId
    erzeugeTaktischesZeichen({ grundzeichen: "nicht-existent" });
  });

  it("rejects an unknown option", () => {
    // @ts-expect-error "unbekannt" is not a key of TaktischesZeichen
    erzeugeTaktischesZeichen({ unbekannt: true });
  });
});

describe("erzeugeTaktischesZeichen return type", () => {
  it("returns exactly Image", () => {
    expectTypeOf(erzeugeTaktischesZeichen).returns.toEqualTypeOf<Image>();
  });

  it("Image has the expected shape", () => {
    expectTypeOf<Image>().toHaveProperty("svg");
    expectTypeOf<Image>().toHaveProperty("dataUrl").toEqualTypeOf<string>();
    expectTypeOf<Image>()
      .toHaveProperty("size")
      .toEqualTypeOf<[number, number]>();
    expectTypeOf<Image>().toHaveProperty("toString").toBeFunction();
    expectTypeOf<Image>()
      .toHaveProperty("toString")
      .returns.toEqualTypeOf<string>();
  });
});

describe("exported data tables keep their narrow id types", () => {
  it("grundzeichen elements have id: GrundzeichenId", () => {
    expectTypeOf(grundzeichen).toEqualTypeOf<Array<Grundzeichen>>();
    expectTypeOf(grundzeichen[0])
      .toHaveProperty("id")
      .toEqualTypeOf<GrundzeichenId>();
  });

  it("organisationen elements have id: OrganisationId", () => {
    expectTypeOf(organisationen[0])
      .toHaveProperty("id")
      .toEqualTypeOf<OrganisationId>();
  });

  it("einheiten elements have id: EinheitId", () => {
    expectTypeOf(einheiten[0]).toHaveProperty("id").toEqualTypeOf<EinheitId>();
  });

  it("verwaltungsstufen elements have id: VerwaltungsstufeId", () => {
    expectTypeOf(verwaltungsstufen[0])
      .toHaveProperty("id")
      .toEqualTypeOf<VerwaltungsstufeId>();
  });

  it("funktionen elements have id: FunktionId", () => {
    expectTypeOf(funktionen[0])
      .toHaveProperty("id")
      .toEqualTypeOf<FunktionId>();
  });

  it("fachaufgaben elements have id: FachaufgabeId", () => {
    expectTypeOf(fachaufgaben[0])
      .toHaveProperty("id")
      .toEqualTypeOf<FachaufgabeId>();
  });
});
