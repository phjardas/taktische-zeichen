import React, { useCallback, useMemo } from "react";
import TaktischesZeichenComp, {
  einheiten,
  fachaufgaben,
  funktionen,
  grundzeichen as grundzeichens,
  organisationen,
  symbole,
  verwaltungsstufen,
} from "taktische-zeichen-react";
import Beispiele from "./Beispiele";
import { useTaktischesZeichen } from "./tz";

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
      </form>
      <Beispiele />
      {taktischesZeichen.grundzeichen || taktischesZeichen.symbol ? (
        <TaktischesZeichenComp
          {...taktischesZeichen}
          alt="Taktisches Zeichen"
        />
      ) : null}
    </>
  );
}
