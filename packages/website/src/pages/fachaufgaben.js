import React from "react";
import { fachaufgaben } from "taktische-zeichen";
import Layout from "../components/Layout";
import Symbole from "../components/Symbole";

export default function Fachaufgaben() {
  return (
    <Layout>
      <Symbole
        symbole={fachaufgaben}
        prop="fachaufgabe"
        base={{ grundzeichen: "taktische-formation" }}
      />
    </Layout>
  );
}
