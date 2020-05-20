import Container from "./container"
import { Link } from "gatsby"
import Logo from "./logo"
import React from "react"

const NavLink = props => (
  <Link
    {...props}
    className="font-serif transition duration-150 ease-in-out border-b border-transparent hover:border-white"
  />
)

const ButtonLink = props => (
  <Link
    {...props}
    className="inline-flex items-center px-3 py-2 text-sm font-semibold leading-4 text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200"
  />
)

export default function Footer() {
  return (
    <footer>
      <div className="py-10 text-white bg-indigo-700">
        <Container>
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <Link to="/" className="flex items-center flex-shrink-0 space-x-3">
              <Logo fill="#fff" />
              <span className="font-semibold">AteliérRestaurování.cz</span>
            </Link>
            <div className="hidden space-x-6 text-sm lg:block">
              <NavLink to="/restaurovani-nabytku">Restaurování nábytku</NavLink>
              <NavLink to="/pozlacovani-a-polychromie">
                Pozlacování a polychromie
              </NavLink>
              <NavLink to="/rezba-volna-tvorba">Řezba volná tvorba</NavLink>
              <ButtonLink to="/#kontakt">Kontakt</ButtonLink>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
