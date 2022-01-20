import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useTaktischesZeichen } from "./tz";
import { paramCase } from "param-case";

function nodeDemo(tz) {
  return `
import { erzeugeTaktischesZeichen } from "taktische-zeichen-core";

const tz = erzeugeTaktischesZeichen({
${Object.entries(tz)
  .filter((e) => e[1])
  .map(([key, value]) => `  ${key}: ${JSON.stringify(value)},`)
  .join("\n")}
});

console.log(tz.svg);

// Ausgabe: <?xml version="1.0" encoding="UTF-8"?><svg>...</svg>
`.trim();
}

function reactDemo(tz) {
  return `
import { TaktischesZeichen } from "taktische-zeichen-react";

function App() {
  return (
    <TaktischesZeichen
${Object.entries(tz)
  .filter((e) => e[1])
  .map(([key, value]) => `      ${key}=${JSON.stringify(value)}`)
  .join("\n")}    
    />
  );
}

// Rendert <svg>...</svg>
`.trim();
}

function consoleDemo(tz) {
  return `
npm i -g taktische-zeichen-cli

taktisches-zeichen \

${Object.entries(tz)
  .filter((e) => e[1])
  .map(([key, value]) => `  --${paramCase(key)} "${value}"`)
  .join(" \\\n")}    

# Ausgabe:
# <?xml version="1.0" encoding="UTF-8"?>
# <svg>...</svg>
`.trim();
}

export default function Usage() {
  const { taktischesZeichen } = useTaktischesZeichen();

  return (
    <>
      <h2>Anwendung</h2>
      <p>Beide Bibliotheken beinhalten TypeScript-Definitionen.</p>

      <h3>Node.js</h3>
      <SyntaxHighlighter language="typescript">
        {nodeDemo(taktischesZeichen)}
      </SyntaxHighlighter>

      <h3>React</h3>
      <SyntaxHighlighter language="typescript">
        {reactDemo(taktischesZeichen)}
      </SyntaxHighlighter>

      <h3>Kommandozeile</h3>
      <SyntaxHighlighter language="bash">
        {consoleDemo(taktischesZeichen)}
      </SyntaxHighlighter>
    </>
  );
}
