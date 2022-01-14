import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { TaktischesZeichen } from "taktische-zeichen-react";

export type TaktischesZeichenContext = {
  taktischesZeichen: TaktischesZeichen;
  setTaktischesZeichen: Dispatch<SetStateAction<TaktischesZeichen>>;
};

const Context = createContext<TaktischesZeichenContext | undefined>(undefined);

export const TaktischesZeichenProvider: FC = ({ children }) => {
  const [taktischesZeichen, setTaktischesZeichen] = useState<TaktischesZeichen>(
    {
      grundzeichen: "kraftfahrzeug-gelaendegaengig",
      organisation: "feuerwehr",
      fachaufgabe: "brandbekaempfung",
      einheit: "gruppe",
    }
  );
  const context = useMemo(
    () => ({ taktischesZeichen, setTaktischesZeichen }),
    [taktischesZeichen]
  );
  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export function useTaktischesZeichen() {
  const context = useContext(Context);
  return context!;
}
