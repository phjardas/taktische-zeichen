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
- 77 Symbole

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

## Lizenz

Dieses Projekt steht unter der [MIT-Lizenz](https://opensource.org/licenses/MIT) und kann kostenlos verwendet werden.

## Autor

Autor: [Philipp Jardas](https://jardas.de).

Die Quellen sind öffentlich auf [GitHub](https://github.com/phjardas/taktische-zeichen) verfügbar.
