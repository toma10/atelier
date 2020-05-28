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
          "@src": path.resolve(__dirname, "src"),
          "@components": path.resolve(__dirname, "src/components"),
          "@templates": path.resolve(__dirname, "src/templates"),
          "@hooks": path.resolve(__dirname, "src/hooks"),
          "@images": path.resolve(__dirname, "src/images"),
          "@data": path.resolve(__dirname, "src/data"),
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`raleway\:400,600`, `roboto\:300,400`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-48643101-4",
        head: false,
        respectDNT: true,
        exclude: [],
        defer: true,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
