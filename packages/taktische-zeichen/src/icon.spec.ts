import { promises as fs } from "fs";
import { fachaufgaben } from "./fachaufgaben";
import { grundzeichen as grundzeichens } from "./grundzeichen";
import { createIcon, type Icon } from "./icon";
import { OrganisationId } from "./organisationen";

async function saveIcon({ svg }: Icon) {
  await fs.writeFile(expect.getState().currentTestName + ".svg", svg, "utf8");
}

describe("icon", () => {
  grundzeichens
    .map((g) => g.id)
    .forEach((grundzeichen) => {
      [undefined, "drk" as OrganisationId].forEach((organisation) => {
        [undefined, ...fachaufgaben.map((f) => f.id)].forEach((fachaufgabe) => {
          it(`${grundzeichen}_${organisation ?? "keine"}_${
            fachaufgabe ?? "keine"
          }`, () =>
            saveIcon(createIcon({ grundzeichen, fachaufgabe, organisation })));
        });
      });
    });
});
