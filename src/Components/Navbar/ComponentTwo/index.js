'strict'
import React, { Component } from 'react'
import NavbarButton from './NavbarButton'
import NavbarDropdown from './NavbarDropdown'
import NavbarLink from './NavbarLink'
import NavbarDropdownLink from './NavbarDropdownLink'
import NavbarSearch from './NavbarSearch'
import PropTypes from 'prop-types'
import './style.css'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.getLeft = this.getLeft.bind(this)
    this.getRight = this.getRight.bind(this)
    this.getExpand = this.getExpand.bind(this)
    this.getColor = this.getColor.bind(this)
    this.getBackground = this.getBackground.bind(this)
    this.getBrand = this.getBrand.bind(this)
  }

  getLeft() {
    if (this.props.leftSide.length === 0) {
      return null
    }
    let content = this.props.leftSide.map((value, key) => {
      if (value instanceof NavbarDropdown) {
        return <li className="nav-item dropdown" key={key}>{value}</li>
      } else {
        return <li className="nav-item" key={key}>{value}</li>
      }
    })
    return (<ul className="navbar-nav mr-auto">
      {content}
    </ul>)
  }

  getRight() {
    if (this.props.rightSide.length === 0) {
      return null
    }
    let content = this.props.rightSide.map((value, key) => {
      return <li className="nav-item" key={key}>{value}</li>
    })
    return (<ul className="nav navbar-nav navbar-right">
      {content}
    </ul>)
  }

  getBrand() {
    if (this.props.brand && this.props.brand.length > 0) {
      return
      //<a className="navbar-brand" href="javascript:void(0)">{this.props.brand}</a>
    }
  }

  getExpand() {
    switch (this.props.expand) {
      case 'sm':
      case 'md':
      case 'lg':
        return 'navbar-expand-' + this.props.expand

      default:
        return 'navbar-expand-md'
    }
  }

  getColor() {
    return `navbar-${this.props.color}`
  }

  getBackground() {
    return `bg-${this.props.background}`
  }

  render() {

    return (
      <div className={`react-navbar ${this.props.className}`}>
        <nav
          className={`navbar ${this.getExpand()} ${this.getColor()} ${this.getBackground()}`}>
          {this.getBrand()}
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#react-navbar-toggle"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="react-navbar-toggle">
            {this.getLeft()}
            {this.getRight()}
          </div>
        </nav>
      </div>
    )
  }
}

Navbar.propTypes = {
  leftSide: PropTypes.array,
  rightSide: PropTypes.array,
  size: PropTypes.string,
  expand: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  brand: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

Navbar.defaultProps = {
  brand: <span></span>,
  expand: null,
  rightSide: [],
  leftSide: [],
  color: 'light',
  background: 'light'
}

export {
  Navbar,
  NavbarLink,
  NavbarButton,
  NavbarDropdown,
  NavbarDropdownLink,
  NavbarSearch
}
