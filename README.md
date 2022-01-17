# Taktische Zeichen

Bibliothek für die Erzeugung von taktischen Zeichen nach der DV 102 in JavaScript.

Dokumentation aller verfügbaren Optionen: https://taktische-zeichen.netlify.app/

## Inhalt

Die Bibliothek enthält:

- 23 Grundzeichen
- 7 Organisationen
- 30 Fachaufgaben
- 40 Symbole
- 8 Einheiten
- 6 Verwaltungsstufen

## Anwendung

Beide Bibliotheken beinhalten TypeScript-Definitionen.

In NodeJS oder im Browser:

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

In React:

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

// Rendert <img src="data:image/svg+xml;base64,..." />
```

## Lizenz

Dieses Projekt steht unter der [MIT-Lizenz](https://opensource.org/licenses/MIT) und kann kostenlos verwendet werden.

## Autor

Autor: [Philipp Jardas](https://jardas.de).

Die Quellen sind öffentlich auf [GitHub](https://github.com/phjardas/taktische-zeichen) verfügbar.