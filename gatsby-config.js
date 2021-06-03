module.exports = {
  siteMetadata: {
    title: "planet-facts",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["antonio:400,500", "spartan:400,700"],
      },
    },
  ],
};
