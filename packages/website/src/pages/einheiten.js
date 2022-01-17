import React from "react";
import { einheiten } from "taktische-zeichen-core";
import Layout from "../components/Layout";
import Symbole from "../components/Symbole";

export default function Einheiten() {
  return (
    <Layout>
      <Symbole
        symbole={einheiten}
        prop="einheit"
        base={{ grundzeichen: "taktische-formation" }}
        keepOrder
      />
    </Layout>
  );
}
