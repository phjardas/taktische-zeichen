# Taktische Zeichen

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Bibliothek für die Erzeugung von taktischen Zeichen nach der DV 102 in JavaScript.

Dokumentation aller verfügbaren Optionen: https://taktische-zeichen.dev/

## Inhalt

Die Bibliothek enthält:

<!-- STATISTICS:START -->

- 25 Grundzeichen
- 42 Fachaufgaben
- 7 Organisationen
- 8 Einheiten
- 6 Verwaltungsstufen
- 83 Symbole

<!-- STATISTICS:END -->

Es gibt vier Bibliotheken für die Erzeugung von taktischen Zeichen, je nach Anwendungsfall.

## Node.JS oder im Browser

<!-- USAGE:core:START -->

Diese Bibliothek hat keinerlei externe Abhängigkeiten.

Installiere die Bibliothek:

```bash
npm install taktische-zeichen-core
```

Und so erzeugst du ein taktisches Zeichen, egal ob im Browser oder in Node.JS.

```javascript
import { erzeugeTaktischesZeichen } from "taktische-zeichen-core";

const tz = erzeugeTaktischesZeichen({
  grundzeichen: "kraftfahrzeug-gelaendegaengig",
  organisation: "feuerwehr",
  fachaufgabe: "brandbekaempfung",
  einheit: "gruppe",
});

// <?xml version="1.0" encoding="UTF-8"?><svg>...</svg>
console.log(tz.toString());

// data:image/svg+xml;base64,...
console.log(tz.dataUrl);

// [75, 45]
console.log(tz.size);
```

<!-- USAGE:core:END -->

## React

<!-- USAGE:react:START -->

Installiere die Bibliothek:

```bash
npm install taktische-zeichen-react
```

Verwende die Komponente in deiner Anwendung:

```jsx
import { TaktischesZeichen } from "taktische-zeichen-react";

function App() {
  return (
    <TaktischesZeichen
      grundzeichen="kraftfahrzeug-gelaendegaengig"
      organisation="feuerwehr"
      fachaufgabe="brandbekaempfung"
      einheit="gruppe"
      {/* weitere Props werden durchgereicht */}
      className="..."
    />
  );
}

// Rendert <svg>...</svg>
```

<!-- USAGE:react:END -->

## Web Components

<!-- USAGE:web-component:START -->

Installiere die Bibliothek:

```bash
npm install taktische-zeichen-web-component
```

Registriere die Komponente:

```javascript
import { TaktischesZeichen } from "taktische-zeichen-web-component";

window.customElements.define("taktisches-zeichen", TaktischesZeichen);
```

HTML:

```html
<taktisches-zeichen
  grundzeichen="kraftfahrzeug-gelaendegaengig"
  organisation="feuerwehr"
  fachaufgabe="brandbekaempfung"
  einheit="gruppe"
/>
```

<!-- USAGE:web-component:END -->

## Kommandozeile

<!-- USAGE:cli:START -->

Installiere die Bibliothek:

```bash
npm install taktische-zeichen-cli
```

Erzeuge ein taktisches Zeichen:

```bash
npm i -g taktische-zeichen-cli

taktisches-zeichen \
  --grundzeichen kraftfahrzeug-gelaendegaengig \
  --organisation feuerwehr \
  --fachaufgabe brandbekaempfung \
  --einheit gruppe

# Ausgabe auf STDOUT:
# <?xml version="1.0" encoding="UTF-8"?>
# <svg>...</svg>
```

<!-- USAGE:cli:END -->

<!-- FOOTER:START -->

## Lizenz

Dieses Projekt steht unter der [MIT-Lizenz](https://opensource.org/licenses/MIT) und kann kostenlos verwendet werden.

Die Quellen sind öffentlich auf [GitHub](https://github.com/phjardas/taktische-zeichen) verfügbar.

## Mitmachen

Du möchtest bei der Weiterentwicklung helfen? Prima! Du hast folgende Möglichkeiten:

- Du hast einen Fehler gefunden oder vermisst ein Symbol? [Erstelle ein Issue](https://github.com/phjardas/taktische-zeichen/issues/new), und wir werden uns darum kümmern!
- Du möchtest aktiv bei der Entwicklung helfen? Dann schau dir bitte den [Contributors' Guide](https://github.com/phjardas/taktische-zeichen/blob/main/CONTRIBUTING.md) an.

## Contributors

Die folgenden Personen haben an diesem Projekt mitgewirkt ([Schlüssel für die Emoji](https://allcontributors.org/docs/de/emoji-key)). Vielen Dank!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://jardas.de/"><img src="https://avatars.githubusercontent.com/u/1437300?v=4?s=100" width="100px;" alt="Philipp Jardas"/><br /><sub><b>Philipp Jardas</b></sub></a><br /><a href="https://github.com/phjardas/taktische-zeichen/commits?author=phjardas" title="Code">💻</a> <a href="#content-phjardas" title="Content">🖋</a> <a href="https://github.com/phjardas/taktische-zeichen/commits?author=phjardas" title="Documentation">📖</a> <a href="#projectManagement-phjardas" title="Project Management">📆</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/PatrickReichel"><img src="https://avatars.githubusercontent.com/u/59778648?v=4?s=100" width="100px;" alt="PatrickReichel"/><br /><sub><b>PatrickReichel</b></sub></a><br /><a href="#userTesting-PatrickReichel" title="User Testing">📓</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/einsatzverwaltung"><img src="https://avatars.githubusercontent.com/u/59615464?v=4?s=100" width="100px;" alt="einsatzverwaltung"/><br /><sub><b>einsatzverwaltung</b></sub></a><br /><a href="https://github.com/phjardas/taktische-zeichen/commits?author=einsatzverwaltung" title="Code">💻</a> <a href="#userTesting-einsatzverwaltung" title="User Testing">📓</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Sascha007"><img src="https://avatars.githubusercontent.com/u/4368123?v=4?s=100" width="100px;" alt="Sascha"/><br /><sub><b>Sascha</b></sub></a><br /><a href="#example-Sascha007" title="Examples">💡</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- FOOTER:END -->
