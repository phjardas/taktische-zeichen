import React from "react";
import { funktionen } from "taktische-zeichen-core";
import Layout from "../components/Layout";
import Symbole from "../components/Symbole";

export default function Funktionen() {
  return (
    <Layout>
      <Symbole
        symbole={funktionen}
        prop="funktion"
        base={{ grundzeichen: "person" }}
      />
    </Layout>
  );
}
