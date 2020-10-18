module.exports = {
  siteMetadata: {
    title: `Linear Regression using Iris Dataset | Google DSC`,
    description: `A SPA that connects to Google Cloud to perform Linear Regression and predict the species of Iris genus based on the input`,
    author: `@karanrajpal14`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `iris-regression-spa-google-dsc-uta`,
        short_name: `iris-classifier-spa`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/iris-icon.png`, // This path is relative to the root of the site.
      },
    }
  ],
}
