import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Statistics from "../components/Statistics";
import { TaktischesZeichenProvider } from "../components/tz";
import Usage from "../components/Usage";

export default function App() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
          }
        }
      }
    `
  );

  return (
    <Layout>
      <p className="lead">{site.siteMetadata.description}</p>
      <Statistics />

      <TaktischesZeichenProvider>
        <Usage />
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
