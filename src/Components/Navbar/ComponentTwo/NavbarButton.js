'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const NavbarButton = props => {
  const getClass = () => {
    let size = ''
    switch (props.size) {
      case 'lg':
      case 'sm':
        size = ' btn-' + props.size
        break
    }

    return `btn${size} btn-${props.color}${props.marginRight ? ' mr-2' : ''}`
  }

  return (
    <div>
      <button className={getClass()} onClick={props.handleClick}>
        {props.label}
      </button>
    </div>
  )
}

NavbarButton.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  handleClick: PropTypes.func,
  color: PropTypes.string,
  size: PropTypes.string,
  marginRight: PropTypes.bool
}

NavbarButton.defaultProps = {
  color: 'outline-secondary',
  size: null,
  marginRight: true
}

export default NavbarButton
