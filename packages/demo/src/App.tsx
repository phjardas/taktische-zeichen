import { useState } from "react";
import {
  FachaufgabeId,
  fachaufgaben,
  grundzeichen as grundzeichens,
  GrundzeichenId,
  organisationen,
  OrganisationId,
  TaktischesZeichen,
} from "taktische-zeichen-react";

export function App() {
  const [grundzeichen, setGrundzeichen] = useState<GrundzeichenId>("fahrzeug");
  const [fachaufgabe, setFachaufgabe] = useState<FachaufgabeId | "">("");
  const [organisation, setOrganisation] = useState<OrganisationId | "">("");

  return (
    <main className="container py-3">
      <h1>Taktische Zeichen Generator</h1>
      <div className="row row-cols-1 row-cols-sm-2">
      <div className="col">
      <form noValidate onSubmit={e=>e.preventDefault()} className="mb-3">
        <div className="mb-3">
          <label htmlFor="grundzeichen" className="form-label">Grundform</label>
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
        <div className="mb-3">
          <label htmlFor="fachaufgabe" className="form-label">Fachaufgabe</label>
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
        <div className="mb-3">
          <label htmlFor="organisation" className="form-label">Organisation</label>
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
        </form>
        </div>
                <div className="col">
        <div className="card">
          <div className="card-body">
          <TaktischesZeichen
            grundzeichen={grundzeichen}
            organisation={organisation || undefined}
            fachaufgabe={fachaufgabe || undefined}
            alt="Taktisches Zeichen"
          />
        </div>       
        </div>
      </div>
      </div>
          </main>
  );
}
