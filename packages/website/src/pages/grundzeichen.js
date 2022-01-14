import React from "react";
import { grundzeichen } from "taktische-zeichen-core";
import Layout from "../components/Layout";
import Symbole from "../components/Symbole";

export default function Grundzeichen() {
  return (
    <Layout>
      <Symbole symbole={grundzeichen} prop="grundzeichen" />
    </Layout>
  );
}
