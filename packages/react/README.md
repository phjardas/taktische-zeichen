# Taktische Zeichen

Bibliothek für die Erzeugung von taktischen Zeichen nach der DV 102 in JavaScript.

Dokumentation aller verfügbaren Optionen: https://taktische-zeichen.netlify.app/

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

## Anwendung

```jsx
import { TaktischesZeichen } from "taktische-zeichen-react";

function App() {
  return (
    <TaktischesZeichen
      grundzeichen="kraftfahrzeug-gelaendegaengig"
      organisation="feuerwehr"
      fachaufgabe="brandbekaempfung"
      einheit="gruppe"
      {/* weitere Props werden an <svg> durchgereicht */}
      className="..."
    />
  );
}

// Rendert <svg>...</svg>
```

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
  <tr>
    <td align="center"><a href="https://jardas.de/"><img src="https://avatars.githubusercontent.com/u/1437300?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Philipp Jardas</b></sub></a><br /><a href="https://github.com/phjardas/taktische-zeichen/commits?author=phjardas" title="Code">💻</a> <a href="#content-phjardas" title="Content">🖋</a> <a href="https://github.com/phjardas/taktische-zeichen/commits?author=phjardas" title="Documentation">📖</a> <a href="#projectManagement-phjardas" title="Project Management">📆</a></td>
    <td align="center"><a href="https://github.com/PatrickReichel"><img src="https://avatars.githubusercontent.com/u/59778648?v=4?s=100" width="100px;" alt=""/><br /><sub><b>PatrickReichel</b></sub></a><br /><a href="#userTesting-einsatzverwaltung" title="User Testing">📓</a></td>
    <td align="center"><a href="https://github.com/einsatzverwaltung"><img src="https://avatars.githubusercontent.com/u/59615464?v=4?s=100" width="100px;" alt=""/><br /><sub><b>einsatzverwaltung</b></sub></a><br /><a href="https://github.com/phjardas/taktische-zeichen/commits?author=einsatzverwaltung" title="Code">💻</a> <a href="#userTesting-einsatzverwaltung" title="User Testing">📓</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- FOOTER:END -->
