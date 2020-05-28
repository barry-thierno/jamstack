import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../index.scss"

const Header = ({ siteTitle }) => (
  <header>
    <Link className="site-infos">
      <h1 className="site-title">{siteTitle}</h1>
    </Link>
    <nav>
      <ul className="menu">
        <li>
          <Link className="menu-item" to="/about">
            Qui suis je?
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
