import {
  einheiten,
  fachaufgaben,
  grundzeichen as grundzeichens,
  organisationen,
  symbole,
} from "taktische-zeichen-react";
import { Demo } from "./Demo";
import Usage from "./Usage";

export function Main() {
  return (
    <main className="container py-3">
      <h1 className="display-1">Taktische Zeichen</h1>
      <p className="lead">
        Bibliothek für die Erzeugung von taktischen Zeichen nach der DV 102 in
        JavaScript.
      </p>
      <p>Die Bibliothek enthält:</p>
      <ul>
        <li>{grundzeichens.length} Grundzeichen</li>
        <li>{organisationen.length} Organisationen</li>
        <li>{fachaufgaben.length} Fachaufgaben</li>
        <li>{symbole.length} Symbole</li>
        <li>{einheiten.length} Einheiten</li>
      </ul>

      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col order-lg-last">
          <div className="card mb-5">
            <div className="card-body">
              <h2 className="card-title">Demonstration</h2>
              <Demo />
            </div>
          </div>
        </div>
        <div className="col">
          <Usage />
        </div>
      </div>

      <h2>Informationen</h2>
      <p>
        Autor: <a href="https://jardas.de">Philipp Jardas</a>.
      </p>
      <p>
        Dieses Projekt steht unter der{" "}
        <a href="https://opensource.org/licenses/MIT">MIT-Lizenz</a> und kann
        kostenlos verwendet werden.
      </p>
      <p>
        Die Quellen sind öffentlich auf{" "}
        <a href="https://github.com/phjardas/taktische-zeichen">GitHub</a>{" "}
        verfügbar.
      </p>
    </main>
  );
}
