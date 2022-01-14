import React from "react";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="container py-3">
      <h1 className="display-1">Taktische Zeichen</h1>
      <Nav />
      <main className="mt-3">{children}</main>
    </div>
  );
}
