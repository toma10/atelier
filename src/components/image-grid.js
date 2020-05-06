import React from "react"

export default function ImageGrid({ children }) {
  return (
    <div className="gap-12 space-y-12 col-1 md:col-2 lg:col-3">{children}</div>
  )
}
