import { test, expect } from "@playwright/experimental-ct-react";
import TaktischesZeichen from "../src/TaktischesZeichen";

test("rendert ein SVG mit Inhalt im Browser", async ({ mount }) => {
  const component = await mount(
    <TaktischesZeichen
      grundzeichen="kraftfahrzeug-landgebunden"
      organisation="feuerwehr"
      fachaufgabe="brandbekaempfung"
      einheit="gruppe"
      name="LF20"
    />,
  );

  await expect(component).toHaveAttribute(
    "xmlns",
    "http://www.w3.org/2000/svg",
  );
  await expect(component.locator("> *")).not.toHaveCount(0);
});

test("reicht zusätzliche Props an das svg-Element durch", async ({ mount }) => {
  const component = await mount(
    <TaktischesZeichen grundzeichen="stelle" className="icon-test" />,
  );

  await expect(component).toHaveClass("icon-test");
});
