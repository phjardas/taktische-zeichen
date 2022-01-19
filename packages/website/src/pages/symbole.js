import React from "react";
import { symbole } from "taktische-zeichen-core";
import Layout from "../components/Layout";
import Symbole from "../components/Symbole";

export default function SymbolListe() {
  return (
    <Layout>
      <Symbole
        symbole={symbole}
        prop="symbol"
        base={{ grundzeichen: "ohne" }}
        preview={{ className: "m-sm-1 m-md-2 m-lg-3" }}
      />
    </Layout>
  );
}
