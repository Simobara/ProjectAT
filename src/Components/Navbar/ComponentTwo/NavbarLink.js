'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const NavbarLink = ({href, children, handle}) => {
  if (href && href.length > 0) {
    return (<a className="nav-link" href={href} onClick={handle}>{children}</a>)
  } else {
    return (<a className="nav-link pointer" onClick={handle}>{children}</a>)
  }
}

NavbarLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object,]).isRequired,
  handle: PropTypes.func
}

export default NavbarLink
