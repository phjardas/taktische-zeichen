import React from "react";
import { Demo } from "../components/Demo";
import Layout from "../components/Layout";
import Statistics from "../components/Statistics";
import { TaktischesZeichenProvider } from "../components/tz";
import Usage from "../components/Usage";

export default function App() {
  return (
    <Layout>
      <p className="lead">
        Bibliothek für die Erzeugung von taktischen Zeichen nach der DV 102 in
        JavaScript.
      </p>
      <Statistics />

      <TaktischesZeichenProvider>
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-5 order-lg-last">
            <div className="card mb-5">
              <div className="card-body">
                <h2 className="card-title">Demonstration</h2>
                <Demo />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <Usage />
          </div>
        </div>
      </TaktischesZeichenProvider>

      <h2>Informationen</h2>
      <p>
        Autor: <a href="https://jardas.de">Philipp Jardas</a>.
      </p>
      <p>
        Dieses Projekt steht unter der{" "}
        <a href="https://opensource.org/licenses/MIT">MIT-Lizenz</a> und kann
        kostenlos verwendet werden.
      </p>
      <p>
        Die Quellen sind öffentlich auf{" "}
        <a href="https://github.com/phjardas/taktische-zeichen">GitHub</a>{" "}
        verfügbar.
      </p>
    </Layout>
  );
}
