import {
  Container,
  Element,
  erzeugeTaktischesZeichen,
  TextNode,
  type TaktischesZeichen as TaktischesZeichenSpec,
} from "taktische-zeichen-core";

export class TaktischesZeichen extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  private render() {
    const root = this.shadowRoot;
    if (!root) return;
    if (root.firstChild) root.removeChild(root.firstChild);

    const spec = this.spec;
    if (!spec) return;

    try {
      const { svg } = erzeugeTaktischesZeichen(spec);
      root.append(render(svg));
    } catch (error) {
      console.error(
        "Fehler bei der erzeugung des Taktischen Zeichens: " +
          JSON.stringify(spec),
        error
      );
    }
  }

  private get spec(): TaktischesZeichenSpec | undefined {
    const grundzeichen = this.getAttribute("grundzeichen");
    const symbol = this.getAttribute("symbol");
    if (!grundzeichen && !symbol) return undefined;

    const fachaufgabe = this.getAttribute("fachaufgabe") || undefined;
    const organisation = this.getAttribute("organisation") || undefined;
    const einheit = this.getAttribute("einheit") || undefined;
    const verwaltungsstufe = this.getAttribute("verwaltungsstufe") || undefined;
    const funktion = this.getAttribute("funktion") || undefined;
    const text = this.getAttribute("text") || undefined;
    const name = this.getAttribute("name") || undefined;
    const typ = this.getAttribute("typ") || undefined;
    const organisationName = this.getAttribute("organisationName") || undefined;
    const farbe = this.getAttribute("farbe") || undefined;
    const skipFontRegistration =
      this.getAttribute("skipFontRegistration") === "true";

    return {
      grundzeichen,
      fachaufgabe,
      organisation,
      einheit,
      verwaltungsstufe,
      funktion,
      symbol,
      text,
      name,
      typ,
      organisationName,
      farbe,
      skipFontRegistration,
    } as TaktischesZeichenSpec;
  }

  static get observedAttributes() {
    return [
      "grundzeichen",
      "fachaufgabe",
      "organisation",
      "einheit",
      "verwaltungsstufe",
      "funktion",
      "symbol",
      "text",
      "name",
      "typ",
      "organisationName",
      "farbe",
      "skipFontRegistration",
    ];
  }
}

function render(element: Element) {
  const el = document.createElementNS(
    "http://www.w3.org/2000/svg",
    element.name
  );

  Object.entries(element.attributes).forEach(([name, value]) =>
    el.setAttribute(name, value)
  );

  const style = Object.entries(element.styles)
    .map(([name, value]) => `${name}: ${value}`)
    .join(";");
  if (style) el.setAttribute("style", style);

  if (element instanceof Container) {
    element.children.forEach((child) => el.appendChild(render(child)));
  }

  if (element instanceof TextNode) {
    el.appendChild(document.createTextNode(element.text));
  }

  return el;
}
