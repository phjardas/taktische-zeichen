import { promises as fs } from "fs";

export type Organisation = {
  id: string;
  label: string;
  background: string;
};

export class Organisationen {
  private organisationen: Promise<Array<Organisation>>;

  constructor() {
    this.organisationen = fs
      .readFile("organisationen.json", "utf8")
      .then(JSON.parse);
  }

  async getOrganisation(id: string): Promise<Organisation> {
    const org = (await this.organisationen).find((o) => o.id === id);
    if (!org) throw new Error(`Organisation not found: ${id}`);
    return org;
  }
}
