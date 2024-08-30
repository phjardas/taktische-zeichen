import { erzeugeTaktischesZeichen } from "./taktisches-zeichen";

describe("taktisches-zeichen", () => {
  it("should render an SVG", () => {
    const tz = erzeugeTaktischesZeichen({
      grundzeichen: "taktische-formation",
      organisation: "feuerwehr",
      skipFontRegistration: true,
    });

    expect(tz.toString()).toMatchInlineSnapshot(`
      "<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>
      <svg color=\\"#ffffff\\" fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"tz_taktische-formation\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /></svg>"
    `);
  });

  it("should render a data URL", () => {
    const tz = erzeugeTaktischesZeichen({
      grundzeichen: "taktische-formation",
      organisation: "feuerwehr",
      skipFontRegistration: true,
    });

    expect(tz.dataUrl).toMatchInlineSnapshot(
      `"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBjb2xvcj0iI2ZmZmZmZiIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgdmlld0JveD0iMCAwIDc1IDQ1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxjbGlwUGF0aCBpZD0idHpfdGFrdGlzY2hlLWZvcm1hdGlvbiI+PHBhdGggZD0iTTEsMSBINzQgVjQ0IEgxIFoiIC8+PC9jbGlwUGF0aD48L2RlZnM+PHBhdGggZD0iTTEsMSBINzQgVjQ0IEgxIFoiIGZpbGw9IiNjYzAwMDAiIC8+PC9zdmc+"`
    );
  });

  it("should render an SVG with name", () => {
    const tz = erzeugeTaktischesZeichen({
      grundzeichen: "taktische-formation",
      organisation: "feuerwehr",
      name: "Test",
      skipFontRegistration: true,
    });

    expect(tz.toString()).toMatchInlineSnapshot(`
      "<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>
      <svg color=\\"#ffffff\\" fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"tz_taktische-formation\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#tz_taktische-formation)\\"><g transform=\\"translate(3,3) scale(0.27906976744186046)\\"><text fill=\\"currentColor\\" stroke=\\"none\\" style=\\"font-family:Roboto Slab;font-size:30px;font-weight:bold;letter-spacing:-1px\\" x=\\"0\\" y=\\"21.5\\"><![CDATA[Test]]></text></g></g></svg>"
    `);
  });

  it("should render a data URL with name", () => {
    const tz = erzeugeTaktischesZeichen({
      grundzeichen: "taktische-formation",
      organisation: "feuerwehr",
      name: "Test",
      skipFontRegistration: true,
    });

    expect(tz.dataUrl).toMatchInlineSnapshot(
      `"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBjb2xvcj0iI2ZmZmZmZiIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgdmlld0JveD0iMCAwIDc1IDQ1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxjbGlwUGF0aCBpZD0idHpfdGFrdGlzY2hlLWZvcm1hdGlvbiI+PHBhdGggZD0iTTEsMSBINzQgVjQ0IEgxIFoiIC8+PC9jbGlwUGF0aD48L2RlZnM+PHBhdGggZD0iTTEsMSBINzQgVjQ0IEgxIFoiIGZpbGw9IiNjYzAwMDAiIC8+PGcgY2xpcC1wYXRoPSJ1cmwoI3R6X3Rha3Rpc2NoZS1mb3JtYXRpb24pIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLDMpIHNjYWxlKDAuMjc5MDY5NzY3NDQxODYwNDYpIj48dGV4dCBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0ibm9uZSIgc3R5bGU9ImZvbnQtZmFtaWx5OlJvYm90byBTbGFiO2ZvbnQtc2l6ZTozMHB4O2ZvbnQtd2VpZ2h0OmJvbGQ7bGV0dGVyLXNwYWNpbmc6LTFweCIgeD0iMCIgeT0iMjEuNSI+PCFbQ0RBVEFbVGVzdF1dPjwvdGV4dD48L2c+PC9nPjwvc3ZnPg=="`
    );
  });

  it("should render an SVG with UTF-8 name", () => {
    const tz = erzeugeTaktischesZeichen({
      grundzeichen: "taktische-formation",
      organisation: "feuerwehr",
      name: "Täst",
      skipFontRegistration: true,
    });

    expect(tz.toString()).toMatchInlineSnapshot(`
      "<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>
      <svg color=\\"#ffffff\\" fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"tz_taktische-formation\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#tz_taktische-formation)\\"><g transform=\\"translate(3,3) scale(0.27906976744186046)\\"><text fill=\\"currentColor\\" stroke=\\"none\\" style=\\"font-family:Roboto Slab;font-size:30px;font-weight:bold;letter-spacing:-1px\\" x=\\"0\\" y=\\"21.5\\"><![CDATA[Täst]]></text></g></g></svg>"
    `);
  });

  it("should render a data URL with UTF-8 name", () => {
    const tz = erzeugeTaktischesZeichen({
      grundzeichen: "taktische-formation",
      organisation: "feuerwehr",
      name: "Täst",
      skipFontRegistration: true,
    });

    expect(tz.dataUrl).toMatchInlineSnapshot(
      `"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBjb2xvcj0iI2ZmZmZmZiIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgdmlld0JveD0iMCAwIDc1IDQ1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxjbGlwUGF0aCBpZD0idHpfdGFrdGlzY2hlLWZvcm1hdGlvbiI+PHBhdGggZD0iTTEsMSBINzQgVjQ0IEgxIFoiIC8+PC9jbGlwUGF0aD48L2RlZnM+PHBhdGggZD0iTTEsMSBINzQgVjQ0IEgxIFoiIGZpbGw9IiNjYzAwMDAiIC8+PGcgY2xpcC1wYXRoPSJ1cmwoI3R6X3Rha3Rpc2NoZS1mb3JtYXRpb24pIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLDMpIHNjYWxlKDAuMjc5MDY5NzY3NDQxODYwNDYpIj48dGV4dCBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0ibm9uZSIgc3R5bGU9ImZvbnQtZmFtaWx5OlJvYm90byBTbGFiO2ZvbnQtc2l6ZTozMHB4O2ZvbnQtd2VpZ2h0OmJvbGQ7bGV0dGVyLXNwYWNpbmc6LTFweCIgeD0iMCIgeT0iMjEuNSI+PCFbQ0RBVEFbVMOkc3RdXT48L3RleHQ+PC9nPjwvZz48L3N2Zz4="`
    );
  });

  it("should render an SVG with name, text and typ", () => {
    const tz = erzeugeTaktischesZeichen({
      grundzeichen: "taktische-formation",
      organisation: "feuerwehr",
      name: "Name",
      text: "Text",
      typ: "Typ",
      skipFontRegistration: true,
    });

    console.log(tz.toString());

    expect(tz.toString()).toMatchInlineSnapshot(`
      "<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>
      <svg color=\\"#ffffff\\" fill=\\"transparent\\" stroke=\\"black\\" stroke-width=\\"2\\" viewBox=\\"0 0 75 45\\" xmlns=\\"http://www.w3.org/2000/svg\\"><defs><clipPath id=\\"tz_taktische-formation\\"><path d=\\"M1,1 H74 V44 H1 Z\\" /></clipPath></defs><path d=\\"M1,1 H74 V44 H1 Z\\" fill=\\"#cc0000\\" /><g clip-path=\\"url(#tz_taktische-formation)\\"><g transform=\\"translate(10,13.115079365079366) scale(0.873015873015873)\\"><text fill=\\"currentColor\\" stroke=\\"none\\" style=\\"font-family:Roboto Slab;font-size:30px;font-weight:bold;letter-spacing:-1px\\" x=\\"0\\" y=\\"21.5\\"><![CDATA[Text]]></text></g></g><g clip-path=\\"url(#tz_taktische-formation)\\"><g transform=\\"translate(10,15.109375) scale(0.6875)\\"><text fill=\\"currentColor\\" stroke=\\"none\\" style=\\"font-family:Roboto Slab;font-size:30px;font-weight:bold;letter-spacing:-1px\\" x=\\"0\\" y=\\"21.5\\"><![CDATA[Text2]]></text></g></g><g clip-path=\\"url(#tz_taktische-formation)\\"><g transform=\\"translate(3,3) scale(0.27906976744186046)\\"><text fill=\\"currentColor\\" stroke=\\"none\\" style=\\"font-family:Roboto Slab;font-size:30px;font-weight:bold;letter-spacing:-1px\\" x=\\"0\\" y=\\"21.5\\"><![CDATA[Name]]></text></g></g></svg>"
    `);
  });
});
