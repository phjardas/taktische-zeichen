import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import React from "react";

const routes = [
  { path: "/", label: "Startseite" },
  { path: "/grundzeichen", label: "Grundzeichen" },
  { path: "/fachaufgaben", label: "Fachaufgaben" },
  { path: "/organisationen", label: "Organisationen" },
  { path: "/einheiten", label: "Einheiten" },
  { path: "/verwaltungsstufen", label: "Verwaltungsstufen" },
  { path: "/funktionen", label: "Funktionen" },
  { path: "/symbole", label: "Symbole" },
];

export default function Nav() {
  const { pathname: current } = useLocation();

  return (
    <nav className="nav nav-pills mb-5">
      {routes.map((route) => (
        <li key={route.path} className="nav-item">
          <Link
            className={route.path === current ? "nav-link active" : "nav-link"}
            aria-current={route.path === current ? "page" : undefined}
            to={route.path}
          >
            {route.label}
          </Link>
        </li>
      ))}
    </nav>
  );
}
