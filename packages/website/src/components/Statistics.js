import React from "react";
import {
  einheiten,
  fachaufgaben,
  grundzeichen as grundzeichens,
  organisationen,
  symbole,
} from "taktische-zeichen-react";

export default function Statistics() {
  return (
    <>
      <p>Die Bibliothek enthält:</p>
      <ul>
        <li>{grundzeichens.length} Grundzeichen</li>
        <li>{organisationen.length} Organisationen</li>
        <li>{fachaufgaben.length} Fachaufgaben</li>
        <li>{symbole.length} Symbole</li>
        <li>{einheiten.length} Einheiten</li>
      </ul>
    </>
  );
}
