import { promises as fs } from "fs";
import * as path from "path";
import { Point } from "./types";

const fragmentsDir = "fragments";

export type Fragment = {
  id: string;
  label: string;
  file: string;
  size: Point;
};

export class Fragments {
  private fragments: Promise<Array<Fragment>>;

  constructor() {
    this.fragments = fs
      .readFile(path.resolve(fragmentsDir, "fragments.json"), "utf8")
      .then(JSON.parse);
  }

  async getFragment(id: string): Promise<Fragment> {
    const f = (await this.fragments).find((f) => f.id === id);
    if (!f) throw new Error(`Fragment not found: ${id}`);
    return f;
  }

  async getFragmentData({ file }: Fragment): Promise<string> {
    const data = await fs.readFile(path.resolve(fragmentsDir, file), "utf8");
    return data.trim();
  }
}
