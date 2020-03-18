const path = require(`path`)

const createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    query MyQuery {
      allStrapiCharacters {
        edges {
          node {
            strapiId
          }
        }
      }
    }
  `)
  const characters = result.data.allStrapiCharacters.edges
  characters.forEach(character => {
    createPage({
      path: character.node.strapiId,
      component: path.resolve("./src/templates/character-page.js"),
      context: {
        strapiId: character.node.strapiId,
      },
    })
  })
}

module.exports = {
  createPages,
}
