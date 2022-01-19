import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function Statistics() {
  const { allStatisticsJson: statistics } = useStaticQuery(graphql`
    query {
      allStatisticsJson {
        edges {
          node {
            id
            label
            count
          }
        }
      }
    }
  `);

  return (
    <>
      <p>Die Bibliothek enthält:</p>
      <ul>
        {statistics.edges.map(({ node }) => (
          <li key={node.id}>
            {node.count} {node.label}
          </li>
        ))}
      </ul>
    </>
  );
}
