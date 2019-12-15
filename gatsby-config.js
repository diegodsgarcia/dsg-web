module.exports = {
  siteMetadata: {
    title: `DSG`,
    description: `The website about me.`,
    author: `@diegodsgarcia`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `works`,
        path: `${__dirname}/works`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DSG Website`,
        short_name: `dsg`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-138688588-1",
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offlineW
    // `gatsby-plugin-offline`,
  ],
}
