import React, { useCallback, useMemo } from "react";
import TaktischesZeichenComp, {
  einheiten,
  fachaufgaben,
  funktionen,
  grundzeichen as grundzeichens,
  organisationen,
  symbole,
} from "taktische-zeichen-react";
import { useTaktischesZeichen } from "./tz";

const optionen = {
  grundzeichen: grundzeichens.sort((a, b) => a.label.localeCompare(b.label)),
  organisationen: organisationen.sort((a, b) => a.label.localeCompare(b.label)),
  fachaufgaben: fachaufgaben.sort((a, b) => a.label.localeCompare(b.label)),
  einheiten: einheiten.sort((a, b) => a.label.localeCompare(b.label)),
  funktionen: funktionen.sort((a, b) => a.label.localeCompare(b.label)),
  symbole: symbole.sort((a, b) => a.label.localeCompare(b.label)),
};

const beispiele = [
  {
    label: "Löschfahrzeug",
    tz: {
      grundzeichen: "kraftfahrzeug-gelaendegaengig",
      organisation: "feuerwehr",
      fachaufgabe: "brandbekaempfung",
      einheit: "gruppe",
    },
  },
  {
    label: "Verletztenablageplatz",
    tz: {
      grundzeichen: "stelle",
      organisation: "hilfsorganisation",
      fachaufgabe: "rettungswesen",
      symbol: "ablage",
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
    label: "Zugführer THW",
    tz: {
      grundzeichen: "person",
      organisation: "thw",
      funktion: "fuehrungskraft",
      einheit: "zug",
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
      fachaufgabe: "logistik",
      einheit: "zug",
      text: "TZ-R",
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
];

export function Demo() {
  const { taktischesZeichen, setTaktischesZeichen } = useTaktischesZeichen();
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

  return (
    <>
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
      </form>
      <p>
        Beispiele:
        {beispiele.map((beispiel, i) => (
          <button
            key={i}
            className="btn btn-link"
            onClick={() => setTaktischesZeichen(beispiel.tz)}
          >
            {beispiel.label}
          </button>
        ))}
      </p>
      {taktischesZeichen.grundzeichen || taktischesZeichen.symbol ? (
        <TaktischesZeichenComp
          {...taktischesZeichen}
          alt="Taktisches Zeichen"
        />
      ) : null}
    </>
  );
}
