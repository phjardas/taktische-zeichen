export type OrganisationId =
  | "feuerwehr"
  | "thw"
  | "fuehrung"
  | "polizei"
  | "gefahrenabwehr"
  | "hilfsorganisation";

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
    background: "#cc0000",
    textColor: "#ffffff",
  },
  {
    id: "thw",
    label: "THW",
    background: "#0000ff",
    textColor: "#ffffff",
  },
  {
    id: "fuehrung",
    label: "Führung",
    background: "#dddd00",
  },
  {
    id: "polizei",
    label: "Polizei",
    background: "#009900",
  },
  {
    id: "gefahrenabwehr",
    label: "Gefahrenabwehr",
    background: "#ff9900",
  },
  {
    id: "hilfsorganisation",
    label: "Hilfsorganisationen",
    background: "#ffffff",
  },
];
