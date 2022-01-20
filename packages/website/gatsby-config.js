const title = "Taktische Zeichen";
const description =
  "Bibliothek für die Erzeugung von taktischen Zeichen nach der DV 102 in JavaScript.";

module.exports = {
  siteMetadata: { title, description },
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-react-helmet-async",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: title,
        short_name: title,
        start_url: "/",
        background_color: "#f5f5f5",
        theme_color: "#0d6efd",
        display: "standalone",
        icon: "src/assets/logo.svg",
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./data/statistics.json",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./data/beispiele.json",
      },
    },
  ],
};
