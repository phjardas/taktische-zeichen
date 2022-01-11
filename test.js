const fs = require("fs").promises;
const { IconFactory } = require(".");

const factory = new IconFactory();

const icons = [
  {
    organisation: "feuerwehr",
    grundzeichen: "6.1.2",
    fachaufgabe: "3.1.1",
  },
  {
    organisation: "thw",
    grundzeichen: "6.1.3",
    fachaufgabe: "3.1.6",
  },
  {
    organisation: "drk",
    grundzeichen: "6.1.1",
    fachaufgabe: "3.2.1",
  },
];

Promise.all(
  icons.map((descriptor, i) =>
    factory
      .createIcon(descriptor)
      .then((icon) =>
        fs.writeFile(`icon${i}.svg`, icon.toString(true), "utf-8")
      )
  )
).catch((error) => console.error(error));
