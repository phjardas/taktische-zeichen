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