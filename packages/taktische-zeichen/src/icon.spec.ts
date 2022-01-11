import { promises as fs } from "fs";
import { createIcon, type Icon } from "./icon";

async function saveIcon({ svg }: Icon) {
  await fs.writeFile(expect.getState().currentTestName + ".svg", svg, "utf8");
}

describe("icon", () => {
  it("feuerwehr_kraftfahrzeug-landgebunden_brandbekaempfung", async () => {
    const icon = createIcon({
      organisation: "feuerwehr",
      grundzeichen: "kraftfahrzeug-landgebunden",
      fachaufgabe: "brandbekaempfung",
    });

    await saveIcon(icon);
    expect(icon.svg).toMatchInlineSnapshot(
      `"<svg fill=\\"transparent\\" stroke=\\"#000000\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 65\\" xmlns=\\"http://www.w3.org/2000/svg\\"><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><mask id=\\"grundzeichen\\"><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"white\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></mask><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" mask=\\"url(#grundzeichen)\\" /></svg>"`
    );
  });

  it("thw_kraftfahrzeug-gelaendegaengig_bergung", async () => {
    const icon = createIcon({
      organisation: "thw",
      grundzeichen: "kraftfahrzeug-gelaendegaengig",
      fachaufgabe: "bergung",
    });

    await saveIcon(icon);
    expect(icon.svg).toMatchInlineSnapshot(
      `"<svg fill=\\"transparent\\" stroke=\\"#000000\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 65\\" xmlns=\\"http://www.w3.org/2000/svg\\"><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000cc\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><mask id=\\"grundzeichen\\"><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"white\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></mask><path d=\\"M1,15 H15 A22.5 20 180 1 0 60 15 H74\\" mask=\\"url(#grundzeichen)\\" /></svg>"`
    );
  });

  it("drk_fahrzeug_rettungswesen", async () => {
    const icon = createIcon({
      organisation: "drk",
      grundzeichen: "fahrzeug",
      fachaufgabe: "rettungswesen",
    });

    await saveIcon(icon);
    expect(icon.svg).toMatchInlineSnapshot(
      `"<svg fill=\\"transparent\\" stroke=\\"#000000\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><mask id=\\"grundzeichen\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"white\\" /></mask><path d=\\"M1,22.5 H74 M37.5,1 V44\\" mask=\\"url(#grundzeichen)\\" /></svg>"`
    );
  });
});
