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