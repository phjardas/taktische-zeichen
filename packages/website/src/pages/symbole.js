import React from "react";
import { symbole } from "taktische-zeichen";
import Layout from "../components/Layout";
import Symbole from "../components/Symbole";

export default function SymbolListe() {
  return (
    <Layout>
      <Symbole
        symbole={symbole}
        prop="symbol"
        base={{ grundzeichen: "ohne" }}
      />
    </Layout>
  );
}
