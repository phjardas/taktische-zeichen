const path = require("path");
const fs = require("fs").promises;

const root = path.resolve(__dirname, "..");

const packageNames = ["core", "react", "cli", "web-component"];

const readmeFiles = [
  "README.md",
  ...packageNames.map(pckg => `packages/${pckg}/README.md`)
].map(file => path.resolve(root, file));

function createStatistics(statistics) {
  return statistics.map(({ label, count }) => `- ${count} ${label}`).join("\n");
}

async function readFile(file) {
  return (await fs.readFile(file, "utf8")).trim();
}

function replaceToken(content, key, value) {
  const startTag = `<!-- ${key}:START -->`;
  const endTag = `<!-- ${key}:END -->`;
  const startIndex = content.indexOf(startTag);
  const endIndex = content.indexOf(endTag, startIndex);

  if (startIndex < 0 || endIndex < 0) return content;

  return (
    content.substring(0, startIndex) +
    startTag +
    "\n\n" +
    value +
    "\n\n" +
    content.substring(endIndex)
  );
}

async function replaceTokens(file, values) {
  console.log("Replacing tokens in %s", file);
  const contents = await fs.readFile(file, "utf8");
  const updated = Object.entries(values).reduce(
    (content, [key, value]) => replaceToken(content, key, value),
    contents
  );
  await fs.writeFile(file, updated, "utf-8");
}

async function main() {
  const statistics = JSON.parse(
    await readFile(path.resolve(root, "packages", "core", "statistics.json"))
  );

  await fs.writeFile(
    path.resolve(root, "packages", "website", "data", "statistics.json"),
    JSON.stringify(statistics, null, 2),
    "utf-8"
  );

  const values = {
    STATISTICS: createStatistics(statistics),
    FOOTER: await readFile(path.resolve(root, "FOOTER.md")),
    ...Object.fromEntries(
      await Promise.all(
        packageNames.map(async pckg => [
          `USAGE:${pckg}`,
          await readFile(path.resolve(root, "packages", pckg, "USAGE.md"))
        ])
      )
    )
  };

  await Promise.all(readmeFiles.map(file => replaceTokens(file, values)));
}

main().catch(error => {
  process.exitCode = 1;
  console.error(error);
});
