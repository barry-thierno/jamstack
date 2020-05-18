import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <Link className="site-infos" to="/">
      <h1 className="site-title">{siteTitle}</h1>
    </Link>

    <nav>
      <ul className="menu">
        <li>
          <Link className="menu-item" to="/">
            Acceuil
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/about">
            Qui sommes nous?
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
