import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import "./navbar.css"
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import logo from "../../Assets/Images/main.png";


import Home from '../Home/home';
import NuovoAnnuncio from '../NuovoAnnuncio/nuovoAnnuncio';
import AggiungiAzienda from '../AggiungiAzienda/aggiungiAzienda';
import NotFoundPage from '../NotFoundPage/notFoundPage';

const NavbarMain = () => {


    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <>
            <Router>
                <Navbar bg="primary">
                    <div className={click ? "main-container" : ""} onClick={() => Close()} />
                    <nav className="navbar navbar-expand-lg navbar-light bg-primary" onClick={e => e.stopPropagation()}>
                        <div className="nav-container">
                            <NavLink to="#" className="nav-logo">
                                <img src={logo} alt="CompaLogoDitta" className="navbar-logo" />
                                <span>Polieco-Marketplace</span>
                            </NavLink>

                        </div>
                        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">okk</span>
                        </button> */}
                        {/* ----------------------------- */}
                        <div className="collapse navbar-collapse text-danger" id="navbarNav">

                            <ul className={click ? "nav-menu active" : "nav-menu"}>
                                <li className="nav-item">
                                    <NavLink to="/" activeclassname="active" className="nav-links" onClick={click ? handleClick : null}> Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/nuovoAnnuncio" activeclassname="active" className="nav-links" onClick={click ? handleClick : null}>Nuovo Annuncio </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/aggiungiAzienda" activeclassname="active" className="nav-links" onClick={click ? handleClick : null}> Aggiungi Azienda</NavLink>
                                </li>
                            </ul>
                        </div>
                        {/* ----------------------------- */}
                    </nav >
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </Navbar>
                {/* ROUTES */}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/nuovoAnnuncio" element={<NuovoAnnuncio />} />
                    <Route path="/aggiungiAzienda" element={<AggiungiAzienda />} />
                    <Route element={<NotFoundPage />} />
                </Routes>
            </Router >
        </>
    )
}

export default NavbarMain;
