export type OrganisationId =
  | "feuerwehr"
  | "thw"
  | "fuehrung"
  | "polizei"
  | "gefahrenabwehr"
  | "drk";

export type Organisation = {
  id: OrganisationId;
  label: string;
  background: string;
};

export const organisationen: Array<Organisation> = [
  { id: "feuerwehr", label: "Feuerwehr", background: "#cc0000" },
  { id: "thw", label: "THW", background: "#0000cc" },
  { id: "fuehrung", label: "Führung", background: "#cccc00" },
  { id: "polizei", label: "Polizei", background: "#00cc00" },
  {
    id: "gefahrenabwehr",
    label: "Gefahrenabwehr",
    background: "#ff9900",
  },
  { id: "drk", label: "DRK", background: "#ffffff" },
];
