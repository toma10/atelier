import Footer from "./footer"
import Nav from "./nav"
import PropTypes from "prop-types"
import React from "react"
import SEO from "./seo"

export default function Layout({ title, hideFooter, children }) {
  return (
    <div>
      <SEO title={title} />
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      {hideFooter ? null : (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  hideFooter: PropTypes.bool,
}

Layout.defaultProps = {
  hideFooter: false,
}
