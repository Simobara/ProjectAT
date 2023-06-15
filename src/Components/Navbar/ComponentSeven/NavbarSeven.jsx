import React, { useState } from 'react'
import './NavbarSeven.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from '../../Home/Home'
import NuovoAnnuncio from '../../NuovoAnnuncio/nuovoAnnuncio';
import ContactUs from '../../ContactUs/contactUs'
import NotFoundPage from '../../NotFoundPage/notFoundPage';
import NavigationItem from "./NavigationItem/NavigationItem"
import projectLogo from "../../../Assets/Images/main.png"

const renderRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/nuovoAnnuncio" element={<NuovoAnnuncio />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route element={<NotFoundPage />} />
    </Routes>
  )
}

const NavbarSeven = () => {
  const [activeLink, setActiveLink] = useState('/')

  const onSwitchNavItem = (link = '/') => {
    setActiveLink(link)
  }
  return (
    <Router>
      {/*<nav className="navbar navbar-expand-lg navbar-mainbg-white">*/}
      <nav className="navbar navbar-expand-lg navbar-mainbg-blue">
        <NavLink className="navbar-brand navbar-logo" to="/" onClick={onSwitchNavItem}>
          <img src={projectLogo} height={23} alt="imagePic" />
          Polietico Marketplace
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <NavigationItem activeLink={activeLink} clicked={onSwitchNavItem} />
            <NavigationItem navName="NuovoAnnuncio" activeLink={activeLink} iconName="fa-clone" exactTo="/nuovoAnnuncio" clicked={onSwitchNavItem} />
            <NavigationItem navName="Contact Us" activeLink={activeLink} iconName="fa-address-book" exactTo="/contactUs" clicked={onSwitchNavItem} />
            <NavigationItem navName="Subscribe" activeLink={activeLink} iconName="fa-shopping-basket" exactTo="#" clicked={onSwitchNavItem} />
          </ul>
        </div>
      </nav>
      {renderRoutes()}
    </Router >
  )
}
export default NavbarSeven;