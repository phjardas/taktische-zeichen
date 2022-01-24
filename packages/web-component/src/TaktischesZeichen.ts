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

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    console.log("attribute %s changed:", name, { oldValue, newValue });
    this.render();
  }

  private render() {
    const root = this.shadowRoot;
    if (!root) return;
    if (root.firstChild) root.removeChild(root.firstChild);

    const spec = this.spec;
    if (!spec) return;

    const { svg } = erzeugeTaktischesZeichen(spec);
    root.append(render(svg));
  }

  private get spec(): TaktischesZeichenSpec | undefined {
    const grundzeichen = this.getAttribute("grundzeichen");
    const symbol = this.getAttribute("symbol");
    if (!grundzeichen && !symbol) return undefined;

    const fachaufgabe = this.getAttribute("fachaufgabe");
    const organisation = this.getAttribute("organisation");
    const einheit = this.getAttribute("einheit");
    const verwaltungsstufe = this.getAttribute("verwaltungsstufe");
    const funktion = this.getAttribute("funktion");

    return {
      grundzeichen,
      fachaufgabe,
      organisation,
      einheit,
      verwaltungsstufe,
      funktion,
      symbol,
    } as TaktischesZeichenSpec;
  }

  static get observedAttributes() {
    return ["grundzeichen", "fachaufgabe", "symbol"];
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

  if (element instanceof Container) {
    element.children.forEach((child) => el.appendChild(render(child)));
  }

  if (element instanceof TextNode) {
    el.appendChild(document.createTextNode(element.text));
  }

  return el;
}
