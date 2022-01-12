import { promises as fs } from "fs";
import * as formatXml from "prettify-xml";
import { createIcon, type IconDescriptor } from "./icon";

async function getIcon(descriptor: IconDescriptor) {
  const { svg } = createIcon(descriptor);
  await fs.mkdir("test-icons", { recursive: true });
  await fs.writeFile(
    `test-icons/${expect.getState().currentTestName}.svg`,
    formatXml(svg),
    "utf8"
  );
  return svg;
}

it("special", () =>
  getIcon({
    grundzeichen: "kettenfahrzeug",
    organisation: "feuerwehr",
    fachaufgabe: "brandbekaempfung",
  }));
