import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div
      className="py-20"
      style={{ background: "linear-gradient(90deg, green 0%, darkgreen 100%)" }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-2 text-white">
          This is Sample Jamstack App
        </h2>
        <h3 className="text-2xl mb-8 text-gray-200">
          Thank you for attending unStack Conf!
        </h3>
        <h3 className="text-2xl mb-8 text-gray-200">
          For free video courses on Jamstack, check{" "}
          <a
            className="font-bold hover:underline"
            href="https://jamstack.training"
          >
            https://jamstack.training
          </a>
        </h3>

        <span className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
          Don't forget to follow{" "}
          <a className="hover:underline" href="https://twitter.com/tpiros">
            @tpiros
          </a>
        </span>
      </div>
    </div>
  </Layout>
)

export default IndexPage
