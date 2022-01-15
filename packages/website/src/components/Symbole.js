import React from "react";
import TaktischesZeichen from "taktische-zeichen-react";

export default function Symbole({ symbole, prop, base = {}, preview = {} }) {
  return (
    <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
      {[...symbole].sort(sort).map((gz) => (
        <div key={gz.id} className="col">
          <div className="card h-100">
            <div className="card-body d-flex flex-column justify-content-between">
              <p className="card-text">
                <TaktischesZeichen
                  {...{ ...base, [prop]: gz.id }}
                  alt={gz.label}
                  {...preview}
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
