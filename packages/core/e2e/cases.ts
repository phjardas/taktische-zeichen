import type {
  ComponentType,
  Grundzeichen,
  TaktischesZeichen,
} from "../src";
import {
  einheiten,
  fachaufgaben,
  funktionen,
  grundzeichen,
  organisationen,
  symbole,
  verwaltungsstufen,
} from "../src";

export type Case = {
  id: string;
  description: string;
  options: TaktischesZeichen;
};

function requireGrundzeichenAccepting(type: ComponentType): Grundzeichen {
  const grund = grundzeichen.find((g) => g.accepts?.includes(type));
  if (!grund) {
    throw new Error(`No Grundzeichen accepts "${type}"`);
  }
  return grund;
}

function grundzeichenCases(): Case[] {
  return grundzeichen.map((grund) => {
    const options: TaktischesZeichen = {
      grundzeichen: grund.id,
      skipFontRegistration: true,
    };
    if (grund.accepts?.includes("organisation")) {
      options.organisation = "feuerwehr";
    }
    return {
      id: `grundzeichen-${grund.id}`,
      description: `Grundzeichen: ${grund.label}`,
      options,
    };
  });
}

function symbolCases(): Case[] {
  return symbole.map((symbol) => ({
    id: `symbol-${symbol.id}`,
    description: `Symbol: ${symbol.label}`,
    options: { symbol: symbol.id, skipFontRegistration: true },
  }));
}

function fachaufgabeCases(): Case[] {
  const grund = requireGrundzeichenAccepting("fachaufgabe");
  return fachaufgaben.map((fachaufgabe) => ({
    id: `fachaufgabe-${fachaufgabe.id}`,
    description: `Fachaufgabe: ${fachaufgabe.label} (auf ${grund.id})`,
    options: {
      grundzeichen: grund.id,
      fachaufgabe: fachaufgabe.id,
      skipFontRegistration: true,
    },
  }));
}

function organisationCases(): Case[] {
  const grund = requireGrundzeichenAccepting("organisation");
  return organisationen.map((organisation) => ({
    id: `organisation-${organisation.id}`,
    description: `Organisation: ${organisation.label} (auf ${grund.id})`,
    options: {
      grundzeichen: grund.id,
      organisation: organisation.id,
      skipFontRegistration: true,
    },
  }));
}

function einheitCases(): Case[] {
  const grund = requireGrundzeichenAccepting("einheit");
  return einheiten.map((einheit) => ({
    id: `einheit-${einheit.id}`,
    description: `Einheit: ${einheit.label} (auf ${grund.id})`,
    options: {
      grundzeichen: grund.id,
      einheit: einheit.id,
      skipFontRegistration: true,
    },
  }));
}

function verwaltungsstufeCases(): Case[] {
  const grund = requireGrundzeichenAccepting("verwaltungsstufe");
  return verwaltungsstufen.map((verwaltungsstufe) => ({
    id: `verwaltungsstufe-${verwaltungsstufe.id}`,
    description: `Verwaltungsstufe: ${verwaltungsstufe.label} (auf ${grund.id})`,
    options: {
      grundzeichen: grund.id,
      verwaltungsstufe: verwaltungsstufe.id,
      skipFontRegistration: true,
    },
  }));
}

function funktionCases(): Case[] {
  const grund = requireGrundzeichenAccepting("funktion");
  return funktionen.map((funktion) => ({
    id: `funktion-${funktion.id}`,
    description: `Funktion: ${funktion.label} (auf ${grund.id})`,
    options: {
      grundzeichen: grund.id,
      funktion: funktion.id,
      skipFontRegistration: true,
    },
  }));
}

function modifierCases(): Case[] {
  const nameGrund = requireGrundzeichenAccepting("name");
  const farbeGrund = requireGrundzeichenAccepting("farbe");
  const typGrund = requireGrundzeichenAccepting("typ");
  const fachaufgabeGrund = requireGrundzeichenAccepting("fachaufgabe");

  return [
    {
      id: "modifier-name-ascii",
      description: "name option, ASCII",
      options: {
        grundzeichen: nameGrund.id,
        name: "Test",
        skipFontRegistration: true,
      },
    },
    {
      id: "modifier-name-utf8",
      description: "name option, UTF-8 characters",
      options: {
        grundzeichen: nameGrund.id,
        name: "Täst öß",
        skipFontRegistration: true,
      },
    },
    {
      id: "modifier-name-long",
      description: "name option, long text exercising scaling",
      options: {
        grundzeichen: nameGrund.id,
        name: "Ein sehr langer Name fuer dieses Zeichen",
        skipFontRegistration: true,
      },
    },
    {
      id: "modifier-text",
      description: "text option",
      options: {
        grundzeichen: nameGrund.id,
        text: "Hinweistext",
        skipFontRegistration: true,
      },
    },
    {
      id: "modifier-farbe",
      description: "farbe override",
      options: {
        grundzeichen: farbeGrund.id,
        farbe: "#00ff00",
        skipFontRegistration: true,
      },
    },
    {
      id: "modifier-typ",
      description: "typ option",
      options: {
        grundzeichen: typGrund.id,
        typ: "Typ 3",
        skipFontRegistration: true,
      },
    },
    {
      id: "symbol-only-no-grundzeichen",
      description: "symbol without a grundzeichen",
      options: { symbol: symbole[0].id, skipFontRegistration: true },
    },
    {
      id: "modifier-font-registration",
      description: "real font registration (not skipped)",
      options: { grundzeichen: nameGrund.id, name: "Test" },
    },
    {
      id: "kitchen-sink",
      description:
        "Grundzeichen + Organisation + Symbol + Fachaufgabe + Einheit + Verwaltungsstufe + name together",
      options: {
        grundzeichen: fachaufgabeGrund.id,
        organisation: "feuerwehr",
        fachaufgabe: fachaufgaben[0].id,
        symbol: symbole[0].id,
        einheit: einheiten[0].id,
        verwaltungsstufe: verwaltungsstufen[0].id,
        name: "Kitchen Sink",
        skipFontRegistration: true,
      },
    },
  ];
}

export const cases: Case[] = [
  ...grundzeichenCases(),
  ...symbolCases(),
  ...fachaufgabeCases(),
  ...organisationCases(),
  ...einheitCases(),
  ...verwaltungsstufeCases(),
  ...funktionCases(),
  ...modifierCases(),
];
