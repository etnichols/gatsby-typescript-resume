module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Resume`,
    description: `A simple, responsive resume using Gatsby and Typescript.`,
    author: `John Doe`,
    email: `johndoe123@gmail.com`,
    github: `https://github.com/gatsbyjs`,
    linkedin: `https://www.linkedin.com/company/gatsbyjs/`,
    location: `New York, NY`,
    medium: `https://medium.com/search?q=gatsby%20js`,
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
        name: `Gatsby Typescript Resume`,
        short_name: `gatsby-typescript-resume`,
        start_url: `/`,
        background_color: `#fb251b`,
        theme_color: `#fb251b`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography.js`,
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
