import { Main } from "./Main";
import { TaktischesZeichenProvider } from "./tz";

export function App() {
  return (
    <TaktischesZeichenProvider>
      <Main />
    </TaktischesZeichenProvider>
  );
}
