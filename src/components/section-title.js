import React from "react"

export default function SectionTitle({ children, ...props }) {
  return (
    <h3 {...props} className="text-2xl text-center text-gray-900 sm:text-3xl">
      {children}
    </h3>
  )
}
