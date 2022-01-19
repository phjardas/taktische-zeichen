import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function Statistics() {
  const { statistics } = useStaticQuery(graphql`
    query {
      statistics: allStatisticsJson {
        nodes {
          id
          label
          count
        }
      }
    }
  `);

  return (
    <>
      <p>Die Bibliothek enthält:</p>
      <ul>
        {statistics.nodes.map((node) => (
          <li key={node.id}>
            {node.count} {node.label}
          </li>
        ))}
      </ul>
    </>
  );
}
