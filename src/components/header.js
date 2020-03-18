import { Link } from "gatsby"
import React, { useState } from "react"
import Flag from "./flag"

const Header = ({ siteTitle }) => {
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Flag />
        <span className="font-semibold text-xl tracking-tight">
          <a href="/">{siteTitle}</a>
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-green-200 border-green-400 hover:text-white hover:border-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            to="/"
            className="block mt-4 text-lg lg:inline-block lg:mt-0 text-green-700 hover:text-white mr-4"
          >
            Home
          </Link>
          <Link
            to="/characters"
            className="block mt-4 text-lg lg:inline-block lg:mt-0 text-green-700 hover:text-white mr-4"
          >
            Characters
          </Link>
          <Link
            to="/about"
            className="block mt-4 text-lg lg:inline-block lg:mt-0 text-green-700 hover:text-white mr-4"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
