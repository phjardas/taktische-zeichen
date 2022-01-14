import React from "react";
import { organisationen } from "taktische-zeichen";
import Layout from "../components/Layout";
import Symbole from "../components/Symbole";

export default function Organisationen() {
  return (
    <Layout>
      <Symbole
        symbole={organisationen}
        prop="organisation"
        base={{ grundzeichen: "stelle" }}
      />
    </Layout>
  );
}
