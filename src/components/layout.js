import Footer from "./footer"
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
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
}
