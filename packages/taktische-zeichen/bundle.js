const fs = require("fs").promises;
const path = require("path");

const fragmentsDir = path.join(__dirname, "fragments");

async function bundleFragments() {
  const fragments = await JSON.parse(
    await fs.readFile(path.join(fragmentsDir, "fragments.json"), "utf8")
  );
  const data = await Promise.all(
    fragments.map(async ({ file, ...fragment }) => ({
      ...fragment,
      content: (await fs.readFile(path.join(fragmentsDir, file), "utf8")).trim(),
    }))
  );
  const content = `
import type { Point } from "./types";

export type Fragment = {
  id: string;
  label: string;
  content: string;
  size: Point;
};

export const fragments: Array<Fragment> = ${JSON.stringify(data, null, 2)};
`;

  await fs.writeFile(
    path.join(__dirname, "src", "fragments.ts"),
    content.trim(),
    "utf-8"
  );
}

async function main() {
  return Promise.all([bundleFragments()]);
}

main();
