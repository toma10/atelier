import React from "react"

export default function PageTitle({ children, ...props }) {
  return (
    <h2 {...props} className="text-3xl text-center text-gray-900">
      {children}
    </h2>
  )
}
