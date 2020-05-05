const path = require("path")

module.exports = {
  siteMetadata: {
    title: "AteliérRestaurování.cz",
    titleTemplate: "%s - AteliérRestaurování.cz",
    description: "AteliérRestaurování.cz - restaurování nábytku Oldřich Oškera",
    url: "http://atelier-restaurovani.cz",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
        },
        extensions: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "AteliérRestaurování.cz",
        short_name: "AteliérRestaurování.cz",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#5145cd",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
  ],
}
