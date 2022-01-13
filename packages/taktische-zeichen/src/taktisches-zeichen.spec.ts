import { promises as fs } from "fs";
import * as formatXml from "prettify-xml";
import { erzeugeTaktischesZeichen } from "./taktisches-zeichen";
import { type TaktischesZeichen } from "./types";

async function getIcon(name: string, descriptor: TaktischesZeichen) {
  const { svg } = erzeugeTaktischesZeichen(descriptor);
  await fs.mkdir("test-icons", { recursive: true });
  await fs.writeFile(`test-icons/${name}.svg`, formatXml(svg), "utf8");
  return svg;
}

describe("icon", () => {
  it("taktische-formation_keine_keine_keine", () =>
    expect(
      getIcon("taktische-formation_keine_keine_keine", {
        grundzeichen: "taktische-formation",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" /></svg>"`
    ));

  it("taktische-formation_keine_keine_staffel", () =>
    expect(
      getIcon("taktische-formation_keine_keine_staffel", {
        grundzeichen: "taktische-formation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_keine_keine_gruppe", () =>
    expect(
      getIcon("taktische-formation_keine_keine_gruppe", {
        grundzeichen: "taktische-formation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" /><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_keine_keine_bereitschaft", () =>
    expect(
      getIcon("taktische-formation_keine_keine_bereitschaft", {
        grundzeichen: "taktische-formation",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_feuerwehr_keine_keine", () =>
    expect(
      getIcon("taktische-formation_feuerwehr_keine_keine", {
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /></svg>"`
    ));

  it("taktische-formation_feuerwehr_keine_staffel", () =>
    expect(
      getIcon("taktische-formation_feuerwehr_keine_staffel", {
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_keine_gruppe", () =>
    expect(
      getIcon("taktische-formation_feuerwehr_keine_gruppe", {
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_keine_bereitschaft", () =>
    expect(
      getIcon("taktische-formation_feuerwehr_keine_bereitschaft", {
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_keine_keine", () =>
    expect(
      getIcon("taktische-formation_hilfsorganisation_keine_keine", {
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_keine_staffel", () =>
    expect(
      getIcon("taktische-formation_hilfsorganisation_keine_staffel", {
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_keine_gruppe", () =>
    expect(
      getIcon("taktische-formation_hilfsorganisation_keine_gruppe", {
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_keine_bereitschaft", () =>
    expect(
      getIcon("taktische-formation_hilfsorganisation_keine_bereitschaft", {
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_thw_keine_keine", () =>
    expect(
      getIcon("taktische-formation_thw_keine_keine", {
        grundzeichen: "taktische-formation",
        organisation: "thw",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /></svg>"`
    ));

  it("taktische-formation_thw_keine_staffel", () =>
    expect(
      getIcon("taktische-formation_thw_keine_staffel", {
        grundzeichen: "taktische-formation",
        organisation: "thw",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_thw_keine_gruppe", () =>
    expect(
      getIcon("taktische-formation_thw_keine_gruppe", {
        grundzeichen: "taktische-formation",
        organisation: "thw",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_thw_keine_bereitschaft", () =>
    expect(
      getIcon("taktische-formation_thw_keine_bereitschaft", {
        grundzeichen: "taktische-formation",
        organisation: "thw",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_keine_brandbekaempfung_keine", () =>
    expect(
      getIcon("taktische-formation_keine_brandbekaempfung_keine", {
        grundzeichen: "taktische-formation",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("taktische-formation_keine_brandbekaempfung_staffel", () =>
    expect(
      getIcon("taktische-formation_keine_brandbekaempfung_staffel", {
        grundzeichen: "taktische-formation",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_keine_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("taktische-formation_keine_brandbekaempfung_gruppe", {
        grundzeichen: "taktische-formation",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_keine_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("taktische-formation_keine_brandbekaempfung_bereitschaft", {
        grundzeichen: "taktische-formation",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_feuerwehr_brandbekaempfung_keine", () =>
    expect(
      getIcon("taktische-formation_feuerwehr_brandbekaempfung_keine", {
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_brandbekaempfung_staffel", () =>
    expect(
      getIcon("taktische-formation_feuerwehr_brandbekaempfung_staffel", {
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("taktische-formation_feuerwehr_brandbekaempfung_gruppe", {
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("taktische-formation_feuerwehr_brandbekaempfung_bereitschaft", {
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_brandbekaempfung_keine", () =>
    expect(
      getIcon("taktische-formation_hilfsorganisation_brandbekaempfung_keine", {
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_brandbekaempfung_staffel", () =>
    expect(
      getIcon(
        "taktische-formation_hilfsorganisation_brandbekaempfung_staffel",
        {
          grundzeichen: "taktische-formation",
          organisation: "hilfsorganisation",
          fachaufgabe: "brandbekaempfung",
          einheit: "staffel",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("taktische-formation_hilfsorganisation_brandbekaempfung_gruppe", {
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon(
        "taktische-formation_hilfsorganisation_brandbekaempfung_bereitschaft",
        {
          grundzeichen: "taktische-formation",
          organisation: "hilfsorganisation",
          fachaufgabe: "brandbekaempfung",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_thw_brandbekaempfung_keine", () =>
    expect(
      getIcon("taktische-formation_thw_brandbekaempfung_keine", {
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("taktische-formation_thw_brandbekaempfung_staffel", () =>
    expect(
      getIcon("taktische-formation_thw_brandbekaempfung_staffel", {
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_thw_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("taktische-formation_thw_brandbekaempfung_gruppe", {
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_thw_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("taktische-formation_thw_brandbekaempfung_bereitschaft", {
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_keine_dekontamination_keine", () =>
    expect(
      getIcon("taktische-formation_keine_dekontamination_keine", {
        grundzeichen: "taktische-formation",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("taktische-formation_keine_dekontamination_staffel", () =>
    expect(
      getIcon("taktische-formation_keine_dekontamination_staffel", {
        grundzeichen: "taktische-formation",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_keine_dekontamination_gruppe", () =>
    expect(
      getIcon("taktische-formation_keine_dekontamination_gruppe", {
        grundzeichen: "taktische-formation",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_keine_dekontamination_bereitschaft", () =>
    expect(
      getIcon("taktische-formation_keine_dekontamination_bereitschaft", {
        grundzeichen: "taktische-formation",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_feuerwehr_dekontamination_keine", () =>
    expect(
      getIcon("taktische-formation_feuerwehr_dekontamination_keine", {
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_dekontamination_staffel", () =>
    expect(
      getIcon("taktische-formation_feuerwehr_dekontamination_staffel", {
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_dekontamination_gruppe", () =>
    expect(
      getIcon("taktische-formation_feuerwehr_dekontamination_gruppe", {
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_dekontamination_bereitschaft", () =>
    expect(
      getIcon("taktische-formation_feuerwehr_dekontamination_bereitschaft", {
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_dekontamination_keine", () =>
    expect(
      getIcon("taktische-formation_hilfsorganisation_dekontamination_keine", {
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_dekontamination_staffel", () =>
    expect(
      getIcon("taktische-formation_hilfsorganisation_dekontamination_staffel", {
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_dekontamination_gruppe", () =>
    expect(
      getIcon("taktische-formation_hilfsorganisation_dekontamination_gruppe", {
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_dekontamination_bereitschaft", () =>
    expect(
      getIcon(
        "taktische-formation_hilfsorganisation_dekontamination_bereitschaft",
        {
          grundzeichen: "taktische-formation",
          organisation: "hilfsorganisation",
          fachaufgabe: "dekontamination",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_thw_dekontamination_keine", () =>
    expect(
      getIcon("taktische-formation_thw_dekontamination_keine", {
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("taktische-formation_thw_dekontamination_staffel", () =>
    expect(
      getIcon("taktische-formation_thw_dekontamination_staffel", {
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_thw_dekontamination_gruppe", () =>
    expect(
      getIcon("taktische-formation_thw_dekontamination_gruppe", {
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_thw_dekontamination_bereitschaft", () =>
    expect(
      getIcon("taktische-formation_thw_dekontamination_bereitschaft", {
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_keine_rettungswesen_keine", () =>
    expect(
      getIcon("taktische-formation_keine_rettungswesen_keine", {
        grundzeichen: "taktische-formation",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("taktische-formation_keine_rettungswesen_staffel", () =>
    expect(
      getIcon("taktische-formation_keine_rettungswesen_staffel", {
        grundzeichen: "taktische-formation",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_keine_rettungswesen_gruppe", () =>
    expect(
      getIcon("taktische-formation_keine_rettungswesen_gruppe", {
        grundzeichen: "taktische-formation",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_keine_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("taktische-formation_keine_rettungswesen_bereitschaft", {
        grundzeichen: "taktische-formation",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_feuerwehr_rettungswesen_keine", () =>
    expect(
      getIcon("taktische-formation_feuerwehr_rettungswesen_keine", {
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_rettungswesen_staffel", () =>
    expect(
      getIcon("taktische-formation_feuerwehr_rettungswesen_staffel", {
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_rettungswesen_gruppe", () =>
    expect(
      getIcon("taktische-formation_feuerwehr_rettungswesen_gruppe", {
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_feuerwehr_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("taktische-formation_feuerwehr_rettungswesen_bereitschaft", {
        grundzeichen: "taktische-formation",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_rettungswesen_keine", () =>
    expect(
      getIcon("taktische-formation_hilfsorganisation_rettungswesen_keine", {
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_rettungswesen_staffel", () =>
    expect(
      getIcon("taktische-formation_hilfsorganisation_rettungswesen_staffel", {
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_rettungswesen_gruppe", () =>
    expect(
      getIcon("taktische-formation_hilfsorganisation_rettungswesen_gruppe", {
        grundzeichen: "taktische-formation",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_hilfsorganisation_rettungswesen_bereitschaft", () =>
    expect(
      getIcon(
        "taktische-formation_hilfsorganisation_rettungswesen_bereitschaft",
        {
          grundzeichen: "taktische-formation",
          organisation: "hilfsorganisation",
          fachaufgabe: "rettungswesen",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("taktische-formation_thw_rettungswesen_keine", () =>
    expect(
      getIcon("taktische-formation_thw_rettungswesen_keine", {
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("taktische-formation_thw_rettungswesen_staffel", () =>
    expect(
      getIcon("taktische-formation_thw_rettungswesen_staffel", {
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_thw_rettungswesen_gruppe", () =>
    expect(
      getIcon("taktische-formation_thw_rettungswesen_gruppe", {
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("taktische-formation_thw_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("taktische-formation_thw_rettungswesen_bereitschaft", {
        grundzeichen: "taktische-formation",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_keine_keine_keine", () =>
    expect(
      getIcon("befehlsstelle_keine_keine_keine", {
        grundzeichen: "befehlsstelle",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" /></svg>"`
    ));

  it("befehlsstelle_keine_keine_staffel", () =>
    expect(
      getIcon("befehlsstelle_keine_keine_staffel", {
        grundzeichen: "befehlsstelle",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_keine_keine_gruppe", () =>
    expect(
      getIcon("befehlsstelle_keine_keine_gruppe", {
        grundzeichen: "befehlsstelle",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" /><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_keine_keine_bereitschaft", () =>
    expect(
      getIcon("befehlsstelle_keine_keine_bereitschaft", {
        grundzeichen: "befehlsstelle",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_feuerwehr_keine_keine", () =>
    expect(
      getIcon("befehlsstelle_feuerwehr_keine_keine", {
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /></svg>"`
    ));

  it("befehlsstelle_feuerwehr_keine_staffel", () =>
    expect(
      getIcon("befehlsstelle_feuerwehr_keine_staffel", {
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_keine_gruppe", () =>
    expect(
      getIcon("befehlsstelle_feuerwehr_keine_gruppe", {
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_keine_bereitschaft", () =>
    expect(
      getIcon("befehlsstelle_feuerwehr_keine_bereitschaft", {
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_keine_keine", () =>
    expect(
      getIcon("befehlsstelle_hilfsorganisation_keine_keine", {
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_keine_staffel", () =>
    expect(
      getIcon("befehlsstelle_hilfsorganisation_keine_staffel", {
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_keine_gruppe", () =>
    expect(
      getIcon("befehlsstelle_hilfsorganisation_keine_gruppe", {
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_keine_bereitschaft", () =>
    expect(
      getIcon("befehlsstelle_hilfsorganisation_keine_bereitschaft", {
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_thw_keine_keine", () =>
    expect(
      getIcon("befehlsstelle_thw_keine_keine", {
        grundzeichen: "befehlsstelle",
        organisation: "thw",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /></svg>"`
    ));

  it("befehlsstelle_thw_keine_staffel", () =>
    expect(
      getIcon("befehlsstelle_thw_keine_staffel", {
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_thw_keine_gruppe", () =>
    expect(
      getIcon("befehlsstelle_thw_keine_gruppe", {
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_thw_keine_bereitschaft", () =>
    expect(
      getIcon("befehlsstelle_thw_keine_bereitschaft", {
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_keine_brandbekaempfung_keine", () =>
    expect(
      getIcon("befehlsstelle_keine_brandbekaempfung_keine", {
        grundzeichen: "befehlsstelle",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("befehlsstelle_keine_brandbekaempfung_staffel", () =>
    expect(
      getIcon("befehlsstelle_keine_brandbekaempfung_staffel", {
        grundzeichen: "befehlsstelle",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_keine_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("befehlsstelle_keine_brandbekaempfung_gruppe", {
        grundzeichen: "befehlsstelle",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_keine_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("befehlsstelle_keine_brandbekaempfung_bereitschaft", {
        grundzeichen: "befehlsstelle",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_feuerwehr_brandbekaempfung_keine", () =>
    expect(
      getIcon("befehlsstelle_feuerwehr_brandbekaempfung_keine", {
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_brandbekaempfung_staffel", () =>
    expect(
      getIcon("befehlsstelle_feuerwehr_brandbekaempfung_staffel", {
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("befehlsstelle_feuerwehr_brandbekaempfung_gruppe", {
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("befehlsstelle_feuerwehr_brandbekaempfung_bereitschaft", {
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_brandbekaempfung_keine", () =>
    expect(
      getIcon("befehlsstelle_hilfsorganisation_brandbekaempfung_keine", {
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_brandbekaempfung_staffel", () =>
    expect(
      getIcon("befehlsstelle_hilfsorganisation_brandbekaempfung_staffel", {
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("befehlsstelle_hilfsorganisation_brandbekaempfung_gruppe", {
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("befehlsstelle_hilfsorganisation_brandbekaempfung_bereitschaft", {
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_thw_brandbekaempfung_keine", () =>
    expect(
      getIcon("befehlsstelle_thw_brandbekaempfung_keine", {
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("befehlsstelle_thw_brandbekaempfung_staffel", () =>
    expect(
      getIcon("befehlsstelle_thw_brandbekaempfung_staffel", {
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_thw_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("befehlsstelle_thw_brandbekaempfung_gruppe", {
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_thw_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("befehlsstelle_thw_brandbekaempfung_bereitschaft", {
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_keine_dekontamination_keine", () =>
    expect(
      getIcon("befehlsstelle_keine_dekontamination_keine", {
        grundzeichen: "befehlsstelle",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("befehlsstelle_keine_dekontamination_staffel", () =>
    expect(
      getIcon("befehlsstelle_keine_dekontamination_staffel", {
        grundzeichen: "befehlsstelle",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_keine_dekontamination_gruppe", () =>
    expect(
      getIcon("befehlsstelle_keine_dekontamination_gruppe", {
        grundzeichen: "befehlsstelle",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_keine_dekontamination_bereitschaft", () =>
    expect(
      getIcon("befehlsstelle_keine_dekontamination_bereitschaft", {
        grundzeichen: "befehlsstelle",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_feuerwehr_dekontamination_keine", () =>
    expect(
      getIcon("befehlsstelle_feuerwehr_dekontamination_keine", {
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_dekontamination_staffel", () =>
    expect(
      getIcon("befehlsstelle_feuerwehr_dekontamination_staffel", {
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_dekontamination_gruppe", () =>
    expect(
      getIcon("befehlsstelle_feuerwehr_dekontamination_gruppe", {
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_dekontamination_bereitschaft", () =>
    expect(
      getIcon("befehlsstelle_feuerwehr_dekontamination_bereitschaft", {
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_dekontamination_keine", () =>
    expect(
      getIcon("befehlsstelle_hilfsorganisation_dekontamination_keine", {
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_dekontamination_staffel", () =>
    expect(
      getIcon("befehlsstelle_hilfsorganisation_dekontamination_staffel", {
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_dekontamination_gruppe", () =>
    expect(
      getIcon("befehlsstelle_hilfsorganisation_dekontamination_gruppe", {
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_dekontamination_bereitschaft", () =>
    expect(
      getIcon("befehlsstelle_hilfsorganisation_dekontamination_bereitschaft", {
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_thw_dekontamination_keine", () =>
    expect(
      getIcon("befehlsstelle_thw_dekontamination_keine", {
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("befehlsstelle_thw_dekontamination_staffel", () =>
    expect(
      getIcon("befehlsstelle_thw_dekontamination_staffel", {
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_thw_dekontamination_gruppe", () =>
    expect(
      getIcon("befehlsstelle_thw_dekontamination_gruppe", {
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_thw_dekontamination_bereitschaft", () =>
    expect(
      getIcon("befehlsstelle_thw_dekontamination_bereitschaft", {
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_keine_rettungswesen_keine", () =>
    expect(
      getIcon("befehlsstelle_keine_rettungswesen_keine", {
        grundzeichen: "befehlsstelle",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("befehlsstelle_keine_rettungswesen_staffel", () =>
    expect(
      getIcon("befehlsstelle_keine_rettungswesen_staffel", {
        grundzeichen: "befehlsstelle",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_keine_rettungswesen_gruppe", () =>
    expect(
      getIcon("befehlsstelle_keine_rettungswesen_gruppe", {
        grundzeichen: "befehlsstelle",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_keine_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("befehlsstelle_keine_rettungswesen_bereitschaft", {
        grundzeichen: "befehlsstelle",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_feuerwehr_rettungswesen_keine", () =>
    expect(
      getIcon("befehlsstelle_feuerwehr_rettungswesen_keine", {
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_rettungswesen_staffel", () =>
    expect(
      getIcon("befehlsstelle_feuerwehr_rettungswesen_staffel", {
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_rettungswesen_gruppe", () =>
    expect(
      getIcon("befehlsstelle_feuerwehr_rettungswesen_gruppe", {
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_feuerwehr_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("befehlsstelle_feuerwehr_rettungswesen_bereitschaft", {
        grundzeichen: "befehlsstelle",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_rettungswesen_keine", () =>
    expect(
      getIcon("befehlsstelle_hilfsorganisation_rettungswesen_keine", {
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_rettungswesen_staffel", () =>
    expect(
      getIcon("befehlsstelle_hilfsorganisation_rettungswesen_staffel", {
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_rettungswesen_gruppe", () =>
    expect(
      getIcon("befehlsstelle_hilfsorganisation_rettungswesen_gruppe", {
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_hilfsorganisation_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("befehlsstelle_hilfsorganisation_rettungswesen_bereitschaft", {
        grundzeichen: "befehlsstelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("befehlsstelle_thw_rettungswesen_keine", () =>
    expect(
      getIcon("befehlsstelle_thw_rettungswesen_keine", {
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("befehlsstelle_thw_rettungswesen_staffel", () =>
    expect(
      getIcon("befehlsstelle_thw_rettungswesen_staffel", {
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 69\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_thw_rettungswesen_gruppe", () =>
    expect(
      getIcon("befehlsstelle_thw_rettungswesen_gruppe", {
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 62\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("befehlsstelle_thw_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("befehlsstelle_thw_rettungswesen_bereitschaft", {
        grundzeichen: "befehlsstelle",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 64\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,55 V1 H74 V44 H1\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("stelle_keine_keine_keine", () =>
    expect(
      getIcon("stelle_keine_keine_keine", { grundzeichen: "stelle" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></svg>"`
    ));

  it("stelle_keine_keine_staffel", () =>
    expect(
      getIcon("stelle_keine_keine_staffel", {
        grundzeichen: "stelle",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_keine_keine_gruppe", () =>
    expect(
      getIcon("stelle_keine_keine_gruppe", {
        grundzeichen: "stelle",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_keine_keine_bereitschaft", () =>
    expect(
      getIcon("stelle_keine_keine_bereitschaft", {
        grundzeichen: "stelle",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_feuerwehr_keine_keine", () =>
    expect(
      getIcon("stelle_feuerwehr_keine_keine", {
        grundzeichen: "stelle",
        organisation: "feuerwehr",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /></svg>"`
    ));

  it("stelle_feuerwehr_keine_staffel", () =>
    expect(
      getIcon("stelle_feuerwehr_keine_staffel", {
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_feuerwehr_keine_gruppe", () =>
    expect(
      getIcon("stelle_feuerwehr_keine_gruppe", {
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_feuerwehr_keine_bereitschaft", () =>
    expect(
      getIcon("stelle_feuerwehr_keine_bereitschaft", {
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_hilfsorganisation_keine_keine", () =>
    expect(
      getIcon("stelle_hilfsorganisation_keine_keine", {
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /></svg>"`
    ));

  it("stelle_hilfsorganisation_keine_staffel", () =>
    expect(
      getIcon("stelle_hilfsorganisation_keine_staffel", {
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_hilfsorganisation_keine_gruppe", () =>
    expect(
      getIcon("stelle_hilfsorganisation_keine_gruppe", {
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_hilfsorganisation_keine_bereitschaft", () =>
    expect(
      getIcon("stelle_hilfsorganisation_keine_bereitschaft", {
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_thw_keine_keine", () =>
    expect(
      getIcon("stelle_thw_keine_keine", {
        grundzeichen: "stelle",
        organisation: "thw",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /></svg>"`
    ));

  it("stelle_thw_keine_staffel", () =>
    expect(
      getIcon("stelle_thw_keine_staffel", {
        grundzeichen: "stelle",
        organisation: "thw",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_thw_keine_gruppe", () =>
    expect(
      getIcon("stelle_thw_keine_gruppe", {
        grundzeichen: "stelle",
        organisation: "thw",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_thw_keine_bereitschaft", () =>
    expect(
      getIcon("stelle_thw_keine_bereitschaft", {
        grundzeichen: "stelle",
        organisation: "thw",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_keine_brandbekaempfung_keine", () =>
    expect(
      getIcon("stelle_keine_brandbekaempfung_keine", {
        grundzeichen: "stelle",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("stelle_keine_brandbekaempfung_staffel", () =>
    expect(
      getIcon("stelle_keine_brandbekaempfung_staffel", {
        grundzeichen: "stelle",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_keine_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("stelle_keine_brandbekaempfung_gruppe", {
        grundzeichen: "stelle",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_keine_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("stelle_keine_brandbekaempfung_bereitschaft", {
        grundzeichen: "stelle",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_feuerwehr_brandbekaempfung_keine", () =>
    expect(
      getIcon("stelle_feuerwehr_brandbekaempfung_keine", {
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("stelle_feuerwehr_brandbekaempfung_staffel", () =>
    expect(
      getIcon("stelle_feuerwehr_brandbekaempfung_staffel", {
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_feuerwehr_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("stelle_feuerwehr_brandbekaempfung_gruppe", {
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_feuerwehr_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("stelle_feuerwehr_brandbekaempfung_bereitschaft", {
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_hilfsorganisation_brandbekaempfung_keine", () =>
    expect(
      getIcon("stelle_hilfsorganisation_brandbekaempfung_keine", {
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("stelle_hilfsorganisation_brandbekaempfung_staffel", () =>
    expect(
      getIcon("stelle_hilfsorganisation_brandbekaempfung_staffel", {
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_hilfsorganisation_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("stelle_hilfsorganisation_brandbekaempfung_gruppe", {
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_hilfsorganisation_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("stelle_hilfsorganisation_brandbekaempfung_bereitschaft", {
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_thw_brandbekaempfung_keine", () =>
    expect(
      getIcon("stelle_thw_brandbekaempfung_keine", {
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("stelle_thw_brandbekaempfung_staffel", () =>
    expect(
      getIcon("stelle_thw_brandbekaempfung_staffel", {
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_thw_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("stelle_thw_brandbekaempfung_gruppe", {
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_thw_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("stelle_thw_brandbekaempfung_bereitschaft", {
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_keine_dekontamination_keine", () =>
    expect(
      getIcon("stelle_keine_dekontamination_keine", {
        grundzeichen: "stelle",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("stelle_keine_dekontamination_staffel", () =>
    expect(
      getIcon("stelle_keine_dekontamination_staffel", {
        grundzeichen: "stelle",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_keine_dekontamination_gruppe", () =>
    expect(
      getIcon("stelle_keine_dekontamination_gruppe", {
        grundzeichen: "stelle",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_keine_dekontamination_bereitschaft", () =>
    expect(
      getIcon("stelle_keine_dekontamination_bereitschaft", {
        grundzeichen: "stelle",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_feuerwehr_dekontamination_keine", () =>
    expect(
      getIcon("stelle_feuerwehr_dekontamination_keine", {
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("stelle_feuerwehr_dekontamination_staffel", () =>
    expect(
      getIcon("stelle_feuerwehr_dekontamination_staffel", {
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_feuerwehr_dekontamination_gruppe", () =>
    expect(
      getIcon("stelle_feuerwehr_dekontamination_gruppe", {
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_feuerwehr_dekontamination_bereitschaft", () =>
    expect(
      getIcon("stelle_feuerwehr_dekontamination_bereitschaft", {
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_hilfsorganisation_dekontamination_keine", () =>
    expect(
      getIcon("stelle_hilfsorganisation_dekontamination_keine", {
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("stelle_hilfsorganisation_dekontamination_staffel", () =>
    expect(
      getIcon("stelle_hilfsorganisation_dekontamination_staffel", {
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_hilfsorganisation_dekontamination_gruppe", () =>
    expect(
      getIcon("stelle_hilfsorganisation_dekontamination_gruppe", {
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_hilfsorganisation_dekontamination_bereitschaft", () =>
    expect(
      getIcon("stelle_hilfsorganisation_dekontamination_bereitschaft", {
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_thw_dekontamination_keine", () =>
    expect(
      getIcon("stelle_thw_dekontamination_keine", {
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("stelle_thw_dekontamination_staffel", () =>
    expect(
      getIcon("stelle_thw_dekontamination_staffel", {
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_thw_dekontamination_gruppe", () =>
    expect(
      getIcon("stelle_thw_dekontamination_gruppe", {
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_thw_dekontamination_bereitschaft", () =>
    expect(
      getIcon("stelle_thw_dekontamination_bereitschaft", {
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_keine_rettungswesen_keine", () =>
    expect(
      getIcon("stelle_keine_rettungswesen_keine", {
        grundzeichen: "stelle",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("stelle_keine_rettungswesen_staffel", () =>
    expect(
      getIcon("stelle_keine_rettungswesen_staffel", {
        grundzeichen: "stelle",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_keine_rettungswesen_gruppe", () =>
    expect(
      getIcon("stelle_keine_rettungswesen_gruppe", {
        grundzeichen: "stelle",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_keine_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("stelle_keine_rettungswesen_bereitschaft", {
        grundzeichen: "stelle",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_feuerwehr_rettungswesen_keine", () =>
    expect(
      getIcon("stelle_feuerwehr_rettungswesen_keine", {
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("stelle_feuerwehr_rettungswesen_staffel", () =>
    expect(
      getIcon("stelle_feuerwehr_rettungswesen_staffel", {
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_feuerwehr_rettungswesen_gruppe", () =>
    expect(
      getIcon("stelle_feuerwehr_rettungswesen_gruppe", {
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_feuerwehr_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("stelle_feuerwehr_rettungswesen_bereitschaft", {
        grundzeichen: "stelle",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#cc0000\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_hilfsorganisation_rettungswesen_keine", () =>
    expect(
      getIcon("stelle_hilfsorganisation_rettungswesen_keine", {
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("stelle_hilfsorganisation_rettungswesen_staffel", () =>
    expect(
      getIcon("stelle_hilfsorganisation_rettungswesen_staffel", {
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_hilfsorganisation_rettungswesen_gruppe", () =>
    expect(
      getIcon("stelle_hilfsorganisation_rettungswesen_gruppe", {
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_hilfsorganisation_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("stelle_hilfsorganisation_rettungswesen_bereitschaft", {
        grundzeichen: "stelle",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#ffffff\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("stelle_thw_rettungswesen_keine", () =>
    expect(
      getIcon("stelle_thw_rettungswesen_keine", {
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("stelle_thw_rettungswesen_staffel", () =>
    expect(
      getIcon("stelle_thw_rettungswesen_staffel", {
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_thw_rettungswesen_gruppe", () =>
    expect(
      getIcon("stelle_thw_rettungswesen_gruppe", {
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("stelle_thw_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("stelle_thw_rettungswesen_bereitschaft", {
        grundzeichen: "stelle",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><circle cx=\\"22.5\\" cy=\\"22.5\\" r=\\"21.5\\" /></clipPath></defs><circle cx=\\"22.5\\" cy=\\"22.5\\" fill=\\"#0000dd\\" r=\\"21.5\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_keine_keine_keine", () =>
    expect(
      getIcon("person_keine_keine_keine", { grundzeichen: "person" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></svg>"`
    ));

  it("person_keine_keine_staffel", () =>
    expect(
      getIcon("person_keine_keine_staffel", {
        grundzeichen: "person",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_keine_keine_gruppe", () =>
    expect(
      getIcon("person_keine_keine_gruppe", {
        grundzeichen: "person",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_keine_keine_bereitschaft", () =>
    expect(
      getIcon("person_keine_keine_bereitschaft", {
        grundzeichen: "person",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_feuerwehr_keine_keine", () =>
    expect(
      getIcon("person_feuerwehr_keine_keine", {
        grundzeichen: "person",
        organisation: "feuerwehr",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#cc0000\\" /></svg>"`
    ));

  it("person_feuerwehr_keine_staffel", () =>
    expect(
      getIcon("person_feuerwehr_keine_staffel", {
        grundzeichen: "person",
        organisation: "feuerwehr",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#cc0000\\" /><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_feuerwehr_keine_gruppe", () =>
    expect(
      getIcon("person_feuerwehr_keine_gruppe", {
        grundzeichen: "person",
        organisation: "feuerwehr",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#cc0000\\" /><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_feuerwehr_keine_bereitschaft", () =>
    expect(
      getIcon("person_feuerwehr_keine_bereitschaft", {
        grundzeichen: "person",
        organisation: "feuerwehr",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_hilfsorganisation_keine_keine", () =>
    expect(
      getIcon("person_hilfsorganisation_keine_keine", {
        grundzeichen: "person",
        organisation: "hilfsorganisation",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#ffffff\\" /></svg>"`
    ));

  it("person_hilfsorganisation_keine_staffel", () =>
    expect(
      getIcon("person_hilfsorganisation_keine_staffel", {
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#ffffff\\" /><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_hilfsorganisation_keine_gruppe", () =>
    expect(
      getIcon("person_hilfsorganisation_keine_gruppe", {
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#ffffff\\" /><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_hilfsorganisation_keine_bereitschaft", () =>
    expect(
      getIcon("person_hilfsorganisation_keine_bereitschaft", {
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_thw_keine_keine", () =>
    expect(
      getIcon("person_thw_keine_keine", {
        grundzeichen: "person",
        organisation: "thw",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#0000dd\\" /></svg>"`
    ));

  it("person_thw_keine_staffel", () =>
    expect(
      getIcon("person_thw_keine_staffel", {
        grundzeichen: "person",
        organisation: "thw",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#0000dd\\" /><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_thw_keine_gruppe", () =>
    expect(
      getIcon("person_thw_keine_gruppe", {
        grundzeichen: "person",
        organisation: "thw",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#0000dd\\" /><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_thw_keine_bereitschaft", () =>
    expect(
      getIcon("person_thw_keine_bereitschaft", {
        grundzeichen: "person",
        organisation: "thw",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_keine_brandbekaempfung_keine", () =>
    expect(
      getIcon("person_keine_brandbekaempfung_keine", {
        grundzeichen: "person",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("person_keine_brandbekaempfung_staffel", () =>
    expect(
      getIcon("person_keine_brandbekaempfung_staffel", {
        grundzeichen: "person",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_keine_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("person_keine_brandbekaempfung_gruppe", {
        grundzeichen: "person",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_keine_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("person_keine_brandbekaempfung_bereitschaft", {
        grundzeichen: "person",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_feuerwehr_brandbekaempfung_keine", () =>
    expect(
      getIcon("person_feuerwehr_brandbekaempfung_keine", {
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("person_feuerwehr_brandbekaempfung_staffel", () =>
    expect(
      getIcon("person_feuerwehr_brandbekaempfung_staffel", {
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_feuerwehr_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("person_feuerwehr_brandbekaempfung_gruppe", {
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_feuerwehr_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("person_feuerwehr_brandbekaempfung_bereitschaft", {
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_hilfsorganisation_brandbekaempfung_keine", () =>
    expect(
      getIcon("person_hilfsorganisation_brandbekaempfung_keine", {
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("person_hilfsorganisation_brandbekaempfung_staffel", () =>
    expect(
      getIcon("person_hilfsorganisation_brandbekaempfung_staffel", {
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_hilfsorganisation_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("person_hilfsorganisation_brandbekaempfung_gruppe", {
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_hilfsorganisation_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("person_hilfsorganisation_brandbekaempfung_bereitschaft", {
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_thw_brandbekaempfung_keine", () =>
    expect(
      getIcon("person_thw_brandbekaempfung_keine", {
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("person_thw_brandbekaempfung_staffel", () =>
    expect(
      getIcon("person_thw_brandbekaempfung_staffel", {
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_thw_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("person_thw_brandbekaempfung_gruppe", {
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_thw_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("person_thw_brandbekaempfung_bereitschaft", {
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_keine_dekontamination_keine", () =>
    expect(
      getIcon("person_keine_dekontamination_keine", {
        grundzeichen: "person",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("person_keine_dekontamination_staffel", () =>
    expect(
      getIcon("person_keine_dekontamination_staffel", {
        grundzeichen: "person",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_keine_dekontamination_gruppe", () =>
    expect(
      getIcon("person_keine_dekontamination_gruppe", {
        grundzeichen: "person",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_keine_dekontamination_bereitschaft", () =>
    expect(
      getIcon("person_keine_dekontamination_bereitschaft", {
        grundzeichen: "person",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_feuerwehr_dekontamination_keine", () =>
    expect(
      getIcon("person_feuerwehr_dekontamination_keine", {
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("person_feuerwehr_dekontamination_staffel", () =>
    expect(
      getIcon("person_feuerwehr_dekontamination_staffel", {
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_feuerwehr_dekontamination_gruppe", () =>
    expect(
      getIcon("person_feuerwehr_dekontamination_gruppe", {
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_feuerwehr_dekontamination_bereitschaft", () =>
    expect(
      getIcon("person_feuerwehr_dekontamination_bereitschaft", {
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_hilfsorganisation_dekontamination_keine", () =>
    expect(
      getIcon("person_hilfsorganisation_dekontamination_keine", {
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("person_hilfsorganisation_dekontamination_staffel", () =>
    expect(
      getIcon("person_hilfsorganisation_dekontamination_staffel", {
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_hilfsorganisation_dekontamination_gruppe", () =>
    expect(
      getIcon("person_hilfsorganisation_dekontamination_gruppe", {
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_hilfsorganisation_dekontamination_bereitschaft", () =>
    expect(
      getIcon("person_hilfsorganisation_dekontamination_bereitschaft", {
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_thw_dekontamination_keine", () =>
    expect(
      getIcon("person_thw_dekontamination_keine", {
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("person_thw_dekontamination_staffel", () =>
    expect(
      getIcon("person_thw_dekontamination_staffel", {
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_thw_dekontamination_gruppe", () =>
    expect(
      getIcon("person_thw_dekontamination_gruppe", {
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_thw_dekontamination_bereitschaft", () =>
    expect(
      getIcon("person_thw_dekontamination_bereitschaft", {
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(10,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_keine_rettungswesen_keine", () =>
    expect(
      getIcon("person_keine_rettungswesen_keine", {
        grundzeichen: "person",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("person_keine_rettungswesen_staffel", () =>
    expect(
      getIcon("person_keine_rettungswesen_staffel", {
        grundzeichen: "person",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_keine_rettungswesen_gruppe", () =>
    expect(
      getIcon("person_keine_rettungswesen_gruppe", {
        grundzeichen: "person",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_keine_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("person_keine_rettungswesen_bereitschaft", {
        grundzeichen: "person",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_feuerwehr_rettungswesen_keine", () =>
    expect(
      getIcon("person_feuerwehr_rettungswesen_keine", {
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("person_feuerwehr_rettungswesen_staffel", () =>
    expect(
      getIcon("person_feuerwehr_rettungswesen_staffel", {
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_feuerwehr_rettungswesen_gruppe", () =>
    expect(
      getIcon("person_feuerwehr_rettungswesen_gruppe", {
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_feuerwehr_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("person_feuerwehr_rettungswesen_bereitschaft", {
        grundzeichen: "person",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_hilfsorganisation_rettungswesen_keine", () =>
    expect(
      getIcon("person_hilfsorganisation_rettungswesen_keine", {
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("person_hilfsorganisation_rettungswesen_staffel", () =>
    expect(
      getIcon("person_hilfsorganisation_rettungswesen_staffel", {
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_hilfsorganisation_rettungswesen_gruppe", () =>
    expect(
      getIcon("person_hilfsorganisation_rettungswesen_gruppe", {
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_hilfsorganisation_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("person_hilfsorganisation_rettungswesen_bereitschaft", {
        grundzeichen: "person",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("person_thw_rettungswesen_keine", () =>
    expect(
      getIcon("person_thw_rettungswesen_keine", {
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 45 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g></svg>"`
    ));

  it("person_thw_rettungswesen_staffel", () =>
    expect(
      getIcon("person_thw_rettungswesen_staffel", {
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 45 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(19.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_thw_rettungswesen_gruppe", () =>
    expect(
      getIcon("person_thw_rettungswesen_gruppe", {
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 45 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><g fill=\\"black\\" transform=\\"translate(16,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("person_thw_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("person_thw_rettungswesen_bereitschaft", {
        grundzeichen: "person",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 45 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" /></clipPath></defs><path d=\\"M22.5,1.5 L43.5,22.5 L22.5,43.5 L1.5,22.5 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(0,9) scale(0.6)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(20,-9)\\" /></svg>"`
    ));

  it("gebaeude_keine_keine_keine", () =>
    expect(
      getIcon("gebaeude_keine_keine_keine", { grundzeichen: "gebaeude" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g></svg>"`
    ));

  it("gebaeude_keine_keine_staffel", () =>
    expect(
      getIcon("gebaeude_keine_keine_staffel", {
        grundzeichen: "gebaeude",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_keine_keine_gruppe", () =>
    expect(
      getIcon("gebaeude_keine_keine_gruppe", {
        grundzeichen: "gebaeude",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_keine_keine_bereitschaft", () =>
    expect(
      getIcon("gebaeude_keine_keine_bereitschaft", {
        grundzeichen: "gebaeude",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_feuerwehr_keine_keine", () =>
    expect(
      getIcon("gebaeude_feuerwehr_keine_keine", {
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_keine_staffel", () =>
    expect(
      getIcon("gebaeude_feuerwehr_keine_staffel", {
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_keine_gruppe", () =>
    expect(
      getIcon("gebaeude_feuerwehr_keine_gruppe", {
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_keine_bereitschaft", () =>
    expect(
      getIcon("gebaeude_feuerwehr_keine_bereitschaft", {
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_hilfsorganisation_keine_keine", () =>
    expect(
      getIcon("gebaeude_hilfsorganisation_keine_keine", {
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_keine_staffel", () =>
    expect(
      getIcon("gebaeude_hilfsorganisation_keine_staffel", {
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_keine_gruppe", () =>
    expect(
      getIcon("gebaeude_hilfsorganisation_keine_gruppe", {
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_keine_bereitschaft", () =>
    expect(
      getIcon("gebaeude_hilfsorganisation_keine_bereitschaft", {
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_thw_keine_keine", () =>
    expect(
      getIcon("gebaeude_thw_keine_keine", {
        grundzeichen: "gebaeude",
        organisation: "thw",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g></svg>"`
    ));

  it("gebaeude_thw_keine_staffel", () =>
    expect(
      getIcon("gebaeude_thw_keine_staffel", {
        grundzeichen: "gebaeude",
        organisation: "thw",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_thw_keine_gruppe", () =>
    expect(
      getIcon("gebaeude_thw_keine_gruppe", {
        grundzeichen: "gebaeude",
        organisation: "thw",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_thw_keine_bereitschaft", () =>
    expect(
      getIcon("gebaeude_thw_keine_bereitschaft", {
        grundzeichen: "gebaeude",
        organisation: "thw",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_keine_brandbekaempfung_keine", () =>
    expect(
      getIcon("gebaeude_keine_brandbekaempfung_keine", {
        grundzeichen: "gebaeude",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g></svg>"`
    ));

  it("gebaeude_keine_brandbekaempfung_staffel", () =>
    expect(
      getIcon("gebaeude_keine_brandbekaempfung_staffel", {
        grundzeichen: "gebaeude",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_keine_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("gebaeude_keine_brandbekaempfung_gruppe", {
        grundzeichen: "gebaeude",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_keine_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("gebaeude_keine_brandbekaempfung_bereitschaft", {
        grundzeichen: "gebaeude",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_feuerwehr_brandbekaempfung_keine", () =>
    expect(
      getIcon("gebaeude_feuerwehr_brandbekaempfung_keine", {
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_brandbekaempfung_staffel", () =>
    expect(
      getIcon("gebaeude_feuerwehr_brandbekaempfung_staffel", {
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("gebaeude_feuerwehr_brandbekaempfung_gruppe", {
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("gebaeude_feuerwehr_brandbekaempfung_bereitschaft", {
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_hilfsorganisation_brandbekaempfung_keine", () =>
    expect(
      getIcon("gebaeude_hilfsorganisation_brandbekaempfung_keine", {
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_brandbekaempfung_staffel", () =>
    expect(
      getIcon("gebaeude_hilfsorganisation_brandbekaempfung_staffel", {
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("gebaeude_hilfsorganisation_brandbekaempfung_gruppe", {
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("gebaeude_hilfsorganisation_brandbekaempfung_bereitschaft", {
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_thw_brandbekaempfung_keine", () =>
    expect(
      getIcon("gebaeude_thw_brandbekaempfung_keine", {
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g></svg>"`
    ));

  it("gebaeude_thw_brandbekaempfung_staffel", () =>
    expect(
      getIcon("gebaeude_thw_brandbekaempfung_staffel", {
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_thw_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("gebaeude_thw_brandbekaempfung_gruppe", {
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_thw_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("gebaeude_thw_brandbekaempfung_bereitschaft", {
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_keine_dekontamination_keine", () =>
    expect(
      getIcon("gebaeude_keine_dekontamination_keine", {
        grundzeichen: "gebaeude",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("gebaeude_keine_dekontamination_staffel", () =>
    expect(
      getIcon("gebaeude_keine_dekontamination_staffel", {
        grundzeichen: "gebaeude",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_keine_dekontamination_gruppe", () =>
    expect(
      getIcon("gebaeude_keine_dekontamination_gruppe", {
        grundzeichen: "gebaeude",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_keine_dekontamination_bereitschaft", () =>
    expect(
      getIcon("gebaeude_keine_dekontamination_bereitschaft", {
        grundzeichen: "gebaeude",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_feuerwehr_dekontamination_keine", () =>
    expect(
      getIcon("gebaeude_feuerwehr_dekontamination_keine", {
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("gebaeude_feuerwehr_dekontamination_staffel", () =>
    expect(
      getIcon("gebaeude_feuerwehr_dekontamination_staffel", {
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_dekontamination_gruppe", () =>
    expect(
      getIcon("gebaeude_feuerwehr_dekontamination_gruppe", {
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_dekontamination_bereitschaft", () =>
    expect(
      getIcon("gebaeude_feuerwehr_dekontamination_bereitschaft", {
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_hilfsorganisation_dekontamination_keine", () =>
    expect(
      getIcon("gebaeude_hilfsorganisation_dekontamination_keine", {
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_dekontamination_staffel", () =>
    expect(
      getIcon("gebaeude_hilfsorganisation_dekontamination_staffel", {
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_dekontamination_gruppe", () =>
    expect(
      getIcon("gebaeude_hilfsorganisation_dekontamination_gruppe", {
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_dekontamination_bereitschaft", () =>
    expect(
      getIcon("gebaeude_hilfsorganisation_dekontamination_bereitschaft", {
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_thw_dekontamination_keine", () =>
    expect(
      getIcon("gebaeude_thw_dekontamination_keine", {
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("gebaeude_thw_dekontamination_staffel", () =>
    expect(
      getIcon("gebaeude_thw_dekontamination_staffel", {
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_thw_dekontamination_gruppe", () =>
    expect(
      getIcon("gebaeude_thw_dekontamination_gruppe", {
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_thw_dekontamination_bereitschaft", () =>
    expect(
      getIcon("gebaeude_thw_dekontamination_bereitschaft", {
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(30,20) scale(0.5)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_keine_rettungswesen_keine", () =>
    expect(
      getIcon("gebaeude_keine_rettungswesen_keine", {
        grundzeichen: "gebaeude",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g></svg>"`
    ));

  it("gebaeude_keine_rettungswesen_staffel", () =>
    expect(
      getIcon("gebaeude_keine_rettungswesen_staffel", {
        grundzeichen: "gebaeude",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_keine_rettungswesen_gruppe", () =>
    expect(
      getIcon("gebaeude_keine_rettungswesen_gruppe", {
        grundzeichen: "gebaeude",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_keine_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("gebaeude_keine_rettungswesen_bereitschaft", {
        grundzeichen: "gebaeude",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_feuerwehr_rettungswesen_keine", () =>
    expect(
      getIcon("gebaeude_feuerwehr_rettungswesen_keine", {
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_rettungswesen_staffel", () =>
    expect(
      getIcon("gebaeude_feuerwehr_rettungswesen_staffel", {
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_rettungswesen_gruppe", () =>
    expect(
      getIcon("gebaeude_feuerwehr_rettungswesen_gruppe", {
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_feuerwehr_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("gebaeude_feuerwehr_rettungswesen_bereitschaft", {
        grundzeichen: "gebaeude",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_hilfsorganisation_rettungswesen_keine", () =>
    expect(
      getIcon("gebaeude_hilfsorganisation_rettungswesen_keine", {
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_rettungswesen_staffel", () =>
    expect(
      getIcon("gebaeude_hilfsorganisation_rettungswesen_staffel", {
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_rettungswesen_gruppe", () =>
    expect(
      getIcon("gebaeude_hilfsorganisation_rettungswesen_gruppe", {
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_hilfsorganisation_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("gebaeude_hilfsorganisation_rettungswesen_bereitschaft", {
        grundzeichen: "gebaeude",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("gebaeude_thw_rettungswesen_keine", () =>
    expect(
      getIcon("gebaeude_thw_rettungswesen_keine", {
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g></svg>"`
    ));

  it("gebaeude_thw_rettungswesen_staffel", () =>
    expect(
      getIcon("gebaeude_thw_rettungswesen_staffel", {
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -14 75 59\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-14)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_thw_rettungswesen_gruppe", () =>
    expect(
      getIcon("gebaeude_thw_rettungswesen_gruppe", {
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -7 75 52\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-7)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("gebaeude_thw_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("gebaeude_thw_rettungswesen_bereitschaft", {
        grundzeichen: "gebaeude",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9 75 54\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,10 H74 V44 H1 Z\\" /></clipPath></defs><g><path d=\\"M1,10 H74 V44 H1 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,10 L37.5,1 L74,10\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(8.333333333333332,10) scale(0.7777777777777778)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-9)\\" /></svg>"`
    ));

  it("fahrzeug_keine_keine_keine", () =>
    expect(
      getIcon("fahrzeug_keine_keine_keine", { grundzeichen: "fahrzeug" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></svg>"`
    ));

  it("fahrzeug_keine_keine_staffel", () =>
    expect(
      getIcon("fahrzeug_keine_keine_staffel", {
        grundzeichen: "fahrzeug",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_keine_keine_gruppe", () =>
    expect(
      getIcon("fahrzeug_keine_keine_gruppe", {
        grundzeichen: "fahrzeug",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_keine_keine_bereitschaft", () =>
    expect(
      getIcon("fahrzeug_keine_keine_bereitschaft", {
        grundzeichen: "fahrzeug",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("fahrzeug_feuerwehr_keine_keine", () =>
    expect(
      getIcon("fahrzeug_feuerwehr_keine_keine", {
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /></svg>"`
    ));

  it("fahrzeug_feuerwehr_keine_staffel", () =>
    expect(
      getIcon("fahrzeug_feuerwehr_keine_staffel", {
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_keine_gruppe", () =>
    expect(
      getIcon("fahrzeug_feuerwehr_keine_gruppe", {
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_keine_bereitschaft", () =>
    expect(
      getIcon("fahrzeug_feuerwehr_keine_bereitschaft", {
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_keine_keine", () =>
    expect(
      getIcon("fahrzeug_hilfsorganisation_keine_keine", {
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_keine_staffel", () =>
    expect(
      getIcon("fahrzeug_hilfsorganisation_keine_staffel", {
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_keine_gruppe", () =>
    expect(
      getIcon("fahrzeug_hilfsorganisation_keine_gruppe", {
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_keine_bereitschaft", () =>
    expect(
      getIcon("fahrzeug_hilfsorganisation_keine_bereitschaft", {
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("fahrzeug_thw_keine_keine", () =>
    expect(
      getIcon("fahrzeug_thw_keine_keine", {
        grundzeichen: "fahrzeug",
        organisation: "thw",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /></svg>"`
    ));

  it("fahrzeug_thw_keine_staffel", () =>
    expect(
      getIcon("fahrzeug_thw_keine_staffel", {
        grundzeichen: "fahrzeug",
        organisation: "thw",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_thw_keine_gruppe", () =>
    expect(
      getIcon("fahrzeug_thw_keine_gruppe", {
        grundzeichen: "fahrzeug",
        organisation: "thw",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_thw_keine_bereitschaft", () =>
    expect(
      getIcon("fahrzeug_thw_keine_bereitschaft", {
        grundzeichen: "fahrzeug",
        organisation: "thw",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("fahrzeug_keine_brandbekaempfung_keine", () =>
    expect(
      getIcon("fahrzeug_keine_brandbekaempfung_keine", {
        grundzeichen: "fahrzeug",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("fahrzeug_keine_brandbekaempfung_staffel", () =>
    expect(
      getIcon("fahrzeug_keine_brandbekaempfung_staffel", {
        grundzeichen: "fahrzeug",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_keine_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("fahrzeug_keine_brandbekaempfung_gruppe", {
        grundzeichen: "fahrzeug",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_keine_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("fahrzeug_keine_brandbekaempfung_bereitschaft", {
        grundzeichen: "fahrzeug",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("fahrzeug_feuerwehr_brandbekaempfung_keine", () =>
    expect(
      getIcon("fahrzeug_feuerwehr_brandbekaempfung_keine", {
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_brandbekaempfung_staffel", () =>
    expect(
      getIcon("fahrzeug_feuerwehr_brandbekaempfung_staffel", {
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("fahrzeug_feuerwehr_brandbekaempfung_gruppe", {
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("fahrzeug_feuerwehr_brandbekaempfung_bereitschaft", {
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_brandbekaempfung_keine", () =>
    expect(
      getIcon("fahrzeug_hilfsorganisation_brandbekaempfung_keine", {
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_brandbekaempfung_staffel", () =>
    expect(
      getIcon("fahrzeug_hilfsorganisation_brandbekaempfung_staffel", {
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("fahrzeug_hilfsorganisation_brandbekaempfung_gruppe", {
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("fahrzeug_hilfsorganisation_brandbekaempfung_bereitschaft", {
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("fahrzeug_thw_brandbekaempfung_keine", () =>
    expect(
      getIcon("fahrzeug_thw_brandbekaempfung_keine", {
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("fahrzeug_thw_brandbekaempfung_staffel", () =>
    expect(
      getIcon("fahrzeug_thw_brandbekaempfung_staffel", {
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_thw_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("fahrzeug_thw_brandbekaempfung_gruppe", {
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_thw_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("fahrzeug_thw_brandbekaempfung_bereitschaft", {
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("fahrzeug_keine_dekontamination_keine", () =>
    expect(
      getIcon("fahrzeug_keine_dekontamination_keine", {
        grundzeichen: "fahrzeug",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("fahrzeug_keine_dekontamination_staffel", () =>
    expect(
      getIcon("fahrzeug_keine_dekontamination_staffel", {
        grundzeichen: "fahrzeug",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_keine_dekontamination_gruppe", () =>
    expect(
      getIcon("fahrzeug_keine_dekontamination_gruppe", {
        grundzeichen: "fahrzeug",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_keine_dekontamination_bereitschaft", () =>
    expect(
      getIcon("fahrzeug_keine_dekontamination_bereitschaft", {
        grundzeichen: "fahrzeug",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("fahrzeug_feuerwehr_dekontamination_keine", () =>
    expect(
      getIcon("fahrzeug_feuerwehr_dekontamination_keine", {
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_dekontamination_staffel", () =>
    expect(
      getIcon("fahrzeug_feuerwehr_dekontamination_staffel", {
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_dekontamination_gruppe", () =>
    expect(
      getIcon("fahrzeug_feuerwehr_dekontamination_gruppe", {
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_dekontamination_bereitschaft", () =>
    expect(
      getIcon("fahrzeug_feuerwehr_dekontamination_bereitschaft", {
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_dekontamination_keine", () =>
    expect(
      getIcon("fahrzeug_hilfsorganisation_dekontamination_keine", {
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_dekontamination_staffel", () =>
    expect(
      getIcon("fahrzeug_hilfsorganisation_dekontamination_staffel", {
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_dekontamination_gruppe", () =>
    expect(
      getIcon("fahrzeug_hilfsorganisation_dekontamination_gruppe", {
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_dekontamination_bereitschaft", () =>
    expect(
      getIcon("fahrzeug_hilfsorganisation_dekontamination_bereitschaft", {
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("fahrzeug_thw_dekontamination_keine", () =>
    expect(
      getIcon("fahrzeug_thw_dekontamination_keine", {
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("fahrzeug_thw_dekontamination_staffel", () =>
    expect(
      getIcon("fahrzeug_thw_dekontamination_staffel", {
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_thw_dekontamination_gruppe", () =>
    expect(
      getIcon("fahrzeug_thw_dekontamination_gruppe", {
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_thw_dekontamination_bereitschaft", () =>
    expect(
      getIcon("fahrzeug_thw_dekontamination_bereitschaft", {
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("fahrzeug_keine_rettungswesen_keine", () =>
    expect(
      getIcon("fahrzeug_keine_rettungswesen_keine", {
        grundzeichen: "fahrzeug",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("fahrzeug_keine_rettungswesen_staffel", () =>
    expect(
      getIcon("fahrzeug_keine_rettungswesen_staffel", {
        grundzeichen: "fahrzeug",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_keine_rettungswesen_gruppe", () =>
    expect(
      getIcon("fahrzeug_keine_rettungswesen_gruppe", {
        grundzeichen: "fahrzeug",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_keine_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("fahrzeug_keine_rettungswesen_bereitschaft", {
        grundzeichen: "fahrzeug",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("fahrzeug_feuerwehr_rettungswesen_keine", () =>
    expect(
      getIcon("fahrzeug_feuerwehr_rettungswesen_keine", {
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_rettungswesen_staffel", () =>
    expect(
      getIcon("fahrzeug_feuerwehr_rettungswesen_staffel", {
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_rettungswesen_gruppe", () =>
    expect(
      getIcon("fahrzeug_feuerwehr_rettungswesen_gruppe", {
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_feuerwehr_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("fahrzeug_feuerwehr_rettungswesen_bereitschaft", {
        grundzeichen: "fahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_rettungswesen_keine", () =>
    expect(
      getIcon("fahrzeug_hilfsorganisation_rettungswesen_keine", {
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_rettungswesen_staffel", () =>
    expect(
      getIcon("fahrzeug_hilfsorganisation_rettungswesen_staffel", {
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_rettungswesen_gruppe", () =>
    expect(
      getIcon("fahrzeug_hilfsorganisation_rettungswesen_gruppe", {
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_hilfsorganisation_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("fahrzeug_hilfsorganisation_rettungswesen_bereitschaft", {
        grundzeichen: "fahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("fahrzeug_thw_rettungswesen_keine", () =>
    expect(
      getIcon("fahrzeug_thw_rettungswesen_keine", {
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("fahrzeug_thw_rettungswesen_staffel", () =>
    expect(
      getIcon("fahrzeug_thw_rettungswesen_staffel", {
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_thw_rettungswesen_gruppe", () =>
    expect(
      getIcon("fahrzeug_thw_rettungswesen_gruppe", {
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("fahrzeug_thw_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("fahrzeug_thw_rettungswesen_bereitschaft", {
        grundzeichen: "fahrzeug",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_keine_keine", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_keine_keine_keine", {
        grundzeichen: "kraftfahrzeug-landgebunden",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_keine_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_keine_keine_staffel", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_keine_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_keine_keine_gruppe", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_keine_bereitschaft", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_keine_keine_bereitschaft", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_keine_keine", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_feuerwehr_keine_keine", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_keine_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_feuerwehr_keine_staffel", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_keine_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_feuerwehr_keine_gruppe", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_keine_bereitschaft", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_feuerwehr_keine_bereitschaft", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_keine_keine", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_hilfsorganisation_keine_keine", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "hilfsorganisation",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_keine_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_hilfsorganisation_keine_staffel", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "hilfsorganisation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_keine_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_hilfsorganisation_keine_gruppe", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "hilfsorganisation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_keine_bereitschaft", () =>
    expect(
      getIcon(
        "kraftfahrzeug-landgebunden_hilfsorganisation_keine_bereitschaft",
        {
          grundzeichen: "kraftfahrzeug-landgebunden",
          organisation: "hilfsorganisation",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_keine_keine", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_thw_keine_keine", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_keine_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_thw_keine_staffel", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_keine_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_thw_keine_gruppe", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_keine_bereitschaft", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_thw_keine_bereitschaft", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_brandbekaempfung_keine", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_keine_brandbekaempfung_keine", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_brandbekaempfung_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_keine_brandbekaempfung_staffel", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_keine_brandbekaempfung_gruppe", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon(
        "kraftfahrzeug-landgebunden_keine_brandbekaempfung_bereitschaft",
        {
          grundzeichen: "kraftfahrzeug-landgebunden",
          fachaufgabe: "brandbekaempfung",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_brandbekaempfung_keine", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_feuerwehr_brandbekaempfung_keine", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_brandbekaempfung_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_feuerwehr_brandbekaempfung_staffel", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_feuerwehr_brandbekaempfung_gruppe", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon(
        "kraftfahrzeug-landgebunden_feuerwehr_brandbekaempfung_bereitschaft",
        {
          grundzeichen: "kraftfahrzeug-landgebunden",
          organisation: "feuerwehr",
          fachaufgabe: "brandbekaempfung",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_brandbekaempfung_keine", () =>
    expect(
      getIcon(
        "kraftfahrzeug-landgebunden_hilfsorganisation_brandbekaempfung_keine",
        {
          grundzeichen: "kraftfahrzeug-landgebunden",
          organisation: "hilfsorganisation",
          fachaufgabe: "brandbekaempfung",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_brandbekaempfung_staffel", () =>
    expect(
      getIcon(
        "kraftfahrzeug-landgebunden_hilfsorganisation_brandbekaempfung_staffel",
        {
          grundzeichen: "kraftfahrzeug-landgebunden",
          organisation: "hilfsorganisation",
          fachaufgabe: "brandbekaempfung",
          einheit: "staffel",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_brandbekaempfung_gruppe", () =>
    expect(
      getIcon(
        "kraftfahrzeug-landgebunden_hilfsorganisation_brandbekaempfung_gruppe",
        {
          grundzeichen: "kraftfahrzeug-landgebunden",
          organisation: "hilfsorganisation",
          fachaufgabe: "brandbekaempfung",
          einheit: "gruppe",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon(
        "kraftfahrzeug-landgebunden_hilfsorganisation_brandbekaempfung_bereitschaft",
        {
          grundzeichen: "kraftfahrzeug-landgebunden",
          organisation: "hilfsorganisation",
          fachaufgabe: "brandbekaempfung",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_brandbekaempfung_keine", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_thw_brandbekaempfung_keine", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_brandbekaempfung_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_thw_brandbekaempfung_staffel", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_thw_brandbekaempfung_gruppe", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_thw_brandbekaempfung_bereitschaft", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_dekontamination_keine", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_keine_dekontamination_keine", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_dekontamination_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_keine_dekontamination_staffel", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_dekontamination_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_keine_dekontamination_gruppe", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_dekontamination_bereitschaft", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_keine_dekontamination_bereitschaft", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_dekontamination_keine", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_feuerwehr_dekontamination_keine", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_dekontamination_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_feuerwehr_dekontamination_staffel", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_dekontamination_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_feuerwehr_dekontamination_gruppe", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_dekontamination_bereitschaft", () =>
    expect(
      getIcon(
        "kraftfahrzeug-landgebunden_feuerwehr_dekontamination_bereitschaft",
        {
          grundzeichen: "kraftfahrzeug-landgebunden",
          organisation: "feuerwehr",
          fachaufgabe: "dekontamination",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_dekontamination_keine", () =>
    expect(
      getIcon(
        "kraftfahrzeug-landgebunden_hilfsorganisation_dekontamination_keine",
        {
          grundzeichen: "kraftfahrzeug-landgebunden",
          organisation: "hilfsorganisation",
          fachaufgabe: "dekontamination",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_dekontamination_staffel", () =>
    expect(
      getIcon(
        "kraftfahrzeug-landgebunden_hilfsorganisation_dekontamination_staffel",
        {
          grundzeichen: "kraftfahrzeug-landgebunden",
          organisation: "hilfsorganisation",
          fachaufgabe: "dekontamination",
          einheit: "staffel",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_dekontamination_gruppe", () =>
    expect(
      getIcon(
        "kraftfahrzeug-landgebunden_hilfsorganisation_dekontamination_gruppe",
        {
          grundzeichen: "kraftfahrzeug-landgebunden",
          organisation: "hilfsorganisation",
          fachaufgabe: "dekontamination",
          einheit: "gruppe",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_dekontamination_bereitschaft", () =>
    expect(
      getIcon(
        "kraftfahrzeug-landgebunden_hilfsorganisation_dekontamination_bereitschaft",
        {
          grundzeichen: "kraftfahrzeug-landgebunden",
          organisation: "hilfsorganisation",
          fachaufgabe: "dekontamination",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_dekontamination_keine", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_thw_dekontamination_keine", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_dekontamination_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_thw_dekontamination_staffel", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_dekontamination_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_thw_dekontamination_gruppe", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_dekontamination_bereitschaft", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_thw_dekontamination_bereitschaft", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_rettungswesen_keine", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_keine_rettungswesen_keine", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_rettungswesen_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_keine_rettungswesen_staffel", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_rettungswesen_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_keine_rettungswesen_gruppe", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_keine_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_keine_rettungswesen_bereitschaft", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_rettungswesen_keine", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_feuerwehr_rettungswesen_keine", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_rettungswesen_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_feuerwehr_rettungswesen_staffel", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_rettungswesen_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_feuerwehr_rettungswesen_gruppe", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_feuerwehr_rettungswesen_bereitschaft", () =>
    expect(
      getIcon(
        "kraftfahrzeug-landgebunden_feuerwehr_rettungswesen_bereitschaft",
        {
          grundzeichen: "kraftfahrzeug-landgebunden",
          organisation: "feuerwehr",
          fachaufgabe: "rettungswesen",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_rettungswesen_keine", () =>
    expect(
      getIcon(
        "kraftfahrzeug-landgebunden_hilfsorganisation_rettungswesen_keine",
        {
          grundzeichen: "kraftfahrzeug-landgebunden",
          organisation: "hilfsorganisation",
          fachaufgabe: "rettungswesen",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_rettungswesen_staffel", () =>
    expect(
      getIcon(
        "kraftfahrzeug-landgebunden_hilfsorganisation_rettungswesen_staffel",
        {
          grundzeichen: "kraftfahrzeug-landgebunden",
          organisation: "hilfsorganisation",
          fachaufgabe: "rettungswesen",
          einheit: "staffel",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_rettungswesen_gruppe", () =>
    expect(
      getIcon(
        "kraftfahrzeug-landgebunden_hilfsorganisation_rettungswesen_gruppe",
        {
          grundzeichen: "kraftfahrzeug-landgebunden",
          organisation: "hilfsorganisation",
          fachaufgabe: "rettungswesen",
          einheit: "gruppe",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_hilfsorganisation_rettungswesen_bereitschaft", () =>
    expect(
      getIcon(
        "kraftfahrzeug-landgebunden_hilfsorganisation_rettungswesen_bereitschaft",
        {
          grundzeichen: "kraftfahrzeug-landgebunden",
          organisation: "hilfsorganisation",
          fachaufgabe: "rettungswesen",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_rettungswesen_keine", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_thw_rettungswesen_keine", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_rettungswesen_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_thw_rettungswesen_staffel", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_rettungswesen_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_thw_rettungswesen_gruppe", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-landgebunden_thw_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("kraftfahrzeug-landgebunden_thw_rettungswesen_bereitschaft", {
        grundzeichen: "kraftfahrzeug-landgebunden",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_keine_keine", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_keine_keine_keine", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_keine_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_keine_keine_staffel", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_keine_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_keine_keine_gruppe", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_keine_bereitschaft", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_keine_keine_bereitschaft", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_keine_keine", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_feuerwehr_keine_keine", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_keine_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_feuerwehr_keine_staffel", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_keine_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_feuerwehr_keine_gruppe", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_keine_bereitschaft", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_feuerwehr_keine_bereitschaft", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_keine_keine", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_hilfsorganisation_keine_keine", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "hilfsorganisation",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_keine_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_hilfsorganisation_keine_staffel", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "hilfsorganisation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_keine_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_hilfsorganisation_keine_gruppe", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "hilfsorganisation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_keine_bereitschaft", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_hilfsorganisation_keine_bereitschaft",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "hilfsorganisation",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_keine_keine", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_thw_keine_keine", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_keine_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_thw_keine_staffel", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_keine_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_thw_keine_gruppe", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_keine_bereitschaft", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_thw_keine_bereitschaft", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_brandbekaempfung_keine", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_keine_brandbekaempfung_keine", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_brandbekaempfung_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_keine_brandbekaempfung_staffel", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_keine_brandbekaempfung_gruppe", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_keine_brandbekaempfung_bereitschaft",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          fachaufgabe: "brandbekaempfung",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_brandbekaempfung_keine", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_feuerwehr_brandbekaempfung_keine",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "feuerwehr",
          fachaufgabe: "brandbekaempfung",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_brandbekaempfung_staffel", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_feuerwehr_brandbekaempfung_staffel",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "feuerwehr",
          fachaufgabe: "brandbekaempfung",
          einheit: "staffel",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_brandbekaempfung_gruppe", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_feuerwehr_brandbekaempfung_gruppe",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "feuerwehr",
          fachaufgabe: "brandbekaempfung",
          einheit: "gruppe",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_feuerwehr_brandbekaempfung_bereitschaft",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "feuerwehr",
          fachaufgabe: "brandbekaempfung",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_brandbekaempfung_keine", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_hilfsorganisation_brandbekaempfung_keine",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "hilfsorganisation",
          fachaufgabe: "brandbekaempfung",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_brandbekaempfung_staffel", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_hilfsorganisation_brandbekaempfung_staffel",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "hilfsorganisation",
          fachaufgabe: "brandbekaempfung",
          einheit: "staffel",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_brandbekaempfung_gruppe", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_hilfsorganisation_brandbekaempfung_gruppe",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "hilfsorganisation",
          fachaufgabe: "brandbekaempfung",
          einheit: "gruppe",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_hilfsorganisation_brandbekaempfung_bereitschaft",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "hilfsorganisation",
          fachaufgabe: "brandbekaempfung",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_brandbekaempfung_keine", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_thw_brandbekaempfung_keine", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_brandbekaempfung_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_thw_brandbekaempfung_staffel", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_thw_brandbekaempfung_gruppe", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_thw_brandbekaempfung_bereitschaft",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "thw",
          fachaufgabe: "brandbekaempfung",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_dekontamination_keine", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_keine_dekontamination_keine", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_dekontamination_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_keine_dekontamination_staffel", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_dekontamination_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_keine_dekontamination_gruppe", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_dekontamination_bereitschaft", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_keine_dekontamination_bereitschaft",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          fachaufgabe: "dekontamination",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_dekontamination_keine", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_feuerwehr_dekontamination_keine", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_dekontamination_staffel", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_feuerwehr_dekontamination_staffel",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "feuerwehr",
          fachaufgabe: "dekontamination",
          einheit: "staffel",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_dekontamination_gruppe", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_feuerwehr_dekontamination_gruppe",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "feuerwehr",
          fachaufgabe: "dekontamination",
          einheit: "gruppe",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_dekontamination_bereitschaft", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_feuerwehr_dekontamination_bereitschaft",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "feuerwehr",
          fachaufgabe: "dekontamination",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_dekontamination_keine", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_hilfsorganisation_dekontamination_keine",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "hilfsorganisation",
          fachaufgabe: "dekontamination",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_dekontamination_staffel", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_hilfsorganisation_dekontamination_staffel",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "hilfsorganisation",
          fachaufgabe: "dekontamination",
          einheit: "staffel",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_dekontamination_gruppe", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_hilfsorganisation_dekontamination_gruppe",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "hilfsorganisation",
          fachaufgabe: "dekontamination",
          einheit: "gruppe",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_dekontamination_bereitschaft", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_hilfsorganisation_dekontamination_bereitschaft",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "hilfsorganisation",
          fachaufgabe: "dekontamination",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_dekontamination_keine", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_thw_dekontamination_keine", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_dekontamination_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_thw_dekontamination_staffel", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_dekontamination_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_thw_dekontamination_gruppe", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_dekontamination_bereitschaft", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_thw_dekontamination_bereitschaft",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "thw",
          fachaufgabe: "dekontamination",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_rettungswesen_keine", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_keine_rettungswesen_keine", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_rettungswesen_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_keine_rettungswesen_staffel", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_rettungswesen_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_keine_rettungswesen_gruppe", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_keine_rettungswesen_bereitschaft", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_keine_rettungswesen_bereitschaft",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          fachaufgabe: "rettungswesen",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_rettungswesen_keine", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_feuerwehr_rettungswesen_keine", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_rettungswesen_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_feuerwehr_rettungswesen_staffel", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_rettungswesen_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_feuerwehr_rettungswesen_gruppe", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_feuerwehr_rettungswesen_bereitschaft", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_feuerwehr_rettungswesen_bereitschaft",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "feuerwehr",
          fachaufgabe: "rettungswesen",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_rettungswesen_keine", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_hilfsorganisation_rettungswesen_keine",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "hilfsorganisation",
          fachaufgabe: "rettungswesen",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_rettungswesen_staffel", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_hilfsorganisation_rettungswesen_staffel",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "hilfsorganisation",
          fachaufgabe: "rettungswesen",
          einheit: "staffel",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_rettungswesen_gruppe", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_hilfsorganisation_rettungswesen_gruppe",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "hilfsorganisation",
          fachaufgabe: "rettungswesen",
          einheit: "gruppe",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_hilfsorganisation_rettungswesen_bereitschaft", () =>
    expect(
      getIcon(
        "kraftfahrzeug-gelaendegaengig_hilfsorganisation_rettungswesen_bereitschaft",
        {
          grundzeichen: "kraftfahrzeug-gelaendegaengig",
          organisation: "hilfsorganisation",
          fachaufgabe: "rettungswesen",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_rettungswesen_keine", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_thw_rettungswesen_keine", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_rettungswesen_staffel", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_thw_rettungswesen_staffel", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_rettungswesen_gruppe", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_thw_rettungswesen_gruppe", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kraftfahrzeug-gelaendegaengig_thw_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("kraftfahrzeug-gelaendegaengig_thw_rettungswesen_bereitschaft", {
        grundzeichen: "kraftfahrzeug-gelaendegaengig",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"37.5\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("wechsellader_keine_keine_keine", () =>
    expect(
      getIcon("wechsellader_keine_keine_keine", {
        grundzeichen: "wechsellader",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("wechsellader_keine_keine_staffel", () =>
    expect(
      getIcon("wechsellader_keine_keine_staffel", {
        grundzeichen: "wechsellader",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(36.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_keine_keine_gruppe", () =>
    expect(
      getIcon("wechsellader_keine_keine_gruppe", {
        grundzeichen: "wechsellader",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(33,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_keine_keine_bereitschaft", () =>
    expect(
      getIcon("wechsellader_keine_keine_bereitschaft", {
        grundzeichen: "wechsellader",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37,-4.5)\\" /></svg>"`
    ));

  it("wechsellader_feuerwehr_keine_keine", () =>
    expect(
      getIcon("wechsellader_feuerwehr_keine_keine", {
        grundzeichen: "wechsellader",
        organisation: "feuerwehr",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("wechsellader_feuerwehr_keine_staffel", () =>
    expect(
      getIcon("wechsellader_feuerwehr_keine_staffel", {
        grundzeichen: "wechsellader",
        organisation: "feuerwehr",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(36.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_feuerwehr_keine_gruppe", () =>
    expect(
      getIcon("wechsellader_feuerwehr_keine_gruppe", {
        grundzeichen: "wechsellader",
        organisation: "feuerwehr",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(33,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_feuerwehr_keine_bereitschaft", () =>
    expect(
      getIcon("wechsellader_feuerwehr_keine_bereitschaft", {
        grundzeichen: "wechsellader",
        organisation: "feuerwehr",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37,-4.5)\\" /></svg>"`
    ));

  it("wechsellader_hilfsorganisation_keine_keine", () =>
    expect(
      getIcon("wechsellader_hilfsorganisation_keine_keine", {
        grundzeichen: "wechsellader",
        organisation: "hilfsorganisation",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("wechsellader_hilfsorganisation_keine_staffel", () =>
    expect(
      getIcon("wechsellader_hilfsorganisation_keine_staffel", {
        grundzeichen: "wechsellader",
        organisation: "hilfsorganisation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(36.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_hilfsorganisation_keine_gruppe", () =>
    expect(
      getIcon("wechsellader_hilfsorganisation_keine_gruppe", {
        grundzeichen: "wechsellader",
        organisation: "hilfsorganisation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(33,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_hilfsorganisation_keine_bereitschaft", () =>
    expect(
      getIcon("wechsellader_hilfsorganisation_keine_bereitschaft", {
        grundzeichen: "wechsellader",
        organisation: "hilfsorganisation",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37,-4.5)\\" /></svg>"`
    ));

  it("wechsellader_thw_keine_keine", () =>
    expect(
      getIcon("wechsellader_thw_keine_keine", {
        grundzeichen: "wechsellader",
        organisation: "thw",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("wechsellader_thw_keine_staffel", () =>
    expect(
      getIcon("wechsellader_thw_keine_staffel", {
        grundzeichen: "wechsellader",
        organisation: "thw",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(36.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_thw_keine_gruppe", () =>
    expect(
      getIcon("wechsellader_thw_keine_gruppe", {
        grundzeichen: "wechsellader",
        organisation: "thw",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(33,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_thw_keine_bereitschaft", () =>
    expect(
      getIcon("wechsellader_thw_keine_bereitschaft", {
        grundzeichen: "wechsellader",
        organisation: "thw",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37,-4.5)\\" /></svg>"`
    ));

  it("wechsellader_keine_brandbekaempfung_keine", () =>
    expect(
      getIcon("wechsellader_keine_brandbekaempfung_keine", {
        grundzeichen: "wechsellader",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g></svg>"`
    ));

  it("wechsellader_keine_brandbekaempfung_staffel", () =>
    expect(
      getIcon("wechsellader_keine_brandbekaempfung_staffel", {
        grundzeichen: "wechsellader",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><g fill=\\"black\\" transform=\\"translate(36.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_keine_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("wechsellader_keine_brandbekaempfung_gruppe", {
        grundzeichen: "wechsellader",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><g fill=\\"black\\" transform=\\"translate(33,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_keine_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("wechsellader_keine_brandbekaempfung_bereitschaft", {
        grundzeichen: "wechsellader",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37,-4.5)\\" /></svg>"`
    ));

  it("wechsellader_feuerwehr_brandbekaempfung_keine", () =>
    expect(
      getIcon("wechsellader_feuerwehr_brandbekaempfung_keine", {
        grundzeichen: "wechsellader",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g></svg>"`
    ));

  it("wechsellader_feuerwehr_brandbekaempfung_staffel", () =>
    expect(
      getIcon("wechsellader_feuerwehr_brandbekaempfung_staffel", {
        grundzeichen: "wechsellader",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><g fill=\\"black\\" transform=\\"translate(36.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_feuerwehr_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("wechsellader_feuerwehr_brandbekaempfung_gruppe", {
        grundzeichen: "wechsellader",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><g fill=\\"black\\" transform=\\"translate(33,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_feuerwehr_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("wechsellader_feuerwehr_brandbekaempfung_bereitschaft", {
        grundzeichen: "wechsellader",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37,-4.5)\\" /></svg>"`
    ));

  it("wechsellader_hilfsorganisation_brandbekaempfung_keine", () =>
    expect(
      getIcon("wechsellader_hilfsorganisation_brandbekaempfung_keine", {
        grundzeichen: "wechsellader",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g></svg>"`
    ));

  it("wechsellader_hilfsorganisation_brandbekaempfung_staffel", () =>
    expect(
      getIcon("wechsellader_hilfsorganisation_brandbekaempfung_staffel", {
        grundzeichen: "wechsellader",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><g fill=\\"black\\" transform=\\"translate(36.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_hilfsorganisation_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("wechsellader_hilfsorganisation_brandbekaempfung_gruppe", {
        grundzeichen: "wechsellader",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><g fill=\\"black\\" transform=\\"translate(33,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_hilfsorganisation_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("wechsellader_hilfsorganisation_brandbekaempfung_bereitschaft", {
        grundzeichen: "wechsellader",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37,-4.5)\\" /></svg>"`
    ));

  it("wechsellader_thw_brandbekaempfung_keine", () =>
    expect(
      getIcon("wechsellader_thw_brandbekaempfung_keine", {
        grundzeichen: "wechsellader",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g></svg>"`
    ));

  it("wechsellader_thw_brandbekaempfung_staffel", () =>
    expect(
      getIcon("wechsellader_thw_brandbekaempfung_staffel", {
        grundzeichen: "wechsellader",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><g fill=\\"black\\" transform=\\"translate(36.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_thw_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("wechsellader_thw_brandbekaempfung_gruppe", {
        grundzeichen: "wechsellader",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><g fill=\\"black\\" transform=\\"translate(33,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_thw_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("wechsellader_thw_brandbekaempfung_bereitschaft", {
        grundzeichen: "wechsellader",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37,-4.5)\\" /></svg>"`
    ));

  it("wechsellader_keine_dekontamination_keine", () =>
    expect(
      getIcon("wechsellader_keine_dekontamination_keine", {
        grundzeichen: "wechsellader",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.7333333333333333)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("wechsellader_keine_dekontamination_staffel", () =>
    expect(
      getIcon("wechsellader_keine_dekontamination_staffel", {
        grundzeichen: "wechsellader",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.7333333333333333)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(36.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_keine_dekontamination_gruppe", () =>
    expect(
      getIcon("wechsellader_keine_dekontamination_gruppe", {
        grundzeichen: "wechsellader",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.7333333333333333)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(33,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_keine_dekontamination_bereitschaft", () =>
    expect(
      getIcon("wechsellader_keine_dekontamination_bereitschaft", {
        grundzeichen: "wechsellader",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.7333333333333333)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37,-4.5)\\" /></svg>"`
    ));

  it("wechsellader_feuerwehr_dekontamination_keine", () =>
    expect(
      getIcon("wechsellader_feuerwehr_dekontamination_keine", {
        grundzeichen: "wechsellader",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.7333333333333333)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("wechsellader_feuerwehr_dekontamination_staffel", () =>
    expect(
      getIcon("wechsellader_feuerwehr_dekontamination_staffel", {
        grundzeichen: "wechsellader",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.7333333333333333)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(36.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_feuerwehr_dekontamination_gruppe", () =>
    expect(
      getIcon("wechsellader_feuerwehr_dekontamination_gruppe", {
        grundzeichen: "wechsellader",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.7333333333333333)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(33,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_feuerwehr_dekontamination_bereitschaft", () =>
    expect(
      getIcon("wechsellader_feuerwehr_dekontamination_bereitschaft", {
        grundzeichen: "wechsellader",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.7333333333333333)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37,-4.5)\\" /></svg>"`
    ));

  it("wechsellader_hilfsorganisation_dekontamination_keine", () =>
    expect(
      getIcon("wechsellader_hilfsorganisation_dekontamination_keine", {
        grundzeichen: "wechsellader",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.7333333333333333)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("wechsellader_hilfsorganisation_dekontamination_staffel", () =>
    expect(
      getIcon("wechsellader_hilfsorganisation_dekontamination_staffel", {
        grundzeichen: "wechsellader",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.7333333333333333)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(36.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_hilfsorganisation_dekontamination_gruppe", () =>
    expect(
      getIcon("wechsellader_hilfsorganisation_dekontamination_gruppe", {
        grundzeichen: "wechsellader",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.7333333333333333)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(33,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_hilfsorganisation_dekontamination_bereitschaft", () =>
    expect(
      getIcon("wechsellader_hilfsorganisation_dekontamination_bereitschaft", {
        grundzeichen: "wechsellader",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.7333333333333333)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37,-4.5)\\" /></svg>"`
    ));

  it("wechsellader_thw_dekontamination_keine", () =>
    expect(
      getIcon("wechsellader_thw_dekontamination_keine", {
        grundzeichen: "wechsellader",
        organisation: "thw",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.7333333333333333)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("wechsellader_thw_dekontamination_staffel", () =>
    expect(
      getIcon("wechsellader_thw_dekontamination_staffel", {
        grundzeichen: "wechsellader",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.7333333333333333)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(36.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_thw_dekontamination_gruppe", () =>
    expect(
      getIcon("wechsellader_thw_dekontamination_gruppe", {
        grundzeichen: "wechsellader",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.7333333333333333)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(33,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_thw_dekontamination_bereitschaft", () =>
    expect(
      getIcon("wechsellader_thw_dekontamination_bereitschaft", {
        grundzeichen: "wechsellader",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.7333333333333333)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37,-4.5)\\" /></svg>"`
    ));

  it("wechsellader_keine_rettungswesen_keine", () =>
    expect(
      getIcon("wechsellader_keine_rettungswesen_keine", {
        grundzeichen: "wechsellader",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g></svg>"`
    ));

  it("wechsellader_keine_rettungswesen_staffel", () =>
    expect(
      getIcon("wechsellader_keine_rettungswesen_staffel", {
        grundzeichen: "wechsellader",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><g fill=\\"black\\" transform=\\"translate(36.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_keine_rettungswesen_gruppe", () =>
    expect(
      getIcon("wechsellader_keine_rettungswesen_gruppe", {
        grundzeichen: "wechsellader",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><g fill=\\"black\\" transform=\\"translate(33,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_keine_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("wechsellader_keine_rettungswesen_bereitschaft", {
        grundzeichen: "wechsellader",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37,-4.5)\\" /></svg>"`
    ));

  it("wechsellader_feuerwehr_rettungswesen_keine", () =>
    expect(
      getIcon("wechsellader_feuerwehr_rettungswesen_keine", {
        grundzeichen: "wechsellader",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g></svg>"`
    ));

  it("wechsellader_feuerwehr_rettungswesen_staffel", () =>
    expect(
      getIcon("wechsellader_feuerwehr_rettungswesen_staffel", {
        grundzeichen: "wechsellader",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><g fill=\\"black\\" transform=\\"translate(36.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_feuerwehr_rettungswesen_gruppe", () =>
    expect(
      getIcon("wechsellader_feuerwehr_rettungswesen_gruppe", {
        grundzeichen: "wechsellader",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><g fill=\\"black\\" transform=\\"translate(33,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_feuerwehr_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("wechsellader_feuerwehr_rettungswesen_bereitschaft", {
        grundzeichen: "wechsellader",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37,-4.5)\\" /></svg>"`
    ));

  it("wechsellader_hilfsorganisation_rettungswesen_keine", () =>
    expect(
      getIcon("wechsellader_hilfsorganisation_rettungswesen_keine", {
        grundzeichen: "wechsellader",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g></svg>"`
    ));

  it("wechsellader_hilfsorganisation_rettungswesen_staffel", () =>
    expect(
      getIcon("wechsellader_hilfsorganisation_rettungswesen_staffel", {
        grundzeichen: "wechsellader",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><g fill=\\"black\\" transform=\\"translate(36.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_hilfsorganisation_rettungswesen_gruppe", () =>
    expect(
      getIcon("wechsellader_hilfsorganisation_rettungswesen_gruppe", {
        grundzeichen: "wechsellader",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><g fill=\\"black\\" transform=\\"translate(33,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_hilfsorganisation_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("wechsellader_hilfsorganisation_rettungswesen_bereitschaft", {
        grundzeichen: "wechsellader",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37,-4.5)\\" /></svg>"`
    ));

  it("wechsellader_thw_rettungswesen_keine", () =>
    expect(
      getIcon("wechsellader_thw_rettungswesen_keine", {
        grundzeichen: "wechsellader",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g></svg>"`
    ));

  it("wechsellader_thw_rettungswesen_staffel", () =>
    expect(
      getIcon("wechsellader_thw_rettungswesen_staffel", {
        grundzeichen: "wechsellader",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><g fill=\\"black\\" transform=\\"translate(36.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_thw_rettungswesen_gruppe", () =>
    expect(
      getIcon("wechsellader_thw_rettungswesen_gruppe", {
        grundzeichen: "wechsellader",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><g fill=\\"black\\" transform=\\"translate(33,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("wechsellader_thw_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("wechsellader_thw_rettungswesen_bereitschaft", {
        grundzeichen: "wechsellader",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M4,1 Q36.5,10 73,1 v40 h-69 Z\\" /></clipPath></defs><g><path d=\\"M1,1 v43 h73\\" /><path d=\\"M4,1 Q36.5,10 74,1 v40 h-70 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(4,0) scale(0.9333333333333333)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37,-4.5)\\" /></svg>"`
    ));

  it("abrollbehaelter_keine_keine_keine", () =>
    expect(
      getIcon("abrollbehaelter_keine_keine_keine", {
        grundzeichen: "abrollbehaelter",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g></svg>"`
    ));

  it("abrollbehaelter_keine_keine_staffel", () =>
    expect(
      getIcon("abrollbehaelter_keine_keine_staffel", {
        grundzeichen: "abrollbehaelter",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_keine_keine_gruppe", () =>
    expect(
      getIcon("abrollbehaelter_keine_keine_gruppe", {
        grundzeichen: "abrollbehaelter",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_keine_keine_bereitschaft", () =>
    expect(
      getIcon("abrollbehaelter_keine_keine_bereitschaft", {
        grundzeichen: "abrollbehaelter",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("abrollbehaelter_feuerwehr_keine_keine", () =>
    expect(
      getIcon("abrollbehaelter_feuerwehr_keine_keine", {
        grundzeichen: "abrollbehaelter",
        organisation: "feuerwehr",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g></svg>"`
    ));

  it("abrollbehaelter_feuerwehr_keine_staffel", () =>
    expect(
      getIcon("abrollbehaelter_feuerwehr_keine_staffel", {
        grundzeichen: "abrollbehaelter",
        organisation: "feuerwehr",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_feuerwehr_keine_gruppe", () =>
    expect(
      getIcon("abrollbehaelter_feuerwehr_keine_gruppe", {
        grundzeichen: "abrollbehaelter",
        organisation: "feuerwehr",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_feuerwehr_keine_bereitschaft", () =>
    expect(
      getIcon("abrollbehaelter_feuerwehr_keine_bereitschaft", {
        grundzeichen: "abrollbehaelter",
        organisation: "feuerwehr",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("abrollbehaelter_hilfsorganisation_keine_keine", () =>
    expect(
      getIcon("abrollbehaelter_hilfsorganisation_keine_keine", {
        grundzeichen: "abrollbehaelter",
        organisation: "hilfsorganisation",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g></svg>"`
    ));

  it("abrollbehaelter_hilfsorganisation_keine_staffel", () =>
    expect(
      getIcon("abrollbehaelter_hilfsorganisation_keine_staffel", {
        grundzeichen: "abrollbehaelter",
        organisation: "hilfsorganisation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_hilfsorganisation_keine_gruppe", () =>
    expect(
      getIcon("abrollbehaelter_hilfsorganisation_keine_gruppe", {
        grundzeichen: "abrollbehaelter",
        organisation: "hilfsorganisation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_hilfsorganisation_keine_bereitschaft", () =>
    expect(
      getIcon("abrollbehaelter_hilfsorganisation_keine_bereitschaft", {
        grundzeichen: "abrollbehaelter",
        organisation: "hilfsorganisation",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("abrollbehaelter_thw_keine_keine", () =>
    expect(
      getIcon("abrollbehaelter_thw_keine_keine", {
        grundzeichen: "abrollbehaelter",
        organisation: "thw",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g></svg>"`
    ));

  it("abrollbehaelter_thw_keine_staffel", () =>
    expect(
      getIcon("abrollbehaelter_thw_keine_staffel", {
        grundzeichen: "abrollbehaelter",
        organisation: "thw",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_thw_keine_gruppe", () =>
    expect(
      getIcon("abrollbehaelter_thw_keine_gruppe", {
        grundzeichen: "abrollbehaelter",
        organisation: "thw",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_thw_keine_bereitschaft", () =>
    expect(
      getIcon("abrollbehaelter_thw_keine_bereitschaft", {
        grundzeichen: "abrollbehaelter",
        organisation: "thw",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("abrollbehaelter_keine_brandbekaempfung_keine", () =>
    expect(
      getIcon("abrollbehaelter_keine_brandbekaempfung_keine", {
        grundzeichen: "abrollbehaelter",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g></svg>"`
    ));

  it("abrollbehaelter_keine_brandbekaempfung_staffel", () =>
    expect(
      getIcon("abrollbehaelter_keine_brandbekaempfung_staffel", {
        grundzeichen: "abrollbehaelter",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_keine_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("abrollbehaelter_keine_brandbekaempfung_gruppe", {
        grundzeichen: "abrollbehaelter",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_keine_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("abrollbehaelter_keine_brandbekaempfung_bereitschaft", {
        grundzeichen: "abrollbehaelter",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("abrollbehaelter_feuerwehr_brandbekaempfung_keine", () =>
    expect(
      getIcon("abrollbehaelter_feuerwehr_brandbekaempfung_keine", {
        grundzeichen: "abrollbehaelter",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g></svg>"`
    ));

  it("abrollbehaelter_feuerwehr_brandbekaempfung_staffel", () =>
    expect(
      getIcon("abrollbehaelter_feuerwehr_brandbekaempfung_staffel", {
        grundzeichen: "abrollbehaelter",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_feuerwehr_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("abrollbehaelter_feuerwehr_brandbekaempfung_gruppe", {
        grundzeichen: "abrollbehaelter",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_feuerwehr_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("abrollbehaelter_feuerwehr_brandbekaempfung_bereitschaft", {
        grundzeichen: "abrollbehaelter",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("abrollbehaelter_hilfsorganisation_brandbekaempfung_keine", () =>
    expect(
      getIcon("abrollbehaelter_hilfsorganisation_brandbekaempfung_keine", {
        grundzeichen: "abrollbehaelter",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g></svg>"`
    ));

  it("abrollbehaelter_hilfsorganisation_brandbekaempfung_staffel", () =>
    expect(
      getIcon("abrollbehaelter_hilfsorganisation_brandbekaempfung_staffel", {
        grundzeichen: "abrollbehaelter",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_hilfsorganisation_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("abrollbehaelter_hilfsorganisation_brandbekaempfung_gruppe", {
        grundzeichen: "abrollbehaelter",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_hilfsorganisation_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon(
        "abrollbehaelter_hilfsorganisation_brandbekaempfung_bereitschaft",
        {
          grundzeichen: "abrollbehaelter",
          organisation: "hilfsorganisation",
          fachaufgabe: "brandbekaempfung",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("abrollbehaelter_thw_brandbekaempfung_keine", () =>
    expect(
      getIcon("abrollbehaelter_thw_brandbekaempfung_keine", {
        grundzeichen: "abrollbehaelter",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g></svg>"`
    ));

  it("abrollbehaelter_thw_brandbekaempfung_staffel", () =>
    expect(
      getIcon("abrollbehaelter_thw_brandbekaempfung_staffel", {
        grundzeichen: "abrollbehaelter",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_thw_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("abrollbehaelter_thw_brandbekaempfung_gruppe", {
        grundzeichen: "abrollbehaelter",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_thw_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("abrollbehaelter_thw_brandbekaempfung_bereitschaft", {
        grundzeichen: "abrollbehaelter",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("abrollbehaelter_keine_dekontamination_keine", () =>
    expect(
      getIcon("abrollbehaelter_keine_dekontamination_keine", {
        grundzeichen: "abrollbehaelter",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("abrollbehaelter_keine_dekontamination_staffel", () =>
    expect(
      getIcon("abrollbehaelter_keine_dekontamination_staffel", {
        grundzeichen: "abrollbehaelter",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_keine_dekontamination_gruppe", () =>
    expect(
      getIcon("abrollbehaelter_keine_dekontamination_gruppe", {
        grundzeichen: "abrollbehaelter",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_keine_dekontamination_bereitschaft", () =>
    expect(
      getIcon("abrollbehaelter_keine_dekontamination_bereitschaft", {
        grundzeichen: "abrollbehaelter",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("abrollbehaelter_feuerwehr_dekontamination_keine", () =>
    expect(
      getIcon("abrollbehaelter_feuerwehr_dekontamination_keine", {
        grundzeichen: "abrollbehaelter",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("abrollbehaelter_feuerwehr_dekontamination_staffel", () =>
    expect(
      getIcon("abrollbehaelter_feuerwehr_dekontamination_staffel", {
        grundzeichen: "abrollbehaelter",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_feuerwehr_dekontamination_gruppe", () =>
    expect(
      getIcon("abrollbehaelter_feuerwehr_dekontamination_gruppe", {
        grundzeichen: "abrollbehaelter",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_feuerwehr_dekontamination_bereitschaft", () =>
    expect(
      getIcon("abrollbehaelter_feuerwehr_dekontamination_bereitschaft", {
        grundzeichen: "abrollbehaelter",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("abrollbehaelter_hilfsorganisation_dekontamination_keine", () =>
    expect(
      getIcon("abrollbehaelter_hilfsorganisation_dekontamination_keine", {
        grundzeichen: "abrollbehaelter",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("abrollbehaelter_hilfsorganisation_dekontamination_staffel", () =>
    expect(
      getIcon("abrollbehaelter_hilfsorganisation_dekontamination_staffel", {
        grundzeichen: "abrollbehaelter",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_hilfsorganisation_dekontamination_gruppe", () =>
    expect(
      getIcon("abrollbehaelter_hilfsorganisation_dekontamination_gruppe", {
        grundzeichen: "abrollbehaelter",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_hilfsorganisation_dekontamination_bereitschaft", () =>
    expect(
      getIcon(
        "abrollbehaelter_hilfsorganisation_dekontamination_bereitschaft",
        {
          grundzeichen: "abrollbehaelter",
          organisation: "hilfsorganisation",
          fachaufgabe: "dekontamination",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("abrollbehaelter_thw_dekontamination_keine", () =>
    expect(
      getIcon("abrollbehaelter_thw_dekontamination_keine", {
        grundzeichen: "abrollbehaelter",
        organisation: "thw",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("abrollbehaelter_thw_dekontamination_staffel", () =>
    expect(
      getIcon("abrollbehaelter_thw_dekontamination_staffel", {
        grundzeichen: "abrollbehaelter",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_thw_dekontamination_gruppe", () =>
    expect(
      getIcon("abrollbehaelter_thw_dekontamination_gruppe", {
        grundzeichen: "abrollbehaelter",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_thw_dekontamination_bereitschaft", () =>
    expect(
      getIcon("abrollbehaelter_thw_dekontamination_bereitschaft", {
        grundzeichen: "abrollbehaelter",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("abrollbehaelter_keine_rettungswesen_keine", () =>
    expect(
      getIcon("abrollbehaelter_keine_rettungswesen_keine", {
        grundzeichen: "abrollbehaelter",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g></svg>"`
    ));

  it("abrollbehaelter_keine_rettungswesen_staffel", () =>
    expect(
      getIcon("abrollbehaelter_keine_rettungswesen_staffel", {
        grundzeichen: "abrollbehaelter",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_keine_rettungswesen_gruppe", () =>
    expect(
      getIcon("abrollbehaelter_keine_rettungswesen_gruppe", {
        grundzeichen: "abrollbehaelter",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_keine_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("abrollbehaelter_keine_rettungswesen_bereitschaft", {
        grundzeichen: "abrollbehaelter",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("abrollbehaelter_feuerwehr_rettungswesen_keine", () =>
    expect(
      getIcon("abrollbehaelter_feuerwehr_rettungswesen_keine", {
        grundzeichen: "abrollbehaelter",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g></svg>"`
    ));

  it("abrollbehaelter_feuerwehr_rettungswesen_staffel", () =>
    expect(
      getIcon("abrollbehaelter_feuerwehr_rettungswesen_staffel", {
        grundzeichen: "abrollbehaelter",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_feuerwehr_rettungswesen_gruppe", () =>
    expect(
      getIcon("abrollbehaelter_feuerwehr_rettungswesen_gruppe", {
        grundzeichen: "abrollbehaelter",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_feuerwehr_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("abrollbehaelter_feuerwehr_rettungswesen_bereitschaft", {
        grundzeichen: "abrollbehaelter",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("abrollbehaelter_hilfsorganisation_rettungswesen_keine", () =>
    expect(
      getIcon("abrollbehaelter_hilfsorganisation_rettungswesen_keine", {
        grundzeichen: "abrollbehaelter",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g></svg>"`
    ));

  it("abrollbehaelter_hilfsorganisation_rettungswesen_staffel", () =>
    expect(
      getIcon("abrollbehaelter_hilfsorganisation_rettungswesen_staffel", {
        grundzeichen: "abrollbehaelter",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_hilfsorganisation_rettungswesen_gruppe", () =>
    expect(
      getIcon("abrollbehaelter_hilfsorganisation_rettungswesen_gruppe", {
        grundzeichen: "abrollbehaelter",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_hilfsorganisation_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("abrollbehaelter_hilfsorganisation_rettungswesen_bereitschaft", {
        grundzeichen: "abrollbehaelter",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("abrollbehaelter_thw_rettungswesen_keine", () =>
    expect(
      getIcon("abrollbehaelter_thw_rettungswesen_keine", {
        grundzeichen: "abrollbehaelter",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g></svg>"`
    ));

  it("abrollbehaelter_thw_rettungswesen_staffel", () =>
    expect(
      getIcon("abrollbehaelter_thw_rettungswesen_staffel", {
        grundzeichen: "abrollbehaelter",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_thw_rettungswesen_gruppe", () =>
    expect(
      getIcon("abrollbehaelter_thw_rettungswesen_gruppe", {
        grundzeichen: "abrollbehaelter",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("abrollbehaelter_thw_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("abrollbehaelter_thw_rettungswesen_bereitschaft", {
        grundzeichen: "abrollbehaelter",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"4\\" cy=\\"10\\" r=\\"3\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("anhaenger_keine_keine_keine", () =>
    expect(
      getIcon("anhaenger_keine_keine_keine", { grundzeichen: "anhaenger" })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" /></svg>"`
    ));

  it("anhaenger_keine_keine_staffel", () =>
    expect(
      getIcon("anhaenger_keine_keine_staffel", {
        grundzeichen: "anhaenger",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" /><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_keine_keine_gruppe", () =>
    expect(
      getIcon("anhaenger_keine_keine_gruppe", {
        grundzeichen: "anhaenger",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" /><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_keine_keine_bereitschaft", () =>
    expect(
      getIcon("anhaenger_keine_keine_bereitschaft", {
        grundzeichen: "anhaenger",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("anhaenger_feuerwehr_keine_keine", () =>
    expect(
      getIcon("anhaenger_feuerwehr_keine_keine", {
        grundzeichen: "anhaenger",
        organisation: "feuerwehr",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#cc0000\\" /></svg>"`
    ));

  it("anhaenger_feuerwehr_keine_staffel", () =>
    expect(
      getIcon("anhaenger_feuerwehr_keine_staffel", {
        grundzeichen: "anhaenger",
        organisation: "feuerwehr",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#cc0000\\" /><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_feuerwehr_keine_gruppe", () =>
    expect(
      getIcon("anhaenger_feuerwehr_keine_gruppe", {
        grundzeichen: "anhaenger",
        organisation: "feuerwehr",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#cc0000\\" /><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_feuerwehr_keine_bereitschaft", () =>
    expect(
      getIcon("anhaenger_feuerwehr_keine_bereitschaft", {
        grundzeichen: "anhaenger",
        organisation: "feuerwehr",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#cc0000\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("anhaenger_hilfsorganisation_keine_keine", () =>
    expect(
      getIcon("anhaenger_hilfsorganisation_keine_keine", {
        grundzeichen: "anhaenger",
        organisation: "hilfsorganisation",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#ffffff\\" /></svg>"`
    ));

  it("anhaenger_hilfsorganisation_keine_staffel", () =>
    expect(
      getIcon("anhaenger_hilfsorganisation_keine_staffel", {
        grundzeichen: "anhaenger",
        organisation: "hilfsorganisation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#ffffff\\" /><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_hilfsorganisation_keine_gruppe", () =>
    expect(
      getIcon("anhaenger_hilfsorganisation_keine_gruppe", {
        grundzeichen: "anhaenger",
        organisation: "hilfsorganisation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#ffffff\\" /><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_hilfsorganisation_keine_bereitschaft", () =>
    expect(
      getIcon("anhaenger_hilfsorganisation_keine_bereitschaft", {
        grundzeichen: "anhaenger",
        organisation: "hilfsorganisation",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#ffffff\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("anhaenger_thw_keine_keine", () =>
    expect(
      getIcon("anhaenger_thw_keine_keine", {
        grundzeichen: "anhaenger",
        organisation: "thw",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#0000dd\\" /></svg>"`
    ));

  it("anhaenger_thw_keine_staffel", () =>
    expect(
      getIcon("anhaenger_thw_keine_staffel", {
        grundzeichen: "anhaenger",
        organisation: "thw",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#0000dd\\" /><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_thw_keine_gruppe", () =>
    expect(
      getIcon("anhaenger_thw_keine_gruppe", {
        grundzeichen: "anhaenger",
        organisation: "thw",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#0000dd\\" /><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_thw_keine_bereitschaft", () =>
    expect(
      getIcon("anhaenger_thw_keine_bereitschaft", {
        grundzeichen: "anhaenger",
        organisation: "thw",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#0000dd\\" /><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("anhaenger_keine_brandbekaempfung_keine", () =>
    expect(
      getIcon("anhaenger_keine_brandbekaempfung_keine", {
        grundzeichen: "anhaenger",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g></svg>"`
    ));

  it("anhaenger_keine_brandbekaempfung_staffel", () =>
    expect(
      getIcon("anhaenger_keine_brandbekaempfung_staffel", {
        grundzeichen: "anhaenger",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_keine_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("anhaenger_keine_brandbekaempfung_gruppe", {
        grundzeichen: "anhaenger",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_keine_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("anhaenger_keine_brandbekaempfung_bereitschaft", {
        grundzeichen: "anhaenger",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("anhaenger_feuerwehr_brandbekaempfung_keine", () =>
    expect(
      getIcon("anhaenger_feuerwehr_brandbekaempfung_keine", {
        grundzeichen: "anhaenger",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g></svg>"`
    ));

  it("anhaenger_feuerwehr_brandbekaempfung_staffel", () =>
    expect(
      getIcon("anhaenger_feuerwehr_brandbekaempfung_staffel", {
        grundzeichen: "anhaenger",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_feuerwehr_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("anhaenger_feuerwehr_brandbekaempfung_gruppe", {
        grundzeichen: "anhaenger",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_feuerwehr_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("anhaenger_feuerwehr_brandbekaempfung_bereitschaft", {
        grundzeichen: "anhaenger",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("anhaenger_hilfsorganisation_brandbekaempfung_keine", () =>
    expect(
      getIcon("anhaenger_hilfsorganisation_brandbekaempfung_keine", {
        grundzeichen: "anhaenger",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g></svg>"`
    ));

  it("anhaenger_hilfsorganisation_brandbekaempfung_staffel", () =>
    expect(
      getIcon("anhaenger_hilfsorganisation_brandbekaempfung_staffel", {
        grundzeichen: "anhaenger",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_hilfsorganisation_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("anhaenger_hilfsorganisation_brandbekaempfung_gruppe", {
        grundzeichen: "anhaenger",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_hilfsorganisation_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("anhaenger_hilfsorganisation_brandbekaempfung_bereitschaft", {
        grundzeichen: "anhaenger",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("anhaenger_thw_brandbekaempfung_keine", () =>
    expect(
      getIcon("anhaenger_thw_brandbekaempfung_keine", {
        grundzeichen: "anhaenger",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g></svg>"`
    ));

  it("anhaenger_thw_brandbekaempfung_staffel", () =>
    expect(
      getIcon("anhaenger_thw_brandbekaempfung_staffel", {
        grundzeichen: "anhaenger",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_thw_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("anhaenger_thw_brandbekaempfung_gruppe", {
        grundzeichen: "anhaenger",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_thw_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("anhaenger_thw_brandbekaempfung_bereitschaft", {
        grundzeichen: "anhaenger",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("anhaenger_keine_dekontamination_keine", () =>
    expect(
      getIcon("anhaenger_keine_dekontamination_keine", {
        grundzeichen: "anhaenger",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("anhaenger_keine_dekontamination_staffel", () =>
    expect(
      getIcon("anhaenger_keine_dekontamination_staffel", {
        grundzeichen: "anhaenger",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_keine_dekontamination_gruppe", () =>
    expect(
      getIcon("anhaenger_keine_dekontamination_gruppe", {
        grundzeichen: "anhaenger",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_keine_dekontamination_bereitschaft", () =>
    expect(
      getIcon("anhaenger_keine_dekontamination_bereitschaft", {
        grundzeichen: "anhaenger",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("anhaenger_feuerwehr_dekontamination_keine", () =>
    expect(
      getIcon("anhaenger_feuerwehr_dekontamination_keine", {
        grundzeichen: "anhaenger",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("anhaenger_feuerwehr_dekontamination_staffel", () =>
    expect(
      getIcon("anhaenger_feuerwehr_dekontamination_staffel", {
        grundzeichen: "anhaenger",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_feuerwehr_dekontamination_gruppe", () =>
    expect(
      getIcon("anhaenger_feuerwehr_dekontamination_gruppe", {
        grundzeichen: "anhaenger",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_feuerwehr_dekontamination_bereitschaft", () =>
    expect(
      getIcon("anhaenger_feuerwehr_dekontamination_bereitschaft", {
        grundzeichen: "anhaenger",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("anhaenger_hilfsorganisation_dekontamination_keine", () =>
    expect(
      getIcon("anhaenger_hilfsorganisation_dekontamination_keine", {
        grundzeichen: "anhaenger",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("anhaenger_hilfsorganisation_dekontamination_staffel", () =>
    expect(
      getIcon("anhaenger_hilfsorganisation_dekontamination_staffel", {
        grundzeichen: "anhaenger",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_hilfsorganisation_dekontamination_gruppe", () =>
    expect(
      getIcon("anhaenger_hilfsorganisation_dekontamination_gruppe", {
        grundzeichen: "anhaenger",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_hilfsorganisation_dekontamination_bereitschaft", () =>
    expect(
      getIcon("anhaenger_hilfsorganisation_dekontamination_bereitschaft", {
        grundzeichen: "anhaenger",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("anhaenger_thw_dekontamination_keine", () =>
    expect(
      getIcon("anhaenger_thw_dekontamination_keine", {
        grundzeichen: "anhaenger",
        organisation: "thw",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("anhaenger_thw_dekontamination_staffel", () =>
    expect(
      getIcon("anhaenger_thw_dekontamination_staffel", {
        grundzeichen: "anhaenger",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_thw_dekontamination_gruppe", () =>
    expect(
      getIcon("anhaenger_thw_dekontamination_gruppe", {
        grundzeichen: "anhaenger",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_thw_dekontamination_bereitschaft", () =>
    expect(
      getIcon("anhaenger_thw_dekontamination_bereitschaft", {
        grundzeichen: "anhaenger",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(28,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("anhaenger_keine_rettungswesen_keine", () =>
    expect(
      getIcon("anhaenger_keine_rettungswesen_keine", {
        grundzeichen: "anhaenger",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g></svg>"`
    ));

  it("anhaenger_keine_rettungswesen_staffel", () =>
    expect(
      getIcon("anhaenger_keine_rettungswesen_staffel", {
        grundzeichen: "anhaenger",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_keine_rettungswesen_gruppe", () =>
    expect(
      getIcon("anhaenger_keine_rettungswesen_gruppe", {
        grundzeichen: "anhaenger",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_keine_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("anhaenger_keine_rettungswesen_bereitschaft", {
        grundzeichen: "anhaenger",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("anhaenger_feuerwehr_rettungswesen_keine", () =>
    expect(
      getIcon("anhaenger_feuerwehr_rettungswesen_keine", {
        grundzeichen: "anhaenger",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g></svg>"`
    ));

  it("anhaenger_feuerwehr_rettungswesen_staffel", () =>
    expect(
      getIcon("anhaenger_feuerwehr_rettungswesen_staffel", {
        grundzeichen: "anhaenger",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_feuerwehr_rettungswesen_gruppe", () =>
    expect(
      getIcon("anhaenger_feuerwehr_rettungswesen_gruppe", {
        grundzeichen: "anhaenger",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_feuerwehr_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("anhaenger_feuerwehr_rettungswesen_bereitschaft", {
        grundzeichen: "anhaenger",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("anhaenger_hilfsorganisation_rettungswesen_keine", () =>
    expect(
      getIcon("anhaenger_hilfsorganisation_rettungswesen_keine", {
        grundzeichen: "anhaenger",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g></svg>"`
    ));

  it("anhaenger_hilfsorganisation_rettungswesen_staffel", () =>
    expect(
      getIcon("anhaenger_hilfsorganisation_rettungswesen_staffel", {
        grundzeichen: "anhaenger",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_hilfsorganisation_rettungswesen_gruppe", () =>
    expect(
      getIcon("anhaenger_hilfsorganisation_rettungswesen_gruppe", {
        grundzeichen: "anhaenger",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_hilfsorganisation_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("anhaenger_hilfsorganisation_rettungswesen_bereitschaft", {
        grundzeichen: "anhaenger",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#ffffff\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("anhaenger_thw_rettungswesen_keine", () =>
    expect(
      getIcon("anhaenger_thw_rettungswesen_keine", {
        grundzeichen: "anhaenger",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g></svg>"`
    ));

  it("anhaenger_thw_rettungswesen_staffel", () =>
    expect(
      getIcon("anhaenger_thw_rettungswesen_staffel", {
        grundzeichen: "anhaenger",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 54.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(37,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_thw_rettungswesen_gruppe", () =>
    expect(
      getIcon("anhaenger_thw_rettungswesen_gruppe", {
        grundzeichen: "anhaenger",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 47.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><g fill=\\"black\\" transform=\\"translate(33.5,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("anhaenger_thw_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("anhaenger_thw_rettungswesen_bereitschaft", {
        grundzeichen: "anhaenger",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 49.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z\\" /></clipPath></defs><path d=\\"M7,44 V1 Q35,10 74,1 V44 Z M7,10 h-7\\" fill=\\"#0000dd\\" /><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" transform=\\"translate(6,1.8000000000000007) scale(0.92)\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(37.5,-4.5)\\" /></svg>"`
    ));

  it("schienenfahrzeug_keine_keine_keine", () =>
    expect(
      getIcon("schienenfahrzeug_keine_keine_keine", {
        grundzeichen: "schienenfahrzeug",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_keine_keine_staffel", () =>
    expect(
      getIcon("schienenfahrzeug_keine_keine_staffel", {
        grundzeichen: "schienenfahrzeug",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_keine_keine_gruppe", () =>
    expect(
      getIcon("schienenfahrzeug_keine_keine_gruppe", {
        grundzeichen: "schienenfahrzeug",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_keine_keine_bereitschaft", () =>
    expect(
      getIcon("schienenfahrzeug_keine_keine_bereitschaft", {
        grundzeichen: "schienenfahrzeug",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("schienenfahrzeug_feuerwehr_keine_keine", () =>
    expect(
      getIcon("schienenfahrzeug_feuerwehr_keine_keine", {
        grundzeichen: "schienenfahrzeug",
        organisation: "feuerwehr",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_feuerwehr_keine_staffel", () =>
    expect(
      getIcon("schienenfahrzeug_feuerwehr_keine_staffel", {
        grundzeichen: "schienenfahrzeug",
        organisation: "feuerwehr",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_feuerwehr_keine_gruppe", () =>
    expect(
      getIcon("schienenfahrzeug_feuerwehr_keine_gruppe", {
        grundzeichen: "schienenfahrzeug",
        organisation: "feuerwehr",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_feuerwehr_keine_bereitschaft", () =>
    expect(
      getIcon("schienenfahrzeug_feuerwehr_keine_bereitschaft", {
        grundzeichen: "schienenfahrzeug",
        organisation: "feuerwehr",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("schienenfahrzeug_hilfsorganisation_keine_keine", () =>
    expect(
      getIcon("schienenfahrzeug_hilfsorganisation_keine_keine", {
        grundzeichen: "schienenfahrzeug",
        organisation: "hilfsorganisation",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_hilfsorganisation_keine_staffel", () =>
    expect(
      getIcon("schienenfahrzeug_hilfsorganisation_keine_staffel", {
        grundzeichen: "schienenfahrzeug",
        organisation: "hilfsorganisation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_hilfsorganisation_keine_gruppe", () =>
    expect(
      getIcon("schienenfahrzeug_hilfsorganisation_keine_gruppe", {
        grundzeichen: "schienenfahrzeug",
        organisation: "hilfsorganisation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_hilfsorganisation_keine_bereitschaft", () =>
    expect(
      getIcon("schienenfahrzeug_hilfsorganisation_keine_bereitschaft", {
        grundzeichen: "schienenfahrzeug",
        organisation: "hilfsorganisation",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("schienenfahrzeug_thw_keine_keine", () =>
    expect(
      getIcon("schienenfahrzeug_thw_keine_keine", {
        grundzeichen: "schienenfahrzeug",
        organisation: "thw",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_thw_keine_staffel", () =>
    expect(
      getIcon("schienenfahrzeug_thw_keine_staffel", {
        grundzeichen: "schienenfahrzeug",
        organisation: "thw",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_thw_keine_gruppe", () =>
    expect(
      getIcon("schienenfahrzeug_thw_keine_gruppe", {
        grundzeichen: "schienenfahrzeug",
        organisation: "thw",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_thw_keine_bereitschaft", () =>
    expect(
      getIcon("schienenfahrzeug_thw_keine_bereitschaft", {
        grundzeichen: "schienenfahrzeug",
        organisation: "thw",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("schienenfahrzeug_keine_brandbekaempfung_keine", () =>
    expect(
      getIcon("schienenfahrzeug_keine_brandbekaempfung_keine", {
        grundzeichen: "schienenfahrzeug",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_keine_brandbekaempfung_staffel", () =>
    expect(
      getIcon("schienenfahrzeug_keine_brandbekaempfung_staffel", {
        grundzeichen: "schienenfahrzeug",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_keine_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("schienenfahrzeug_keine_brandbekaempfung_gruppe", {
        grundzeichen: "schienenfahrzeug",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_keine_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("schienenfahrzeug_keine_brandbekaempfung_bereitschaft", {
        grundzeichen: "schienenfahrzeug",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("schienenfahrzeug_feuerwehr_brandbekaempfung_keine", () =>
    expect(
      getIcon("schienenfahrzeug_feuerwehr_brandbekaempfung_keine", {
        grundzeichen: "schienenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_feuerwehr_brandbekaempfung_staffel", () =>
    expect(
      getIcon("schienenfahrzeug_feuerwehr_brandbekaempfung_staffel", {
        grundzeichen: "schienenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_feuerwehr_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("schienenfahrzeug_feuerwehr_brandbekaempfung_gruppe", {
        grundzeichen: "schienenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_feuerwehr_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("schienenfahrzeug_feuerwehr_brandbekaempfung_bereitschaft", {
        grundzeichen: "schienenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("schienenfahrzeug_hilfsorganisation_brandbekaempfung_keine", () =>
    expect(
      getIcon("schienenfahrzeug_hilfsorganisation_brandbekaempfung_keine", {
        grundzeichen: "schienenfahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_hilfsorganisation_brandbekaempfung_staffel", () =>
    expect(
      getIcon("schienenfahrzeug_hilfsorganisation_brandbekaempfung_staffel", {
        grundzeichen: "schienenfahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_hilfsorganisation_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("schienenfahrzeug_hilfsorganisation_brandbekaempfung_gruppe", {
        grundzeichen: "schienenfahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_hilfsorganisation_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon(
        "schienenfahrzeug_hilfsorganisation_brandbekaempfung_bereitschaft",
        {
          grundzeichen: "schienenfahrzeug",
          organisation: "hilfsorganisation",
          fachaufgabe: "brandbekaempfung",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("schienenfahrzeug_thw_brandbekaempfung_keine", () =>
    expect(
      getIcon("schienenfahrzeug_thw_brandbekaempfung_keine", {
        grundzeichen: "schienenfahrzeug",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_thw_brandbekaempfung_staffel", () =>
    expect(
      getIcon("schienenfahrzeug_thw_brandbekaempfung_staffel", {
        grundzeichen: "schienenfahrzeug",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_thw_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("schienenfahrzeug_thw_brandbekaempfung_gruppe", {
        grundzeichen: "schienenfahrzeug",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_thw_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("schienenfahrzeug_thw_brandbekaempfung_bereitschaft", {
        grundzeichen: "schienenfahrzeug",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("schienenfahrzeug_keine_dekontamination_keine", () =>
    expect(
      getIcon("schienenfahrzeug_keine_dekontamination_keine", {
        grundzeichen: "schienenfahrzeug",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("schienenfahrzeug_keine_dekontamination_staffel", () =>
    expect(
      getIcon("schienenfahrzeug_keine_dekontamination_staffel", {
        grundzeichen: "schienenfahrzeug",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_keine_dekontamination_gruppe", () =>
    expect(
      getIcon("schienenfahrzeug_keine_dekontamination_gruppe", {
        grundzeichen: "schienenfahrzeug",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_keine_dekontamination_bereitschaft", () =>
    expect(
      getIcon("schienenfahrzeug_keine_dekontamination_bereitschaft", {
        grundzeichen: "schienenfahrzeug",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("schienenfahrzeug_feuerwehr_dekontamination_keine", () =>
    expect(
      getIcon("schienenfahrzeug_feuerwehr_dekontamination_keine", {
        grundzeichen: "schienenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("schienenfahrzeug_feuerwehr_dekontamination_staffel", () =>
    expect(
      getIcon("schienenfahrzeug_feuerwehr_dekontamination_staffel", {
        grundzeichen: "schienenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_feuerwehr_dekontamination_gruppe", () =>
    expect(
      getIcon("schienenfahrzeug_feuerwehr_dekontamination_gruppe", {
        grundzeichen: "schienenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_feuerwehr_dekontamination_bereitschaft", () =>
    expect(
      getIcon("schienenfahrzeug_feuerwehr_dekontamination_bereitschaft", {
        grundzeichen: "schienenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("schienenfahrzeug_hilfsorganisation_dekontamination_keine", () =>
    expect(
      getIcon("schienenfahrzeug_hilfsorganisation_dekontamination_keine", {
        grundzeichen: "schienenfahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("schienenfahrzeug_hilfsorganisation_dekontamination_staffel", () =>
    expect(
      getIcon("schienenfahrzeug_hilfsorganisation_dekontamination_staffel", {
        grundzeichen: "schienenfahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_hilfsorganisation_dekontamination_gruppe", () =>
    expect(
      getIcon("schienenfahrzeug_hilfsorganisation_dekontamination_gruppe", {
        grundzeichen: "schienenfahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_hilfsorganisation_dekontamination_bereitschaft", () =>
    expect(
      getIcon(
        "schienenfahrzeug_hilfsorganisation_dekontamination_bereitschaft",
        {
          grundzeichen: "schienenfahrzeug",
          organisation: "hilfsorganisation",
          fachaufgabe: "dekontamination",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("schienenfahrzeug_thw_dekontamination_keine", () =>
    expect(
      getIcon("schienenfahrzeug_thw_dekontamination_keine", {
        grundzeichen: "schienenfahrzeug",
        organisation: "thw",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("schienenfahrzeug_thw_dekontamination_staffel", () =>
    expect(
      getIcon("schienenfahrzeug_thw_dekontamination_staffel", {
        grundzeichen: "schienenfahrzeug",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_thw_dekontamination_gruppe", () =>
    expect(
      getIcon("schienenfahrzeug_thw_dekontamination_gruppe", {
        grundzeichen: "schienenfahrzeug",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_thw_dekontamination_bereitschaft", () =>
    expect(
      getIcon("schienenfahrzeug_thw_dekontamination_bereitschaft", {
        grundzeichen: "schienenfahrzeug",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("schienenfahrzeug_keine_rettungswesen_keine", () =>
    expect(
      getIcon("schienenfahrzeug_keine_rettungswesen_keine", {
        grundzeichen: "schienenfahrzeug",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_keine_rettungswesen_staffel", () =>
    expect(
      getIcon("schienenfahrzeug_keine_rettungswesen_staffel", {
        grundzeichen: "schienenfahrzeug",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_keine_rettungswesen_gruppe", () =>
    expect(
      getIcon("schienenfahrzeug_keine_rettungswesen_gruppe", {
        grundzeichen: "schienenfahrzeug",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_keine_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("schienenfahrzeug_keine_rettungswesen_bereitschaft", {
        grundzeichen: "schienenfahrzeug",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("schienenfahrzeug_feuerwehr_rettungswesen_keine", () =>
    expect(
      getIcon("schienenfahrzeug_feuerwehr_rettungswesen_keine", {
        grundzeichen: "schienenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_feuerwehr_rettungswesen_staffel", () =>
    expect(
      getIcon("schienenfahrzeug_feuerwehr_rettungswesen_staffel", {
        grundzeichen: "schienenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_feuerwehr_rettungswesen_gruppe", () =>
    expect(
      getIcon("schienenfahrzeug_feuerwehr_rettungswesen_gruppe", {
        grundzeichen: "schienenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_feuerwehr_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("schienenfahrzeug_feuerwehr_rettungswesen_bereitschaft", {
        grundzeichen: "schienenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("schienenfahrzeug_hilfsorganisation_rettungswesen_keine", () =>
    expect(
      getIcon("schienenfahrzeug_hilfsorganisation_rettungswesen_keine", {
        grundzeichen: "schienenfahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_hilfsorganisation_rettungswesen_staffel", () =>
    expect(
      getIcon("schienenfahrzeug_hilfsorganisation_rettungswesen_staffel", {
        grundzeichen: "schienenfahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_hilfsorganisation_rettungswesen_gruppe", () =>
    expect(
      getIcon("schienenfahrzeug_hilfsorganisation_rettungswesen_gruppe", {
        grundzeichen: "schienenfahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_hilfsorganisation_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("schienenfahrzeug_hilfsorganisation_rettungswesen_bereitschaft", {
        grundzeichen: "schienenfahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("schienenfahrzeug_thw_rettungswesen_keine", () =>
    expect(
      getIcon("schienenfahrzeug_thw_rettungswesen_keine", {
        grundzeichen: "schienenfahrzeug",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_thw_rettungswesen_staffel", () =>
    expect(
      getIcon("schienenfahrzeug_thw_rettungswesen_staffel", {
        grundzeichen: "schienenfahrzeug",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_thw_rettungswesen_gruppe", () =>
    expect(
      getIcon("schienenfahrzeug_thw_rettungswesen_gruppe", {
        grundzeichen: "schienenfahrzeug",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("schienenfahrzeug_thw_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("schienenfahrzeug_thw_rettungswesen_bereitschaft", {
        grundzeichen: "schienenfahrzeug",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><circle cx=\\"10\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"22\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"53\\" cy=\\"49\\" r=\\"5\\" /><circle cx=\\"65\\" cy=\\"49\\" r=\\"5\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kettenfahrzeug_keine_keine_keine", () =>
    expect(
      getIcon("kettenfahrzeug_keine_keine_keine", {
        grundzeichen: "kettenfahrzeug",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_keine_keine_staffel", () =>
    expect(
      getIcon("kettenfahrzeug_keine_keine_staffel", {
        grundzeichen: "kettenfahrzeug",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_keine_keine_gruppe", () =>
    expect(
      getIcon("kettenfahrzeug_keine_keine_gruppe", {
        grundzeichen: "kettenfahrzeug",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_keine_keine_bereitschaft", () =>
    expect(
      getIcon("kettenfahrzeug_keine_keine_bereitschaft", {
        grundzeichen: "kettenfahrzeug",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kettenfahrzeug_feuerwehr_keine_keine", () =>
    expect(
      getIcon("kettenfahrzeug_feuerwehr_keine_keine", {
        grundzeichen: "kettenfahrzeug",
        organisation: "feuerwehr",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_feuerwehr_keine_staffel", () =>
    expect(
      getIcon("kettenfahrzeug_feuerwehr_keine_staffel", {
        grundzeichen: "kettenfahrzeug",
        organisation: "feuerwehr",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_feuerwehr_keine_gruppe", () =>
    expect(
      getIcon("kettenfahrzeug_feuerwehr_keine_gruppe", {
        grundzeichen: "kettenfahrzeug",
        organisation: "feuerwehr",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_feuerwehr_keine_bereitschaft", () =>
    expect(
      getIcon("kettenfahrzeug_feuerwehr_keine_bereitschaft", {
        grundzeichen: "kettenfahrzeug",
        organisation: "feuerwehr",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kettenfahrzeug_hilfsorganisation_keine_keine", () =>
    expect(
      getIcon("kettenfahrzeug_hilfsorganisation_keine_keine", {
        grundzeichen: "kettenfahrzeug",
        organisation: "hilfsorganisation",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_hilfsorganisation_keine_staffel", () =>
    expect(
      getIcon("kettenfahrzeug_hilfsorganisation_keine_staffel", {
        grundzeichen: "kettenfahrzeug",
        organisation: "hilfsorganisation",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_hilfsorganisation_keine_gruppe", () =>
    expect(
      getIcon("kettenfahrzeug_hilfsorganisation_keine_gruppe", {
        grundzeichen: "kettenfahrzeug",
        organisation: "hilfsorganisation",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_hilfsorganisation_keine_bereitschaft", () =>
    expect(
      getIcon("kettenfahrzeug_hilfsorganisation_keine_bereitschaft", {
        grundzeichen: "kettenfahrzeug",
        organisation: "hilfsorganisation",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kettenfahrzeug_thw_keine_keine", () =>
    expect(
      getIcon("kettenfahrzeug_thw_keine_keine", {
        grundzeichen: "kettenfahrzeug",
        organisation: "thw",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_thw_keine_staffel", () =>
    expect(
      getIcon("kettenfahrzeug_thw_keine_staffel", {
        grundzeichen: "kettenfahrzeug",
        organisation: "thw",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_thw_keine_gruppe", () =>
    expect(
      getIcon("kettenfahrzeug_thw_keine_gruppe", {
        grundzeichen: "kettenfahrzeug",
        organisation: "thw",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_thw_keine_bereitschaft", () =>
    expect(
      getIcon("kettenfahrzeug_thw_keine_bereitschaft", {
        grundzeichen: "kettenfahrzeug",
        organisation: "thw",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kettenfahrzeug_keine_brandbekaempfung_keine", () =>
    expect(
      getIcon("kettenfahrzeug_keine_brandbekaempfung_keine", {
        grundzeichen: "kettenfahrzeug",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_keine_brandbekaempfung_staffel", () =>
    expect(
      getIcon("kettenfahrzeug_keine_brandbekaempfung_staffel", {
        grundzeichen: "kettenfahrzeug",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_keine_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("kettenfahrzeug_keine_brandbekaempfung_gruppe", {
        grundzeichen: "kettenfahrzeug",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_keine_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("kettenfahrzeug_keine_brandbekaempfung_bereitschaft", {
        grundzeichen: "kettenfahrzeug",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kettenfahrzeug_feuerwehr_brandbekaempfung_keine", () =>
    expect(
      getIcon("kettenfahrzeug_feuerwehr_brandbekaempfung_keine", {
        grundzeichen: "kettenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_feuerwehr_brandbekaempfung_staffel", () =>
    expect(
      getIcon("kettenfahrzeug_feuerwehr_brandbekaempfung_staffel", {
        grundzeichen: "kettenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_feuerwehr_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("kettenfahrzeug_feuerwehr_brandbekaempfung_gruppe", {
        grundzeichen: "kettenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_feuerwehr_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("kettenfahrzeug_feuerwehr_brandbekaempfung_bereitschaft", {
        grundzeichen: "kettenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kettenfahrzeug_hilfsorganisation_brandbekaempfung_keine", () =>
    expect(
      getIcon("kettenfahrzeug_hilfsorganisation_brandbekaempfung_keine", {
        grundzeichen: "kettenfahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_hilfsorganisation_brandbekaempfung_staffel", () =>
    expect(
      getIcon("kettenfahrzeug_hilfsorganisation_brandbekaempfung_staffel", {
        grundzeichen: "kettenfahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_hilfsorganisation_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("kettenfahrzeug_hilfsorganisation_brandbekaempfung_gruppe", {
        grundzeichen: "kettenfahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_hilfsorganisation_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon(
        "kettenfahrzeug_hilfsorganisation_brandbekaempfung_bereitschaft",
        {
          grundzeichen: "kettenfahrzeug",
          organisation: "hilfsorganisation",
          fachaufgabe: "brandbekaempfung",
          einheit: "bereitschaft",
        }
      )
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kettenfahrzeug_thw_brandbekaempfung_keine", () =>
    expect(
      getIcon("kettenfahrzeug_thw_brandbekaempfung_keine", {
        grundzeichen: "kettenfahrzeug",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_thw_brandbekaempfung_staffel", () =>
    expect(
      getIcon("kettenfahrzeug_thw_brandbekaempfung_staffel", {
        grundzeichen: "kettenfahrzeug",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_thw_brandbekaempfung_gruppe", () =>
    expect(
      getIcon("kettenfahrzeug_thw_brandbekaempfung_gruppe", {
        grundzeichen: "kettenfahrzeug",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_thw_brandbekaempfung_bereitschaft", () =>
    expect(
      getIcon("kettenfahrzeug_thw_brandbekaempfung_bereitschaft", {
        grundzeichen: "kettenfahrzeug",
        organisation: "thw",
        fachaufgabe: "brandbekaempfung",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M75,0 L50,22.5 L75,45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kettenfahrzeug_keine_dekontamination_keine", () =>
    expect(
      getIcon("kettenfahrzeug_keine_dekontamination_keine", {
        grundzeichen: "kettenfahrzeug",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("kettenfahrzeug_keine_dekontamination_staffel", () =>
    expect(
      getIcon("kettenfahrzeug_keine_dekontamination_staffel", {
        grundzeichen: "kettenfahrzeug",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_keine_dekontamination_gruppe", () =>
    expect(
      getIcon("kettenfahrzeug_keine_dekontamination_gruppe", {
        grundzeichen: "kettenfahrzeug",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_keine_dekontamination_bereitschaft", () =>
    expect(
      getIcon("kettenfahrzeug_keine_dekontamination_bereitschaft", {
        grundzeichen: "kettenfahrzeug",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kettenfahrzeug_feuerwehr_dekontamination_keine", () =>
    expect(
      getIcon("kettenfahrzeug_feuerwehr_dekontamination_keine", {
        grundzeichen: "kettenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("kettenfahrzeug_feuerwehr_dekontamination_staffel", () =>
    expect(
      getIcon("kettenfahrzeug_feuerwehr_dekontamination_staffel", {
        grundzeichen: "kettenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_feuerwehr_dekontamination_gruppe", () =>
    expect(
      getIcon("kettenfahrzeug_feuerwehr_dekontamination_gruppe", {
        grundzeichen: "kettenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_feuerwehr_dekontamination_bereitschaft", () =>
    expect(
      getIcon("kettenfahrzeug_feuerwehr_dekontamination_bereitschaft", {
        grundzeichen: "kettenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kettenfahrzeug_hilfsorganisation_dekontamination_keine", () =>
    expect(
      getIcon("kettenfahrzeug_hilfsorganisation_dekontamination_keine", {
        grundzeichen: "kettenfahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("kettenfahrzeug_hilfsorganisation_dekontamination_staffel", () =>
    expect(
      getIcon("kettenfahrzeug_hilfsorganisation_dekontamination_staffel", {
        grundzeichen: "kettenfahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_hilfsorganisation_dekontamination_gruppe", () =>
    expect(
      getIcon("kettenfahrzeug_hilfsorganisation_dekontamination_gruppe", {
        grundzeichen: "kettenfahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_hilfsorganisation_dekontamination_bereitschaft", () =>
    expect(
      getIcon("kettenfahrzeug_hilfsorganisation_dekontamination_bereitschaft", {
        grundzeichen: "kettenfahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kettenfahrzeug_thw_dekontamination_keine", () =>
    expect(
      getIcon("kettenfahrzeug_thw_dekontamination_keine", {
        grundzeichen: "kettenfahrzeug",
        organisation: "thw",
        fachaufgabe: "dekontamination",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g></svg>"`
    ));

  it("kettenfahrzeug_thw_dekontamination_staffel", () =>
    expect(
      getIcon("kettenfahrzeug_thw_dekontamination_staffel", {
        grundzeichen: "kettenfahrzeug",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_thw_dekontamination_gruppe", () =>
    expect(
      getIcon("kettenfahrzeug_thw_dekontamination_gruppe", {
        grundzeichen: "kettenfahrzeug",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_thw_dekontamination_bereitschaft", () =>
    expect(
      getIcon("kettenfahrzeug_thw_dekontamination_bereitschaft", {
        grundzeichen: "kettenfahrzeug",
        organisation: "thw",
        fachaufgabe: "dekontamination",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><g transform=\\"translate(25,10) scale(0.8333333333333334)\\"><g><circle cx=\\"4\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><circle cx=\\"26\\" cy=\\"4\\" fill=\\"black\\" r=\\"3\\" /><path d=\\"M5.7,1.5 L29,29 M24.3,1.5 L1,29\\" /></g><path d=\\"M5.7,1.5 L29,29 M22.3,27.8 l6.7,1 -1,-6.7 M24.3,1.5 L1,29 M7.9,27.8 l-6.7,1 1,-6.7\\" /></g></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kettenfahrzeug_keine_rettungswesen_keine", () =>
    expect(
      getIcon("kettenfahrzeug_keine_rettungswesen_keine", {
        grundzeichen: "kettenfahrzeug",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_keine_rettungswesen_staffel", () =>
    expect(
      getIcon("kettenfahrzeug_keine_rettungswesen_staffel", {
        grundzeichen: "kettenfahrzeug",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_keine_rettungswesen_gruppe", () =>
    expect(
      getIcon("kettenfahrzeug_keine_rettungswesen_gruppe", {
        grundzeichen: "kettenfahrzeug",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_keine_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("kettenfahrzeug_keine_rettungswesen_bereitschaft", {
        grundzeichen: "kettenfahrzeug",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kettenfahrzeug_feuerwehr_rettungswesen_keine", () =>
    expect(
      getIcon("kettenfahrzeug_feuerwehr_rettungswesen_keine", {
        grundzeichen: "kettenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_feuerwehr_rettungswesen_staffel", () =>
    expect(
      getIcon("kettenfahrzeug_feuerwehr_rettungswesen_staffel", {
        grundzeichen: "kettenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_feuerwehr_rettungswesen_gruppe", () =>
    expect(
      getIcon("kettenfahrzeug_feuerwehr_rettungswesen_gruppe", {
        grundzeichen: "kettenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_feuerwehr_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("kettenfahrzeug_feuerwehr_rettungswesen_bereitschaft", {
        grundzeichen: "kettenfahrzeug",
        organisation: "feuerwehr",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#cc0000\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kettenfahrzeug_hilfsorganisation_rettungswesen_keine", () =>
    expect(
      getIcon("kettenfahrzeug_hilfsorganisation_rettungswesen_keine", {
        grundzeichen: "kettenfahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_hilfsorganisation_rettungswesen_staffel", () =>
    expect(
      getIcon("kettenfahrzeug_hilfsorganisation_rettungswesen_staffel", {
        grundzeichen: "kettenfahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_hilfsorganisation_rettungswesen_gruppe", () =>
    expect(
      getIcon("kettenfahrzeug_hilfsorganisation_rettungswesen_gruppe", {
        grundzeichen: "kettenfahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_hilfsorganisation_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("kettenfahrzeug_hilfsorganisation_rettungswesen_bereitschaft", {
        grundzeichen: "kettenfahrzeug",
        organisation: "hilfsorganisation",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#ffffff\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));

  it("kettenfahrzeug_thw_rettungswesen_keine", () =>
    expect(
      getIcon("kettenfahrzeug_thw_rettungswesen_keine", {
        grundzeichen: "kettenfahrzeug",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 55\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_thw_rettungswesen_staffel", () =>
    expect(
      getIcon("kettenfahrzeug_thw_rettungswesen_staffel", {
        grundzeichen: "kettenfahrzeug",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "staffel",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -9.5 75 64.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(34.5,-9.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"3\\" cy=\\"10\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_thw_rettungswesen_gruppe", () =>
    expect(
      getIcon("kettenfahrzeug_thw_rettungswesen_gruppe", {
        grundzeichen: "kettenfahrzeug",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "gruppe",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -2.5 75 57.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><g fill=\\"black\\" transform=\\"translate(31,-2.5)\\"><circle cx=\\"3\\" cy=\\"3\\" r=\\"2\\" /><circle cx=\\"10\\" cy=\\"3\\" r=\\"2\\" /></g></svg>"`
    ));

  it("kettenfahrzeug_thw_rettungswesen_bereitschaft", () =>
    expect(
      getIcon("kettenfahrzeug_thw_rettungswesen_bereitschaft", {
        grundzeichen: "kettenfahrzeug",
        organisation: "thw",
        fachaufgabe: "rettungswesen",
        einheit: "bereitschaft",
      })
    ).resolves.toMatchInlineSnapshot(
      `"<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?><svg fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 -4.5 75 59.5\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"gz-mask\\"><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" /></clipPath></defs><g><path d=\\"M1,44 V1 Q37.5,10 74,1 V44 Z\\" fill=\\"#0000dd\\" /><path d=\\"M5 48 a3 3 0 0 0 0 6 h65 a3 3 0 0 0 0 -6 Z\\" /></g><g clip-path=\\"url(#gz-mask)\\"><path d=\\"M0,22.5 H75 M37.5,0 V45\\" /></g><path d=\\"M1,1 h3 v7 h-3 Z\\" fill=\\"black\\" transform=\\"translate(35,-4.5)\\" /></svg>"`
    ));
});
