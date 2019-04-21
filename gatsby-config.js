const path = require(`path`)

module.exports = {
  pathPrefix: "/pixel-filter",
  siteMetadata: {
    title: `Pixel Filter`,
    productionURL: `https://pixel-filter.netlify.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.jpeg", // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    /**
     * For image processing
     * https://www.gatsbyjs.org/packages/gatsby-image/#two-types-of-responsive-images
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /**
     * https://www.gatsbyjs.org/tutorial/part-eight/#-using-gatsby-plugin-offline
     * NOTE: The manifest plugin should be listed before the offline plugin so that the offline plugin can cache the created manifest.webmanifest
     */
    'gatsby-plugin-offline',
  ],
}
