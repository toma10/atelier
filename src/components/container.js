import React from "react"

export default function Container({ children }) {
  return (
    <div className="px-4 mx-auto max-w-container sm:px-6 lg:px-8 xl:px-20">
      {children}
    </div>
  )
}
