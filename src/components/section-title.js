import React from "react"

export default function SectionTitle({ children, ...props }) {
  return (
    <h3 {...props} className="text-3xl text-center text-gray-900">
      {children}
    </h3>
  )
}
