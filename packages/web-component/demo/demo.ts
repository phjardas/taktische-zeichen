import {
  einheiten,
  fachaufgaben,
  funktionen,
  grundzeichen as grundzeichens,
  organisationen,
  symbole,
  verwaltungsstufen,
} from "taktische-zeichen-core";
import { TaktischesZeichen } from "../src";

window.customElements.define("taktisches-zeichen", TaktischesZeichen);

const form = document.getElementsByTagName("form")[0];
const zeichenEl = document.getElementById("zeichen");

function attachSelect(
  id: string,
  label: string,
  options: Array<{ id: string; label: string }>
) {
  const div = form.appendChild(document.createElement("div"));
  const lbl = div.appendChild(document.createElement("label"));
  lbl.setAttribute("for", id);
  lbl.appendChild(document.createTextNode(label));

  const el = div.appendChild(document.createElement("select"));
  el.setAttribute("id", id);

  const option = document.createElement("option");
  option.value = "";
  option.appendChild(document.createTextNode("[kein]"));
  el.appendChild(option);

  options.forEach((g) => {
    const option = document.createElement("option");
    option.value = g.id;
    option.appendChild(document.createTextNode(g.label));
    el.appendChild(option);
  });

  el.addEventListener(
    "change",
    (e) => {
      const value = (e.target as HTMLSelectElement).value;
      if (value) {
        zeichenEl.setAttribute(id, value);
      } else {
        zeichenEl.removeAttribute(id);
      }
    },
    false
  );
}

attachSelect("grundzeichen", "Grundzeichen", grundzeichens);
attachSelect("fachaufgabe", "Fachaufgabe", fachaufgaben);
attachSelect("organisation", "Organisation", organisationen);
attachSelect("einheit", "Einheit", einheiten);
attachSelect("verwaltungsstufe", "Verwaltungsstufe", verwaltungsstufen);
attachSelect("funktion", "Funktion", funktionen);
attachSelect("symbol", "Symbol", symbole);
