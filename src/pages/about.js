import React from "react"
import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <div
      className="py-20"
      style={{ background: "linear-gradient(90deg, green 0%, darkgreen 100%)" }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-2 text-white">About</h2>
        <h3 className="text-2xl mb-8 text-gray-200">
          A Jamstack application showcasing GastbyJS and Strapi
        </h3>
      </div>
    </div>
  </Layout>
)

export default AboutPage
