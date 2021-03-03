module.exports = {
  siteMetadata: {
    title: `TokyoBlogs`,
    description: `Teaching, Writing, Learning`,
    author: `@gatsbyjs`,
    siteUrl: `https://github.com/yutaAsato/wordpressHeadless`,
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
        name: `TokyoBlogs`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/sun.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: ` http://www.swq.mrk.mybluehost.me/graphql`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/, // See below to configure properly
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
