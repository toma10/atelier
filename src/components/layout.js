import React, { Fragment } from "react"

import Footer from "./footer"
import Header from "./header"
import Main from "./main"

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Fragment>
  )
}
