import React from "react";
import Nav from "./Nav";
import "./styles.css";
import logo from "../assets/logo.svg";

export default function Layout({ children }) {
  return (
    <div className="container py-3">
      <h1 className="display-1 d-flex align-items-center">
        <img src={logo} alt="Logo" className="me-3" style={{ height: "1em" }} />
        Taktische Zeichen
      </h1>
      <Nav />
      <main className="mt-3">{children}</main>
    </div>
  );
}
