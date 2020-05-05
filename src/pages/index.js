import Contact from "@components/contact"
import Hero from "@components/hero"
import Layout from "@components/layout"
import React from "react"
import WhatCanIHelpYouWith from "@components/what-can-i-help-you-with"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <WhatCanIHelpYouWith />
      <Contact />
    </Layout>
  )
}
