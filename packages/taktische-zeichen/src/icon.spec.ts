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

describe("icon", () => {
  it("taktische-formation_keine_keine_keine", () =>
    expect(
      getIcon({ grundzeichen: "taktische-formation" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" /></svg>"`
    ));

  it("taktische-formation_keine_keine_staffel", () =>
    expect(
      getIcon({ grundzeichen: "taktische-formation", einheit: "staffel" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_keine_keine_gruppe", () =>
    expect(
      getIcon({ grundzeichen: "taktische-formation", einheit: "gruppe" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" /><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_keine_keine_bereitschaft", () =>
    expect(
      getIcon({ grundzeichen: "taktische-formation", einheit: "bereitschaft" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_feuerwehr_keine_keine", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /></svg>"`
    ));

  it("taktische-formation_feuerwehr_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_keine_keine", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_thw_keine_keine", () =>
    expect(
      getIcon({ grundzeichen: "taktische-formation", organisation: "thw" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /></svg>"`
    ));

  it("taktische-formation_thw_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "thw",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_thw_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "thw",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_thw_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "thw",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_keine_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g></svg>"`
    ));

  it("taktische-formation_keine_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_keine_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_keine_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_feuerwehr_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_thw_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g></svg>"`
    ));

  it("taktische-formation_thw_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_thw_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_thw_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_keine_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("taktische-formation_keine_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_keine_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_keine_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_feuerwehr_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_thw_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("taktische-formation_thw_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_thw_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_thw_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_keine_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g></svg>"`
    ));

  it("taktische-formation_keine_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_keine_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_keine_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_feuerwehr_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_thw_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g></svg>"`
    ));

  it("taktische-formation_thw_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_thw_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_thw_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_keine_keine_keine", () =>
    expect(
      getIcon({ grundzeichen: "befehlsstelle" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" /></svg>"`
    ));

  it("befehlsstelle_keine_keine_staffel", () =>
    expect(
      getIcon({ grundzeichen: "befehlsstelle", einheit: "staffel" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 66\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_keine_keine_gruppe", () =>
    expect(
      getIcon({ grundzeichen: "befehlsstelle", einheit: "gruppe" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" /><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_keine_keine_bereitschaft", () =>
    expect(
      getIcon({ grundzeichen: "befehlsstelle", einheit: "bereitschaft" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 61\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_feuerwehr_keine_keine", () =>
    expect(
      getIcon({ grundzeichen: "befehlsstelle", organisation: "feuerwehr" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /></svg>"`
    ));

  it("befehlsstelle_feuerwehr_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 66\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 61\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_keine_keine", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 66\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 61\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_thw_keine_keine", () =>
    expect(
      getIcon({ grundzeichen: "befehlsstelle", organisation: "thw" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /></svg>"`
    ));

  it("befehlsstelle_thw_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 66\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_thw_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_thw_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 61\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_keine_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g></svg>"`
    ));

  it("befehlsstelle_keine_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 66\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_keine_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_keine_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 61\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_feuerwehr_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 66\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 61\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 66\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 61\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_thw_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g></svg>"`
    ));

  it("befehlsstelle_thw_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 66\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_thw_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_thw_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 61\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_keine_dekontamination_keine", () =>
    expect(
      getIcon({ grundzeichen: "befehlsstelle", fachaufgabe: "dekontamination" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("befehlsstelle_keine_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 66\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_keine_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_keine_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 61\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_feuerwehr_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 66\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 61\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 66\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 61\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_thw_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("befehlsstelle_thw_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 66\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_thw_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_thw_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 61\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_keine_rettungswesen_keine", () =>
    expect(
      getIcon({ grundzeichen: "befehlsstelle", fachaufgabe: "rettungswesen" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g></svg>"`
    ));

  it("befehlsstelle_keine_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 66\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_keine_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_keine_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 61\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_feuerwehr_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 66\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 61\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 66\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 61\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_thw_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g></svg>"`
    ));

  it("befehlsstelle_thw_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 66\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_thw_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_thw_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 61\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,51 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("stelle_keine_keine_keine", () =>
    expect(getIcon({ grundzeichen: "stelle" })).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></svg>"`
    ));

  it("stelle_keine_keine_staffel", () =>
    expect(
      getIcon({ grundzeichen: "stelle", einheit: "staffel" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_keine_keine_gruppe", () =>
    expect(
      getIcon({ grundzeichen: "stelle", einheit: "gruppe" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_keine_keine_bereitschaft", () =>
    expect(
      getIcon({ grundzeichen: "stelle", einheit: "bereitschaft" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_feuerwehr_keine_keine", () =>
    expect(
      getIcon({ grundzeichen: "stelle", organisation: "feuerwehr" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /></svg>"`
    ));

  it("stelle_feuerwehr_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_feuerwehr_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_feuerwehr_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_hilfsorganisation_keine_keine", () =>
    expect(
      getIcon({ grundzeichen: "stelle", organisation: "hilfsorganisation" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /></svg>"`
    ));

  it("stelle_hilfsorganisation_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_hilfsorganisation_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_hilfsorganisation_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_thw_keine_keine", () =>
    expect(
      getIcon({ grundzeichen: "stelle", organisation: "thw" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /></svg>"`
    ));

  it("stelle_thw_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "thw",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_thw_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "thw",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_thw_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "thw",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_keine_brandbekaempfung_keine", () =>
    expect(
      getIcon({ grundzeichen: "stelle", fachaufgabe: "brandbekaempfung" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("stelle_keine_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_keine_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_keine_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_feuerwehr_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("stelle_feuerwehr_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_feuerwehr_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_feuerwehr_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_hilfsorganisation_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("stelle_hilfsorganisation_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_hilfsorganisation_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_hilfsorganisation_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_thw_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("stelle_thw_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_thw_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_thw_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_keine_dekontamination_keine", () =>
    expect(
      getIcon({ grundzeichen: "stelle", fachaufgabe: "dekontamination" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("stelle_keine_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_keine_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_keine_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_feuerwehr_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("stelle_feuerwehr_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_feuerwehr_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_feuerwehr_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_hilfsorganisation_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("stelle_hilfsorganisation_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_hilfsorganisation_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_hilfsorganisation_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_thw_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("stelle_thw_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_thw_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_thw_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_keine_rettungswesen_keine", () =>
    expect(
      getIcon({ grundzeichen: "stelle", fachaufgabe: "rettungswesen" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("stelle_keine_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_keine_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_keine_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_feuerwehr_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("stelle_feuerwehr_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_feuerwehr_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_feuerwehr_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_hilfsorganisation_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("stelle_hilfsorganisation_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_hilfsorganisation_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_hilfsorganisation_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_thw_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("stelle_thw_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_thw_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_thw_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_keine_keine_keine", () =>
    expect(getIcon({ grundzeichen: "person" })).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></svg>"`
    ));

  it("person_keine_keine_staffel", () =>
    expect(
      getIcon({ grundzeichen: "person", einheit: "staffel" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_keine_keine_gruppe", () =>
    expect(
      getIcon({ grundzeichen: "person", einheit: "gruppe" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_keine_keine_bereitschaft", () =>
    expect(
      getIcon({ grundzeichen: "person", einheit: "bereitschaft" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_feuerwehr_keine_keine", () =>
    expect(
      getIcon({ grundzeichen: "person", organisation: "feuerwehr" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#cc0000\\" /></svg>"`
    ));

  it("person_feuerwehr_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "feuerwehr",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#cc0000\\" /><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_feuerwehr_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "feuerwehr",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#cc0000\\" /><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_feuerwehr_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "feuerwehr",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_hilfsorganisation_keine_keine", () =>
    expect(
      getIcon({ grundzeichen: "person", organisation: "hilfsorganisation" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#ffffff\\" /></svg>"`
    ));

  it("person_hilfsorganisation_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#ffffff\\" /><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_hilfsorganisation_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#ffffff\\" /><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_hilfsorganisation_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_thw_keine_keine", () =>
    expect(
      getIcon({ grundzeichen: "person", organisation: "thw" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#0000dd\\" /></svg>"`
    ));

  it("person_thw_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "thw",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#0000dd\\" /><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_thw_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "thw",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#0000dd\\" /><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_thw_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "thw",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_keine_brandbekaempfung_keine", () =>
    expect(
      getIcon({ grundzeichen: "person", fachaufgabe: "brandbekaempfung" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("person_keine_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_keine_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_keine_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_feuerwehr_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("person_feuerwehr_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_feuerwehr_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_feuerwehr_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_hilfsorganisation_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("person_hilfsorganisation_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_hilfsorganisation_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_hilfsorganisation_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_thw_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("person_thw_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_thw_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_thw_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_keine_dekontamination_keine", () =>
    expect(
      getIcon({ grundzeichen: "person", fachaufgabe: "dekontamination" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("person_keine_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_keine_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_keine_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_feuerwehr_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("person_feuerwehr_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_feuerwehr_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_feuerwehr_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_hilfsorganisation_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("person_hilfsorganisation_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_hilfsorganisation_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_hilfsorganisation_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_thw_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("person_thw_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_thw_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_thw_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_keine_rettungswesen_keine", () =>
    expect(
      getIcon({ grundzeichen: "person", fachaufgabe: "rettungswesen" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("person_keine_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_keine_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_keine_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_feuerwehr_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("person_feuerwehr_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_feuerwehr_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_feuerwehr_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_hilfsorganisation_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("person_hilfsorganisation_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_hilfsorganisation_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_hilfsorganisation_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_thw_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("person_thw_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_thw_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_thw_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1 L44,22.5 L22.5,44 L1,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("gebaeude_keine_keine_keine", () =>
    expect(
      getIcon({ grundzeichen: "gebaeude" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g></svg>"`
    ));

  it("gebaeude_keine_keine_staffel", () =>
    expect(
      getIcon({ grundzeichen: "gebaeude", einheit: "staffel" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_keine_keine_gruppe", () =>
    expect(
      getIcon({ grundzeichen: "gebaeude", einheit: "gruppe" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_keine_keine_bereitschaft", () =>
    expect(
      getIcon({ grundzeichen: "gebaeude", einheit: "bereitschaft" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_feuerwehr_keine_keine", () =>
    expect(
      getIcon({ grundzeichen: "gebaeude", organisation: "feuerwehr" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_hilfsorganisation_keine_keine", () =>
    expect(
      getIcon({ grundzeichen: "gebaeude", organisation: "hilfsorganisation" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_thw_keine_keine", () =>
    expect(
      getIcon({ grundzeichen: "gebaeude", organisation: "thw" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g></svg>"`
    ));

  it("gebaeude_thw_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "thw",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_thw_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "thw",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_thw_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "thw",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_keine_brandbekaempfung_keine", () =>
    expect(
      getIcon({ grundzeichen: "gebaeude", fachaufgabe: "brandbekaempfung" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g></svg>"`
    ));

  it("gebaeude_keine_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_keine_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_keine_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_feuerwehr_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_hilfsorganisation_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_thw_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g></svg>"`
    ));

  it("gebaeude_thw_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_thw_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_thw_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_keine_dekontamination_keine", () =>
    expect(
      getIcon({ grundzeichen: "gebaeude", fachaufgabe: "dekontamination" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("gebaeude_keine_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_keine_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_keine_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_feuerwehr_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("gebaeude_feuerwehr_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_hilfsorganisation_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_thw_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("gebaeude_thw_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_thw_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_thw_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_keine_rettungswesen_keine", () =>
    expect(
      getIcon({ grundzeichen: "gebaeude", fachaufgabe: "rettungswesen" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g></svg>"`
    ));

  it("gebaeude_keine_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_keine_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_keine_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_feuerwehr_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_hilfsorganisation_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_thw_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g></svg>"`
    ));

  it("gebaeude_thw_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_thw_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_thw_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("fahrzeug_keine_keine_keine", () =>
    expect(
      getIcon({ grundzeichen: "fahrzeug" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></svg>"`
    ));

  it("fahrzeug_keine_keine_staffel", () =>
    expect(
      getIcon({ grundzeichen: "fahrzeug", einheit: "staffel" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_keine_keine_gruppe", () =>
    expect(
      getIcon({ grundzeichen: "fahrzeug", einheit: "gruppe" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_keine_keine_bereitschaft", () =>
    expect(
      getIcon({ grundzeichen: "fahrzeug", einheit: "bereitschaft" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("fahrzeug_feuerwehr_keine_keine", () =>
    expect(
      getIcon({ grundzeichen: "fahrzeug", organisation: "feuerwehr" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /></svg>"`
    ));

  it("fahrzeug_feuerwehr_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_keine_keine", () =>
    expect(
      getIcon({ grundzeichen: "fahrzeug", organisation: "hilfsorganisation" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("fahrzeug_thw_keine_keine", () =>
    expect(
      getIcon({ grundzeichen: "fahrzeug", organisation: "thw" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /></svg>"`
    ));

  it("fahrzeug_thw_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "thw",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_thw_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "thw",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_thw_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "thw",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("fahrzeug_keine_brandbekaempfung_keine", () =>
    expect(
      getIcon({ grundzeichen: "fahrzeug", fachaufgabe: "brandbekaempfung" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g></svg>"`
    ));

  it("fahrzeug_keine_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_keine_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_keine_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("fahrzeug_feuerwehr_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("fahrzeug_thw_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g></svg>"`
    ));

  it("fahrzeug_thw_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_thw_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_thw_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("fahrzeug_keine_dekontamination_keine", () =>
    expect(
      getIcon({ grundzeichen: "fahrzeug", fachaufgabe: "dekontamination" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("fahrzeug_keine_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_keine_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_keine_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("fahrzeug_feuerwehr_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("fahrzeug_thw_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("fahrzeug_thw_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_thw_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_thw_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("fahrzeug_keine_rettungswesen_keine", () =>
    expect(
      getIcon({ grundzeichen: "fahrzeug", fachaufgabe: "rettungswesen" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g></svg>"`
    ));

  it("fahrzeug_keine_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_keine_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_keine_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("fahrzeug_feuerwehr_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("fahrzeug_thw_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g></svg>"`
    ));

  it("fahrzeug_thw_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_thw_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_thw_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs /><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_keine_keine", () =>
    expect(
      getIcon({ grundzeichen: "kraftfahrzeug-landgebunden" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_keine_gruppe", () =>
    expect(
      getIcon({ grundzeichen: "kraftfahrzeug-landgebunden", einheit: "gruppe" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_keine_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_keine_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "hilfsorganisation",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "hilfsorganisation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "hilfsorganisation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "hilfsorganisation",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_keine_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_keine_keine", () =>
    expect(
      getIcon({ grundzeichen: "kraftfahrzeug-gelaendegaengig" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_keine_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_keine_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "hilfsorganisation",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "hilfsorganisation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "hilfsorganisation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "hilfsorganisation",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_keine_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_keine_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_keine_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_keine_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_brandbekaempfung_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_brandbekaempfung_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_brandbekaempfung_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M74,1 L50,22.5 L74,44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_dekontamination_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_dekontamination_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_dekontamination_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_dekontamination_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_rettungswesen_keine", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_rettungswesen_staffel", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_rettungswesen_gruppe", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_rettungswesen_bereitschaft", () =>
    expect(
      getIcon({
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M1,22.5 H74 M37.5,1 V44\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));
});
