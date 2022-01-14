import SyntaxHighlighter from "react-syntax-highlighter";
import {
  einheiten,
  fachaufgaben,
  grundzeichen as grundzeichens,
  organisationen,
  symbole,
} from "taktische-zeichen-react";
import { Demo } from "./Demo";

const nodeDemo = `
import {
  erzeugeTaktischesZeichen
} from "taktische-zeichen";

const tz = erzeugeTaktischesZeichen({
  grundzeichen: "kraftfahrzeug-gelaendegaengig",
  organisation: "feuerwehr",
  fachaufgabe: "brandbekaempfung",
  einheit: "gruppe",
});

console.log(tz.svg);
// <?xml version="1.0" encoding="UTF-8"?><svg>...</svg>
`.trim();

const reactDemo = `
import {
  TaktischesZeichen
} from "taktische-zeichen-react";

function App() {
  return (
    <TaktischesZeichen
      grundzeichen="kraftfahrzeug-gelaendegaengig"
      organisation="feuerwehr"
      fachaufgabe="brandbekaempfung"
      einheit="gruppe"
    />
  );
}

// Rendert <img src="data:image/svg+xml;base64,..." />
`.trim();

export function App() {
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
          <h2>Anwendung</h2>
          <p>Beide Bibliotheken beinhalten TypeScript-Definitionen.</p>
          <h3>Node.js</h3>
          <SyntaxHighlighter language="typescript">
            {nodeDemo}
          </SyntaxHighlighter>
          <h3>React</h3>
          <SyntaxHighlighter language="typescript">
            {reactDemo}
          </SyntaxHighlighter>
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
