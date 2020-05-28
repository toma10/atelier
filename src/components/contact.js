import React from "react"
import Section from "./section"
import SectionTitle from "./section-title"

export default function Contact() {
  return (
    <Section>
      <div className="py-16">
        <SectionTitle id="kontakt">Mám zájem o spolupráci</SectionTitle>
        <div className="mt-8 text-center">
          <h4 className="text-xl leading-none text-gray-700 sm:text-2xl">
            Oldřich Oškera, DiS.
          </h4>
          <h5 className="mt-2 leading-none text-gray-600">
            Horní Lhota u Luhačovic
          </h5>
          <h2 className="mt-8 text-2xl leading-none text-gray-600 transition-colors duration-300 sm:text-3xl hover:text-gray-900">
            <a href="mailto:oldrich.oskera@gmail.com">
              oldrich.oskera@gmail.com
            </a>
          </h2>
          <h3 className="mt-2 text-2xl leading-none text-gray-600">
            +420 774 616 122
          </h3>
        </div>
      </div>
    </Section>
  )
}
