import SyntaxHighlighter from "react-syntax-highlighter";
import { useMemo, useState } from "react";
import TaktischesZeichen, {
  ComponentType,
  einheiten,
  EinheitId,
  FachaufgabeId,
  fachaufgaben,
  funktionen,
  FunktionId,
  grundzeichen as grundzeichens,
  GrundzeichenId,
  organisationen,
  OrganisationId,
  symbole,
  SymbolId,
} from "taktische-zeichen-react";

const optionen = {
  grundzeichen: grundzeichens.sort((a, b) => a.label.localeCompare(b.label)),
  organisationen: organisationen.sort((a, b) => a.label.localeCompare(b.label)),
  fachaufgaben: fachaufgaben.sort((a, b) => a.label.localeCompare(b.label)),
  einheiten: einheiten.sort((a, b) => a.label.localeCompare(b.label)),
  funktionen: funktionen.sort((a, b) => a.label.localeCompare(b.label)),
  symbole: symbole.sort((a, b) => a.label.localeCompare(b.label)),
};

export function Demo() {
  const [grundzeichen, setGrundzeichen] = useState<GrundzeichenId | "">(
    "kraftfahrzeug-gelaendegaengig"
  );
  const [fachaufgabe, setFachaufgabe] = useState<FachaufgabeId | "">(
    "brandbekaempfung"
  );
  const [organisation, setOrganisation] = useState<OrganisationId | "">(
    "feuerwehr"
  );
  const [einheit, setEinheit] = useState<EinheitId | "">("gruppe");
  const [funktion, setFunktion] = useState<FunktionId | "">("");
  const [symbol, setSymbol] = useState<SymbolId | "">("");

  const enabled = useMemo(() => {
    const accepts =
      grundzeichen === ""
        ? ["symbol"]
        : grundzeichens.find((g) => g.id === grundzeichen)?.accepts;
    return (type: ComponentType) => {
      if (!accepts) return true;
      return accepts.includes(type);
    };
  }, [grundzeichen]);

  return (
    <>
      <form noValidate onSubmit={(e) => e.preventDefault()} className="mb-3">
        <div className="mb-3">
          <label htmlFor="grundzeichen" className="form-label">
            Grundform
          </label>
          <select
            id="grundzeichen"
            value={grundzeichen}
            onChange={(e) => setGrundzeichen(e.currentTarget.value as any)}
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
              value={fachaufgabe}
              onChange={(e) => setFachaufgabe(e.currentTarget.value as any)}
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
              value={organisation}
              onChange={(e) => setOrganisation(e.currentTarget.value as any)}
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
              value={einheit}
              onChange={(e) => setEinheit(e.currentTarget.value as any)}
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
              value={funktion}
              onChange={(e) => setFunktion(e.currentTarget.value as any)}
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
              value={symbol}
              onChange={(e) => setSymbol(e.currentTarget.value as any)}
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
      </form>
      {grundzeichen || symbol ? (
        <>
          <TaktischesZeichen
            grundzeichen={grundzeichen || undefined}
            organisation={organisation || undefined}
            fachaufgabe={fachaufgabe || undefined}
            einheit={einheit || undefined}
            funktion={funktion || undefined}
            symbol={symbol || undefined}
            alt="Taktisches Zeichen"
          />
          <SyntaxHighlighter language="json" className="mt-3">
            {JSON.stringify(
              {
                grundzeichen: grundzeichen || undefined,
                organisation:
                  (enabled("organisation") && organisation) || undefined,
                fachaufgabe:
                  (enabled("fachaufgabe") && fachaufgabe) || undefined,
                einheit: (enabled("einheit") && einheit) || undefined,
                funktion: (enabled("funktion") && funktion) || undefined,
                symbol: (enabled("symbol") && symbol) || undefined,
              },
              null,
              2
            )}
          </SyntaxHighlighter>
        </>
      ) : null}
    </>
  );
}
