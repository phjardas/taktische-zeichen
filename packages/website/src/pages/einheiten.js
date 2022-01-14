import React from "react";
import { einheiten } from "taktische-zeichen";
import Layout from "../components/Layout";
import Symbole from "../components/Symbole";

export default function Einheiten() {
  return (
    <Layout>
      <Symbole
        symbole={einheiten}
        prop="einheit"
        base={{ grundzeichen: "taktische-formation" }}
      />
    </Layout>
  );
}
