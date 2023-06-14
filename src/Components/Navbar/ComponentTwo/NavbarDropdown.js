'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const NavbarDropdown = ({label, className, listing}) => {
  const dropdownClassName = 'nav-item dropdown ' + className
  return (
    <span className={dropdownClassName}>
      <a
        className="nav-link dropdown-toggle pointer"
        data-toggle="dropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded="false">{label}
      </a>
      <div className="dropdown-menu">
        {listing}
      </div>
    </span>
  )
}

NavbarDropdown.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  listing: PropTypes.array.isRequired,
}

export default NavbarDropdown
