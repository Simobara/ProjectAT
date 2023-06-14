'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const NavbarDropdownLink = ({href, children, handle, className}) => {
  if (href && href.length > 0) {
    return (<a className={`dropdown-item ${className}`} href={href} onClick={handle}>{children}</a>)
  } else {
    return (<a className={`dropdown-item pointer ${className}`} onClick={handle}>{children}</a>)
  }
}

NavbarDropdownLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string.isRequired,
  handle: PropTypes.func,
  className: PropTypes.string,
}

export default NavbarDropdownLink
