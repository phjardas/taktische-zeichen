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
};

export const organisationen: Array<Organisation> = [
  { id: "feuerwehr", label: "Feuerwehr", background: "#cc0000" },
  { id: "thw", label: "THW", background: "#3333cc" },
  { id: "fuehrung", label: "Führung", background: "#dddd00" },
  { id: "polizei", label: "Polizei", background: "#006600" },
  {
    id: "gefahrenabwehr",
    label: "Gefahrenabwehr",
    background: "#cc6600",
  },
  {
    id: "hilfsorganisation",
    label: "Hilfsorganisationen",
    background: "#ffffff",
  },
];
