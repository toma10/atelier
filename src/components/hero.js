import React from "react"
import Section from "./section"
import heroAfter from "@images/hero-after.jpg"
import heroBefore from "@images/hero-before.jpg"

export default function Hero() {
  return (
    <Section>
      <div className="flex flex-col items-center space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 group">
        <div className="lg:w-1/2">
          <h5 className="text-3xl font-semibold text-center text-gray-900 lg:text-left">
            Chcete zrestaurovat nábytek?
          </h5>
          <h6 className="text-2xl text-center text-gray-800 lg:text-left">
            Vyřezat objekt ze dřeva?
          </h6>
          <p className="max-w-2xl mt-8 font-serif tracking-wide text-center text-gray-700 lg:mt-4 lg:text-left">
            Restaurování kulturních památek v rozsahu nepolychromovaných
            nefigurálních uměleckořemeslných děl ze dřeva – historického
            mobiliáře včetně intarzie a dřevěné inkrustace
          </p>
        </div>
        <div className="lg:w-1/2">
          <div className="relative w-full max-w-xs">
            <img
              width="760"
              height="760"
              src={heroBefore}
              alt="Taburet před restaurování a pozlacení"
              className="relative hidden w-full lg:block lg:z-1"
            />
            <img
              width="760"
              height="760"
              src={heroAfter}
              alt="Taburet po restaurování a pozlacení"
              className="w-full lg:inset-0 lg:opacity-0 lg:absolute lg:transition-opacity lg:duration-1000 lg:delay-200 lg:z-2 lg:group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
