import PropTypes from "prop-types"
import React from "react"
import SEO from "./seo"

export default function Layout({ title, children }) {
  return (
    <div>
      <SEO title={title} />
      {children}
    </div>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
}
