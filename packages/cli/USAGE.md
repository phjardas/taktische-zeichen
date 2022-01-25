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
  --einheit grupp

# Ausgabe auf STDOUT:
# <?xml version="1.0" encoding="UTF-8"?>
# <svg>...</svg>
```
