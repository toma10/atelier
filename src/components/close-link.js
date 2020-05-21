import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

function CloseIcon() {
  return (
    <svg className="w-full h-auto" fill="currentColor" viewBox="0 0 20 20">
      <path
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default function CloseLink({ to }) {
  return (
    <div className="fixed xl:flex xl:justify-end xl:relative right-8 xl:right-auto xl:bottom-auto bottom-6">
      <Link to={to}>
        <div className="block w-10 h-10 p-1 text-gray-700 bg-white rounded-full opacity-75 md:w-12 md:h-12 lg:w-16 lg:h-16 lg:opacity-100">
          <Close />
          <CloseIcon />
        </div>
      </Link>
    </div>
  )
}

CloseLink.propTypes = {
  to: PropTypes.string.isRequired,
}
