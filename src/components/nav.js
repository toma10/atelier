import React, { useState } from "react"

import { Link } from "gatsby"
import Logo from "./logo"
import cn from "classnames"

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => ({
      className: cn([
        isCurrent
          ? "border-indigo-500 text-gray-900 focus:border-indigo-700"
          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300",
        "inline-flex items-center px-1 pt-1 border-b-2 font-serif text-sm leading-5 focus:outline-none transition duration-150 ease-in-out",
      ]),
    })}
  />
)

const ButtonLink = props => (
  <span className="inline-flex rounded-md shadow-sm">
    <Link
      {...props}
      className="inline-flex items-center px-5 py-2 text-sm font-semibold leading-4 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
    />
  </span>
)

const MobileNavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => ({
      className: cn([
        isCurrent
          ? "border-indigo-500 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700"
          : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300",
        "block pl-3 pr-4 py-2 border-l-4 text-base focus:outline-none transition duration-150 ease-in-out",
      ]),
    })}
  />
)

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="relative bg-white shadow">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link to="/" className="flex items-center flex-shrink-0">
              <Logo />
              <h1 className="hidden font-semibold lg:block lg:ml-3">
                AteliérRestaurování.cz
              </h1>
            </Link>
          </div>
          <div className="hidden space-x-8 lg:flex">
            <NavLink to="/restaurovani-nabytku">Restaurování nábytku</NavLink>
            <NavLink to="/pozlacovani-a-polychromie">
              Pozlacování a polychromie
            </NavLink>
            <NavLink to="/rezba-volna-tvorba">Řezba volná tvorba</NavLink>
            <div className="flex items-center">
              <ButtonLink to="/#kontakt">Kontakt</ButtonLink>
            </div>
          </div>
          <div className="flex items-center -mr-2 lg:hidden">
            <button
              onClick={() => setMenuOpen(menuOpen => !menuOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            >
              <svg
                className="block w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${cn([menuOpen ? "block" : "hidden", "lg:hidden"])}`}>
        <div className="pt-2 pb-3 space-y-1">
          <MobileNavLink to="/restaurovani-nabytku">
            Restaurování nábytku
          </MobileNavLink>
          <MobileNavLink to="/pozlacovani-a-polychromie">
            Pozlacování a polychromie
          </MobileNavLink>
          <MobileNavLink to="/rezba-volna-tvorba">
            Řezba volná tvorba
          </MobileNavLink>
          <MobileNavLink to="/#kontakt">Kontakt</MobileNavLink>
        </div>
      </div>
    </nav>
  )
}
