import Nav from "./nav"
import PropTypes from "prop-types"
import React from "react"
import SEO from "./seo"

export default function Layout({ title, children }) {
  return (
    <>
      <SEO title={title} />
      <header>
        <Nav />
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8">
        {children}
      </main>
    </>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
}
