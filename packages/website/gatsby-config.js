module.exports = {
  plugins: [
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Taktische Zeichen",
        short_name: "Taktische Zeichen",
        start_url: "/",
        background_color: "#f5f5f5",
        theme_color: "#0d6efd",
        display: "standalone",
        icon: "src/assets/logo.svg",
      },
    },
  ],
};
