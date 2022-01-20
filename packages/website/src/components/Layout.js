import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet-async";
import React from "react";
import logo from "../assets/logo.svg";
import Nav from "./Nav";
import "./styles.css";

export default function Layout({ children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  return (
    <>
      <Helmet htmlAttributes={{ lang: "de" }}>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <div className="container py-3">
        <h1
          className="display-1 d-flex align-items-center"
          style={{ fontFamily: "Roboto Slab" }}
        >
          <img
            src={logo}
            alt="Logo"
            className="me-3"
            style={{ height: "1em" }}
          />
          {site.siteMetadata.title}
        </h1>
        <Nav />
        <main className="mt-3">{children}</main>
      </div>
    </>
  );
}
