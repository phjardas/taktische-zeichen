import React, { createContext, useContext, useMemo, useState } from "react";

const Context = createContext();

export function TaktischesZeichenProvider({ children }) {
  const [taktischesZeichen, setTaktischesZeichen] = useState({
    grundzeichen: "kraftfahrzeug-gelaendegaengig",
    organisation: "feuerwehr",
    fachaufgabe: "brandbekaempfung",
    einheit: "gruppe",
  });
  const context = useMemo(
    () => ({ taktischesZeichen, setTaktischesZeichen }),
    [taktischesZeichen]
  );
  return <Context.Provider value={context}>{children}</Context.Provider>;
}

export function useTaktischesZeichen() {
  return useContext(Context);
}
