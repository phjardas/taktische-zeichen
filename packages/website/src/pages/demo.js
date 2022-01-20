import React from "react";
import { Demo } from "../components/Demo";
import Layout from "../components/Layout";
import { TaktischesZeichenProvider } from "../components/tz";

export default function DemoPage() {
  return (
    <Layout>
      <TaktischesZeichenProvider>
        <Demo />
      </TaktischesZeichenProvider>
    </Layout>
  );
}
