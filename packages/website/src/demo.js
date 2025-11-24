import React, { useCallback, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import { erzeugeTaktischesZeichen } from "taktische-zeichen-core";
import TaktischesZeichen, {
  einheiten,
  fachaufgaben,
  funktionen,
  grundzeichen as grundzeichens,
  organisationen,
  symbole,
  verwaltungsstufen,
} from "taktische-zeichen-react";

const x = React;

const beispiele = [
  {
    label: "Löschfahrzeug",
    tz: {
      grundzeichen: "kraftfahrzeug-landgebunden",
      organisation: "feuerwehr",
      fachaufgabe: "brandbekaempfung",
      einheit: "gruppe",
      name: "LF20",
    },
  },
  {
    label: "Verletztenablageplatz",
    tz: {
      grundzeichen: "stelle",
      organisation: "hilfsorganisation",
      fachaufgabe: "rettungswesen",
      symbol: "sichten",
    },
  },
  {
    label: "Katastrophenschutzleitung",
    tz: {
      grundzeichen: "befehlsstelle",
      organisation: "fuehrung",
      text: "KatSL",
    },
  },
  {
    label: "Organisatorischer Leiter Rettungsdienst",
    tz: {
      grundzeichen: "person",
      organisation: "hilfsorganisation",
      funktion: "fuehrungskraft",
      text: "OrgL",
    },
  },
  {
    label: "THW: Technischer Zug mit FGr Räumen",
    tz: {
      grundzeichen: "taktische-formation",
      organisation: "thw",
      einheit: "zug",
      text: "TZ-R",
      typ: "A",
    },
  },
  {
    label: "Hubschrauberlandeplatz",
    tz: {
      grundzeichen: "stelle",
      organisation: "gefahrenabwehr",
      symbol: "hubschrauber",
    },
  },
  {
    label: "Kreisbrandinspektor",
    tz: {
      grundzeichen: "person",
      organisation: "feuerwehr",
      funktion: "fuehrungskraft",
      verwaltungsstufe: "kreis",
      text: "KBI",
    },
  },
  {
    label: "Akute Explosionsgefahr",
    tz: {
      grundzeichen: "gefahr-akut",
      text: "Ex",
      farbe: "#ff0000",
    },
  },
];

const optionen = {
  grundzeichen: grundzeichens.sort((a, b) => a.label.localeCompare(b.label)),
  organisationen: organisationen.sort((a, b) => a.label.localeCompare(b.label)),
  fachaufgaben: fachaufgaben.sort((a, b) => a.label.localeCompare(b.label)),
  einheiten,
  verwaltungsstufen,
  funktionen: funktionen.sort((a, b) => a.label.localeCompare(b.label)),
  symbole: symbole.sort((a, b) => a.label.localeCompare(b.label)),
};

export function Demo() {
  const [taktischesZeichen, setTaktischesZeichen] = useState(beispiele[0].tz);
  const onChange = useCallback(
    (key) => (e) =>
      setTaktischesZeichen((z) => ({
        ...z,
        [key]: e.target.value || undefined,
      })),
    [setTaktischesZeichen]
  );

  const enabled = useMemo(() => {
    const accepts = taktischesZeichen.grundzeichen
      ? grundzeichens.find((g) => g.id === taktischesZeichen.grundzeichen)
          ?.accepts
      : ["symbol"];
    return (type) => {
      if (!accepts) return true;
      return accepts.includes(type);
    };
  }, [taktischesZeichen]);

  const download = useCallback((tz) => {
    const a = document.body.appendChild(document.createElement("a"));
    a.download = "taktisches-zeichen.svg";
    a.href = erzeugeTaktischesZeichen(tz).dataUrl;
    a.type = "image/svg+xml";
    a.click();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-2">
      <div className="col">
        <form noValidate onSubmit={(e) => e.preventDefault()} className="mb-3">
          <div className="mb-3">
            <label htmlFor="grundzeichen" className="form-label">
              Grundform
            </label>
            <select
              id="grundzeichen"
              value={taktischesZeichen.grundzeichen ?? ""}
              onChange={onChange("grundzeichen")}
              className="form-control"
            >
              <option value="">keines</option>
              {optionen.grundzeichen.map((gz) => (
                <option key={gz.id} value={gz.id}>
                  {gz.label}
                </option>
              ))}
            </select>
          </div>
          {enabled("fachaufgabe") && (
            <div className="mb-3">
              <label htmlFor="fachaufgabe" className="form-label">
                Fachaufgabe
              </label>
              <select
                id="fachaufgabe"
                value={taktischesZeichen.fachaufgabe ?? ""}
                onChange={onChange("fachaufgabe")}
                className="form-control"
              >
                <option value="">keine</option>
                {optionen.fachaufgaben.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.label}
                  </option>
                ))}
              </select>
            </div>
          )}
          {enabled("organisation") && (
            <div className="mb-3">
              <label htmlFor="organisation" className="form-label">
                Organisation
              </label>
              <select
                id="organisation"
                value={taktischesZeichen.organisation ?? ""}
                onChange={onChange("organisation")}
                className="form-control"
              >
                <option value="">keine</option>
                {optionen.organisationen.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          )}
          {enabled("einheit") && (
            <div className="mb-3">
              <label htmlFor="einheit" className="form-label">
                Einheit
              </label>
              <select
                id="einheit"
                value={taktischesZeichen.einheit ?? ""}
                onChange={onChange("einheit")}
                className="form-control"
              >
                <option value="">keine</option>
                {optionen.einheiten.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          )}
          {enabled("verwaltungsstufe") && (
            <div className="mb-3">
              <label htmlFor="verwaltungsstufe" className="form-label">
                Verwaltungsstufe
              </label>
              <select
                id="verwaltungsstufe"
                value={taktischesZeichen.verwaltungsstufe ?? ""}
                onChange={onChange("verwaltungsstufe")}
                className="form-control"
              >
                <option value="">keine</option>
                {optionen.verwaltungsstufen.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          )}
          {enabled("funktion") && (
            <div className="mb-3">
              <label htmlFor="funktion" className="form-label">
                Funktion
              </label>
              <select
                id="funktion"
                value={taktischesZeichen.funktion ?? ""}
                onChange={onChange("funktion")}
                className="form-control"
              >
                <option value="">keine</option>
                {optionen.funktionen.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          )}
          {enabled("symbol") && (
            <div className="mb-3">
              <label htmlFor="symbol" className="form-label">
                Symbol
              </label>
              <select
                id="symbol"
                value={taktischesZeichen.symbol ?? ""}
                onChange={onChange("symbol")}
                className="form-control"
              >
                <option value="">keines</option>
                {optionen.symbole.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          )}
          {enabled("symbol") && (
            <div className="mb-3">
              <label htmlFor="text" className="form-label">
                Text
              </label>
              <input
                id="text"
                type="text"
                value={taktischesZeichen.text ?? ""}
                onChange={onChange("text")}
                className="form-control"
              />
            </div>
          )}
          {enabled("name") && (
            <div className="mb-3">
              <label htmlFor="text" className="form-label">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={taktischesZeichen.name ?? ""}
                onChange={onChange("name")}
                className="form-control"
              />
            </div>
          )}
          {enabled("name") && (
            <div className="mb-3">
              <label htmlFor="text" className="form-label">
                Name der Organisation
              </label>
              <input
                id="organisationName"
                type="text"
                value={taktischesZeichen.organisationName ?? ""}
                onChange={onChange("organisationName")}
                className="form-control"
              />
            </div>
          )}
          {enabled("typ") && (
            <div className="mb-3">
              <label htmlFor="text" className="form-label">
                Typ
              </label>
              <input
                id="typ"
                type="text"
                value={taktischesZeichen.typ ?? ""}
                onChange={onChange("typ")}
                className="form-control"
              />
            </div>
          )}
          {enabled("farbe") && (
            <div className="mb-3">
              <label htmlFor="text" className="form-label">
                Symbol-Farbe
              </label>
              <input
                id="farbe"
                type="color"
                value={taktischesZeichen.farbe ?? ""}
                onChange={onChange("farbe")}
                className="form-control"
              />
            </div>
          )}
          <button
            className="btn btn-outline-secondary"
            onClick={() => setTaktischesZeichen({})}
          >
            zurücksetzen
          </button>
        </form>
      </div>
      <div className="col">
        {taktischesZeichen.grundzeichen || taktischesZeichen.symbol ? (
          <div className="card mb-3">
            <div className="card-body">
              <TaktischesZeichen
                {...withoutEmptyValues(taktischesZeichen)}
                alt="Taktisches Zeichen"
              />
              <button
                className="btn btn-outline-secondary mt-3"
                onClick={() => download(taktischesZeichen)}
              >
                SVG herunterladen
              </button>
            </div>
          </div>
        ) : null}
        <h2>Beispiele</h2>
        {beispiele.map((beispiel) => (
          <button
            key={beispiel.label}
            className="btn btn-link"
            onClick={() => setTaktischesZeichen(beispiel.tz)}
          >
            {beispiel.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function withoutEmptyValues(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([_, value]) => value !== undefined && value !== null
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("demo"));
root.render(<Demo />);
