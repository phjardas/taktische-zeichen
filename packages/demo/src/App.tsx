import { useCallback, useMemo, useState } from "react";
import TaktischesZeichen, {
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
  ComponentType,
} from "taktische-zeichen-react";

export function App() {
  const [grundzeichen, setGrundzeichen] = useState<GrundzeichenId>(
    "kraftfahrzeug-gelaendegaengig"
  );
  const [fachaufgabe, setFachaufgabe] = useState<FachaufgabeId | "">("brandbekaempfung");
  const [organisation, setOrganisation] = useState<OrganisationId | "">("feuerwehr");
  const [einheit, setEinheit] = useState<EinheitId | "">("gruppe");
  const [funktion, setFunktion] = useState<FunktionId | "">("");
  const [symbol, setSymbol] = useState<SymbolId | "">("");
  const accepts = useMemo(
    () => grundzeichens.find((g) => g.id === grundzeichen)?.accepts,
    [grundzeichen]
  );

  const enabled = useCallback(
    (type: ComponentType) => {
      if (!accepts) return true;
      return accepts.includes(type);
    },
    [accepts]
  );

  return (
    <main className="container py-3">
      <h1>Taktische Zeichen</h1>
      <div className="row row-cols-1 row-cols-sm-2">
        <div className="col">
          <form
            noValidate
            onSubmit={(e) => e.preventDefault()}
            className="mb-3"
          >
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
                {grundzeichens.map((gz) => (
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
                  {fachaufgaben.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
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
                {organisationen.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
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
                  {einheiten.map((o) => (
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
                  {funktionen.map((o) => (
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
                  {symbole.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </form>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <TaktischesZeichen
                grundzeichen={grundzeichen}
                organisation={organisation || undefined}
                fachaufgabe={fachaufgabe || undefined}
                einheit={einheit || undefined}
                funktion={funktion || undefined}
                symbol={symbol || undefined}
                alt="Taktisches Zeichen"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
