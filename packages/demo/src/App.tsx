import { useMemo, useState } from "react";
import {
  createIcon,
  FachaufgabeId,
  fachaufgaben,
  grundzeichen as grundzeichens,
  GrundzeichenId,
  organisationen,
  OrganisationId,
} from "taktische-zeichen";

export function App() {
  const [grundzeichen, setGrundzeichen] = useState<GrundzeichenId>("fahrzeug");
  const [fachaufgabe, setFachaufgabe] = useState<FachaufgabeId | "">("");
  const [organisation, setOrganisation] = useState<OrganisationId | "">("");

  const icon = useMemo(
    () =>
      createIcon({
        grundzeichen,
        fachaufgabe: fachaufgabe || undefined,
        organisation: organisation || undefined,
      }),
    [grundzeichen, fachaufgabe, organisation]
  );

  return (
    <>
      <h1>Taktische Zeichen Generator</h1>
      <form noValidate>
        <div>
          <label htmlFor="grundzeichen">Grundform</label>
          <select
            id="grundzeichen"
            value={grundzeichen}
            onChange={(e) => setGrundzeichen(e.currentTarget.value as any)}
          >
            {grundzeichens.map((gz) => (
              <option key={gz.id} value={gz.id}>
                {gz.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="fachaufgabe">Fachaufgabe</label>
          <select
            id="fachaufgabe"
            value={fachaufgabe}
            onChange={(e) => setFachaufgabe(e.currentTarget.value as any)}
          >
            <option value="">keine</option>
            {fachaufgaben.map((f) => (
              <option key={f.id} value={f.id}>
                {f.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="organisation">Organisation</label>
          <select
            id="organisation"
            value={organisation}
            onChange={(e) => setOrganisation(e.currentTarget.value as any)}
          >
            <option value="">keine</option>
            {organisationen.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div style={{ width: 400, marginTop: "2rem" }}>
          <img
            src={`data:image/svg+xml,${encodeURIComponent(icon.svg)}`}
            alt="Taktisches Zeichen"
          />
        </div>
        <pre>{icon.svg}</pre>
      </form>
    </>
  );
}
