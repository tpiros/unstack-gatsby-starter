import React from "react"

import Layout from "../components/layout"
const NotFoundPage = () => (
  <Layout>
    <div
      className="py-20 px-6"
      style={{ background: "linear-gradient(90deg, green 0%, darkgreen 100%)" }}
    >
      <h1 className="text-4xl font-bold mb-2 text-white">404</h1>
      <p className="text-2xl mb-8 text-gray-200">
        *waves* This is not the page you are looking for ...
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
