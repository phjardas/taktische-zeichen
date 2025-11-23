export type OrganisationId =
  | "feuerwehr"
  | "thw"
  | "fuehrung"
  | "polizei"
  | "gefahrenabwehr"
  | "hilfsorganisation"
  | "bundeswehr"
  | "zivil";

export type Organisation = {
  id: OrganisationId;
  label: string;
  background: string;
  textColor?: string;
};

export const organisationen: Array<Organisation> = [
  {
    id: "feuerwehr",
    label: "Feuerwehr",
    background: "#fa321e",
    textColor: "#ffffff",
  },
  {
    id: "thw",
    label: "THW",
    background: "#003399",
    textColor: "#ffffff",
  },
  {
    id: "fuehrung",
    label: "Führung",
    background: "#fafa00",
  },
  {
    id: "polizei",
    label: "Polizei",
    background: "#64dc32",
  },
  {
    id: "gefahrenabwehr",
    label: "Gefahrenabwehr",
    background: "#fa8c00",
  },
  {
    id: "hilfsorganisation",
    label: "Hilfsorganisationen",
    background: "#ffffff",
  },
  {
    id: "bundeswehr",
    label: "Bundeswehr",
    background: "#b4783c",
    textColor: "#ffffff",
  },
  {
    id: "zivil",
    label: "Zivile Einheiten",
    background: "#bebebe",
    textColor: "#ffffff",
  },
];
