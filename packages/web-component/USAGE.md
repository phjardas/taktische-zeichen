Installiere die Bibliothek:

```bash
npm install taktische-zeichen-web-components
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
