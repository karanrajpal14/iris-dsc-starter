import React from "react"
import PropTypes from "prop-types"

const Footer = () => (
  <footer className="footer">
    <div className="container has-text-centered">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string
}

Footer.defaultProps = {
  siteTitle: ``
}

export default Footer
