import { Link } from "gatsby";
import React from "react";

const routes = [
  { path: "/", label: "Startseite" },
  { path: "/demo", label: "Demo" },
  { path: "/grundzeichen", label: "Grundzeichen" },
  { path: "/fachaufgaben", label: "Fachaufgaben" },
  { path: "/organisationen", label: "Organisationen" },
  { path: "/einheiten", label: "Einheiten" },
  { path: "/verwaltungsstufen", label: "Verwaltungsstufen" },
  { path: "/funktionen", label: "Funktionen" },
  { path: "/symbole", label: "Symbole" },
];

export default function Nav() {
  return (
    <nav className="nav nav-pills mb-5">
      {routes.map((route) => (
        <li key={route.path} className="nav-item">
          <Link className="nav-link" activeClassName="active" to={route.path}>
            {route.label}
          </Link>
        </li>
      ))}
    </nav>
  );
}
