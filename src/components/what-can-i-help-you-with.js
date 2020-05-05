import { Link } from "gatsby"
import React from "react"
import Section from "./section"
import SectionTitle from "./section-title"
import pozlacovaniAPolychromie from "../images/pozlacovani-a-polychromie.jpg"
import restaurovaniNabytku from "../images/restaurovani-nabytku.jpg"
import rezbaVolnaTvorba from "../images/rezba-volna-tvorba.jpg"

export default function WhatCanIHelpYouWith() {
  return (
    <Section bg="bg-gray-50">
      <SectionTitle>S čím Vám můžu pomoci</SectionTitle>
      <div className="mt-12 space-y-12 lg:space-y-16">
        <Link to="/restaurovani-nabytku" className="block group">
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-12">
            <div className="lg:w-1/2">
              <img
                src={restaurovaniNabytku}
                alt="Restarování nábytku"
                className="block w-full transition-opacity duration-300 lg:opacity-75 lg:group-hover:opacity-100"
              />
            </div>
            <div className="flex flex-col justify-center transition-colors duration-300 lg:w-1/2 ">
              <h2 className="text-2xl font-semibold text-gray-900 lg:text-gray-700 lg:group-hover:text-gray-900">
                Restaurování nábytku
              </h2>
              <p className="max-w-2xl mt-1 font-serif tracking-wide text-gray-800 lg:text-gray-700 lg:group-hover:text-gray-900">
                Konzervování a restaurování starožitného nábytku, řezby a
                objektů ze dřeva, historického mobiliáře včetně intarzie a
                inkrustace.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/pozlacovani-a-polychromie" className="block group">
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-12 lg:space-x-reverse">
            <div className="lg:w-1/2">
              <img
                src={pozlacovaniAPolychromie}
                alt="Pozlacování a polychromie"
                className="block w-full transition-opacity duration-300 lg:opacity-75 lg:group-hover:opacity-100"
              />
            </div>
            <div className="flex flex-col justify-center transition-colors duration-300 lg:w-1/2 lg:order-first">
              <h2 className="text-2xl font-semibold text-gray-900 lg:text-gray-700 lg:group-hover:text-gray-900">
                Pozlacování a polychromie
              </h2>
              <p className="max-w-2xl mt-1 font-serif tracking-wide text-gray-800 lg:text-gray-700 lg:group-hover:text-gray-900">
                Konzervování a restaurování pozlacovačských a malířských děl ze
                dřeva.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/rezba-volna-tvorba" className="block group">
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-12">
            <div className="lg:w-1/2">
              <img
                src={rezbaVolnaTvorba}
                alt="Řezba volná tvorba"
                className="block w-full transition-opacity duration-300 lg:opacity-75 lg:group-hover:opacity-100"
              />
            </div>
            <div className="flex flex-col justify-center transition-colors duration-300 lg:w-1/2 ">
              <h2 className="text-2xl font-semibold text-gray-900 lg:text-gray-700 lg:group-hover:text-gray-900">
                Řezba volná tvorba
              </h2>
              <p className="max-w-2xl mt-1 font-serif tracking-wide text-gray-800 lg:text-gray-700 lg:group-hover:text-gray-900">
                Dřevořezba vlastních návrhů, předloh nebo dle domluvy.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </Section>
  )
}
