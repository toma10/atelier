import Container from "./container"
import PropTypes from "prop-types"
import React from "react"
import cn from "classnames"

export default function Section({ children, bg }) {
  return (
    <section className={cn([bg, "py-20"])}>
      <Container>{children}</Container>
    </section>
  )
}

Section.propTypes = {
  bg: PropTypes.string,
}

Section.defaultProps = {
  bg: "bg-white",
}
