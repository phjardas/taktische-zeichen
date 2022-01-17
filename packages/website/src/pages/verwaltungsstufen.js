import React from "react";
import { verwaltungsstufen } from "taktische-zeichen-core";
import Layout from "../components/Layout";
import Symbole from "../components/Symbole";

export default function Verwaltungsstufen() {
  return (
    <Layout>
      <Symbole
        symbole={verwaltungsstufen}
        prop="verwaltungsstufe"
        base={{ grundzeichen: "person" }}
        keepOrder
      />
    </Layout>
  );
}
