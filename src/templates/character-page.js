import React from "react"
import { graphql, Link } from "gatsby"
import { Image } from "cloudinary-react"
import Layout from "../components/layout"

export default function CharacterPage({ data }) {
  const character = data.strapiCharacters
  const imageUrl = `jam/${character.image}`
  return (
    <Layout>
      <div
        className="p-10 flex flex-col md:flex-row"
        style={{
          background: "linear-gradient(90deg, green 0%, darkgreen 100%)",
        }}
      >
        <Image
          cloudName="tamas-demo"
          publicId={imageUrl}
          width="600"
          crop="scale"
          fetchFormat="auto"
          quality="auto"
          secure="true"
          className="h-full w-full md:mx-8 rounded-lg"
        ></Image>
        <div className="mt-4 md:mt-0 md:w-2/3 md:mx-8">
          <Link className="font-bold text-white" to="/characters">
            ← Back to characters
          </Link>
          <h1 className="font-bold text-4xl text-black-900">
            {data.strapiCharacters.name}
          </h1>
          <span className="block font-semibold text-lg text-white">
            {data.strapiCharacters.homeworld || data.strapiCharacters.weapon
              ? `${data.strapiCharacters.homeworld} | ${data.strapiCharacters.weapon}`
              : ""}
          </span>
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{
              __html: data.strapiCharacters.bio,
            }}
          ></div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($strapiId: String!) {
    strapiCharacters(strapiId: { eq: $strapiId }) {
      name
      homeworld
      bio
      weapon
      image
    }
  }
`
