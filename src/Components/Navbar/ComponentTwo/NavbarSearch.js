// 'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const NavbarSearch = (props) => {
  let button
  if (props.onClick) {
    button = (
      <button
        className="btn btn-outline-success"
        type="button"
        onClick={props.onClick}>
        <i className="fas fa-search"></i>
      </button>
    )
  }
  return (
    <div>
      <div className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange} /> {button}
      </div>
    </div>
  )
}

NavbarSearch.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func
}

NavbarSearch.defaultProps = {
  placeholder: 'Search...',
  value: ''
}

export default NavbarSearch
