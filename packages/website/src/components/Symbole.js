import React from "react";
import TaktischesZeichen from "taktische-zeichen-react";

export default function Symbole({ symbole, prop, base = {} }) {
  return (
    <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
      {[...symbole].sort(sort).map((gz) => (
        <div key={gz.id}>
          <div className="card mb-3">
            <div className="card-body">
              <p className="card-text">
                <TaktischesZeichen
                  {...{ ...base, [prop]: gz.id }}
                  alt={gz.label}
                />
              </p>
              <p className="card-text">
                <strong>{gz.label}</strong>
                <br />
                <small>
                  <code className="text-muted">{gz.id}</code>
                </small>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function sort(a, b) {
  return a.label.localeCompare(b.label);
}
