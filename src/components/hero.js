import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import React from "react"
import Section from "./section"

export default function Hero() {
  const images = useStaticQuery(graphql`
    query {
      before: file(relativePath: { eq: "hero-before.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      after: file(relativePath: { eq: "hero-after.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <Section>
      <div className="flex flex-col items-center space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 group">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold text-center text-gray-900 lg:text-left">
            Chcete zrestaurovat nábytek?
          </h2>
          <h3 className="text-2xl text-center text-gray-800 lg:text-left">
            Vyřezat objekt ze dřeva?
          </h3>
          <p className="max-w-2xl mt-8 font-serif tracking-wide text-center text-gray-700 lg:mt-4 lg:text-left">
            Restaurování kulturních památek v rozsahu nepolychromovaných
            nefigurálních uměleckořemeslných děl ze dřeva – historického
            mobiliáře včetně intarzie a dřevěné inkrustace
          </p>
        </div>
        <div className="lg:w-1/2">
          <div className="relative w-full max-w-xs">
            <div className="relative hidden w-full lg:block lg:z-1">
              <Img
                fixed={images.before.childImageSharp.fixed}
                alt="Taburet před restaurování a pozlacení"
              />
            </div>
            <div className="w-full lg:inset-0 lg:opacity-0 lg:absolute lg:transition-opacity lg:duration-1000 lg:delay-200 lg:z-2 lg:group-hover:opacity-100">
              <Img
                fixed={images.after.childImageSharp.fixed}
                className=""
                alt="Taburet po restaurování a pozlacení"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
