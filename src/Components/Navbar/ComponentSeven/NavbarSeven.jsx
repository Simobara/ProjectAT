import React, { useEffect } from 'react'
import './NavbarSeven.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import $ from 'jquery';



import Home from '../../Home/home'
import NuovoAnnuncio from '../../NuovoAnnuncio/nuovoAnnuncio';
import AggiungiAzienda from '../../AggiungiAzienda/aggiungiAzienda';
import NotFoundPage from '../../NotFoundPage/notFoundPage';


const NavbarSeven = () => {

  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "left": itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {

    animation();
    $(window).on('resize', function () {
      setTimeout(function () { animation(); }, 500);
    });

  }, []);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-mainbg">

        <NavLink className="navbar-brand navbar-logo" to="/" >
          Polietico Marketplace
        </NavLink>


        <button
          className="navbar-toggler"
          onClick={function () {
            setTimeout(function () { animation(); });
          }}
          type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars text-white"></i>
        </button>

        <div
          className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">

            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>

            <li className="nav-item active">
              <NavLink className="nav-link" exact to="/">
                <i
                  className="fas fa-tachometer-alt">
                </i>Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/aggiungiAzienda" exact>
                <i
                  className="far fa-address-book">
                </i>AggiungiAzienda
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/nuovoAnnuncio" exact>
                <i
                  className="far fa-clone">
                </i>NuovoAnnuncio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contactUs" exact>
                <i
                  className="far fa-chart-bar">
                </i>ContactUs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#" exact>
                <i
                  className="far fa-copy">
                </i>subscribe
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* ROUTES */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/nuovoAnnuncio" element={<NuovoAnnuncio />} />
        <Route path="/aggiungiAzienda" element={<AggiungiAzienda />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </Router >
  )
}
export default NavbarSeven;