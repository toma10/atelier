import { graphql, useStaticQuery } from "gatsby"

import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import React from "react"
import { useLocation } from "@reach/router"

const SEO = ({ title }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    description,
    siteUrl,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet
      title={seo.title}
      titleTemplate={title ? titleTemplate : ""}
      htmlAttributes={{ lang: "cs" }}
      bodyAttributes={{
        class: "antialiased",
      }}
    >
      <meta name="description" content={seo.description} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        description
        siteUrl: url
      }
    }
  }
`
