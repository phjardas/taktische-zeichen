import { useMemo, useState } from "react";
import { createIcon, organisationen, fragments } from "../..";

export function App() {
  const [grundzeichen, setGrundzeichen]=useState('1.1')
  const [fachaufgabe, setFachaufgabe]=useState('')
  const [organisation, setOrganisation]=useState('')

  const icon = useMemo(() => 
     createIcon({grundzeichen, fachaufgabe:fachaufgabe||undefined, organisation:organisation||undefined})
  ,[grundzeichen,fachaufgabe,organisation])


  return (
    <>
      <h1>Taktische Zeichen Generator</h1>
      <form noValidate>
      <div>
        <label htmlFor="grundzeichen">Grundform</label>
        <select id="grundzeichen" value={grundzeichen} onChange={e => setGrundzeichen(e.currentTarget.value)}>
          {fragments.filter(f => f.id.startsWith('1')||f.id.startsWith('6')).map((fragment) => <option key={fragment.id}value={fragment.id}>{fragment.label}</option>)}
        </select>
        </div>
        <div>
        <label htmlFor="fachaufgabe">Fachaufgabe</label>
        <select id="fachaufgabe" value={fachaufgabe} onChange={e => setFachaufgabe(e.currentTarget.value)}>
        <option value="">keine</option>
          {fragments.filter(f => f.id.startsWith('3')).map((fragment) => <option key={fragment.id}value={fragment.id}>{fragment.label}</option>)}
        </select>
        </div>
        <div>
        <label htmlFor="organisation">Organisation</label>
        <select id="organisation" value={organisation} onChange={e => setOrganisation(e.currentTarget.value)}>
        <option value="">keine</option>
          {organisationen.map((organisation) => <option key={organisation.id}value={organisation.id}>{organisation.label}</option>)}
        </select>
        </div>
        <div style={{width:400, marginTop: '2rem'}}><img src={`data:image/svg+xml,${encodeURIComponent(icon.toString())}`} alt="Taktisches Zeichen"/></div>
        <pre>{icon.toString(true)}</pre>
      </form>
    </>
  );
}
