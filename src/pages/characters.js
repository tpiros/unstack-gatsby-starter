import React from "react"
import { graphql, Link } from "gatsby"
import { Image } from "cloudinary-react"
import Layout from "../components/layout"

const CharactersPage = ({ data }) => {
  const characters = data.allStrapiCharacters.edges
  return (
    <Layout>
      <div
        className="p-5"
        style={{
          background: "linear-gradient(90deg, green 0%, darkgreen 100%)",
        }}
      >
        {characters.map(({ node }) => {
          const imageUrl = `jam/${node.image}`
          return (
            <Link
              key={node.strapiId}
              to={node.strapiId}
              className="block rounded-lg m-10 shadow hover:shadow-2xl border-2 border-black"
            >
              <div className="relative pb-full">
                <Image
                  cloudName="tamas-demo"
                  publicId={imageUrl}
                  width="300"
                  height="210"
                  crop="fill"
                  fetchFormat="auto"
                  gravity="north"
                  quality="auto"
                  secure="true"
                ></Image>
              </div>
              <div className="bg-white p-4">
                <div className="font-bold text-2xl">{node.name}</div>
                <div className="font-semibold text-l">{node.alliance}</div>
              </div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}
export default CharactersPage

export const pageQuery = graphql`
  query MyQuery {
    allStrapiCharacters(sort: { fields: name, order: ASC }) {
      edges {
        node {
          name
          alliance
          strapiId
          image
        }
      }
    }
  }
`
