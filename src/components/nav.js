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
        "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out",
      ]),
    })}
  />
)

const MobileNavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => ({
      className: cn([
        isCurrent
          ? "border-indigo-500 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700"
          : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300",
        "block pl-3 pr-4 py-2 border-l-4 text-base font-medium focus:outline-none transition duration-150 ease-in-out",
      ]),
    })}
  />
)

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Logo />
              <h1 className="hidden lg:block lg:ml-3">
                AteliérRestaurování.cz
              </h1>
            </Link>
          </div>
          <div className="hidden md:ml-6 md:flex space-x-8">
            <NavLink to="/restaurovani-nabytku">Restaurování nábytku</NavLink>
            <NavLink to="/pozlacovani-a-polychromie">
              Pozlacování a polychromie
            </NavLink>
            <NavLink to="/rezba-volna-tvorba">Řezba volná tvorba</NavLink>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setMenuOpen(menuOpen => !menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                className="block h-6 w-6"
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
                className="hidden h-6 w-6"
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

      <div className={`${cn([menuOpen ? "block" : "hidden", "md:hidden"])}`}>
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
        </div>
      </div>
    </nav>
  )
}
