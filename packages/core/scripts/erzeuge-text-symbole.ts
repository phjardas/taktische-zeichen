import { promises as fs } from "fs";
import * as path from "path";
import {
  erzeugeTaktischesZeichen,
  GrundzeichenId,
  organisationen,
  OrganisationId,
} from "../src";

const basedir = path.resolve("icons/text");

const orgs: Array<OrganisationId | undefined> = [
  undefined,
  ...organisationen.map((o) => o.id),
];
const grundzeichens: Array<GrundzeichenId> = ["person", "stelle"];
const texte = ["M", "KatSL", "TEL", "OrgL", "EL", "FüStab"];

async function main() {
  await fs.mkdir(basedir, { recursive: true });

  await Promise.all(
    orgs.flatMap((organisation) =>
      grundzeichens.flatMap((grundzeichen) =>
        texte.map(async (text) =>
          fs.writeFile(
            path.resolve(
              basedir,
              `${grundzeichen}_${organisation ?? "keine"}_${text}.svg`
            ),
            erzeugeTaktischesZeichen({
              grundzeichen,
              organisation,
              text,
            }).toString(),
            "utf8"
          )
        )
      )
    )
  );
}

main().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
