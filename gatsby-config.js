module.exports = {
  siteMetadata: {
    title: `Jamstack`,
    description: `Sample Jamstack project for unStack Conf`,
    author: `@tpiros`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://guarded-coast-94418.herokuapp.com`,
        contentTypes: [`characters`],
      },
    },
  ],
}
