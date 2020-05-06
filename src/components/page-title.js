import React from "react"

export default function PageTitle({ children, ...props }) {
  return (
    <h2 {...props} className="text-2xl text-center text-gray-900 sm:text-3xl">
      {children}
    </h2>
  )
}
