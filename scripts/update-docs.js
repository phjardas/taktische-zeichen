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

async function writeFile(file, content) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, content, "utf8");
  console.log("wrote: %s", file);
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
  const contents = await fs.readFile(file, "utf8");
  const updated = Object.entries(values).reduce(
    (content, [key, value]) => replaceToken(content, key, value),
    contents
  );
  await writeFile(file, updated);
}

async function updateWebsiteData({ statistics, usages, footer }) {
  const includesDir = path.resolve(
    root,
    "packages",
    "website",
    "views",
    "_includes"
  );

  await Promise.all([
    writeFile(path.resolve(includesDir, "footer.md"), footer),
    writeFile(
      path.resolve(includesDir, "statistics.md"),
      createStatistics(statistics)
    ),
    ...Object.entries(usages).map(([pckg, usage]) =>
      writeFile(path.resolve(includesDir, `usage_${pckg}.md`), usage)
    )
  ]);
}

async function updateReadmes({ statistics, usages, footer }) {
  const values = {
    STATISTICS: createStatistics(statistics),
    FOOTER: footer,
    ...Object.fromEntries(
      Object.entries(usages).map(([pckg, value]) => [`USAGE:${pckg}`, value])
    )
  };

  await Promise.all(readmeFiles.map(file => replaceTokens(file, values)));
}

async function main() {
  const statistics = JSON.parse(
    await readFile(path.resolve(root, "packages", "core", "statistics.json"))
  );

  const usages = Object.fromEntries(
    await Promise.all(
      packageNames.map(async pckg => [
        pckg,
        await readFile(path.resolve(root, "packages", pckg, "USAGE.md"))
      ])
    )
  );

  const footer = await readFile(path.resolve(root, "FOOTER.md"));

  await Promise.all([
    updateWebsiteData({ statistics, usages, footer }),
    updateReadmes({ statistics, usages, footer })
  ]);
}

main().catch(error => {
  process.exitCode = 1;
  console.error(error);
});
