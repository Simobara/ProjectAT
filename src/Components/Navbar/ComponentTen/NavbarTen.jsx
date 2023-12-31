import React from 'react'
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import logo from "../../../Assets/Images/main.png";



import Home from '../../Home/Home';
import NuovoAnnuncio from '../../NuovoAnnuncio/nuovoAnnuncio';
import AggiungiAzienda from '../../AggiungiAzienda/aggiungiAzienda';
import NotFoundPage from '../../NotFoundPage/notFoundPage';

const NavbarTen = () => {
    return (
        <>
            <Router>
                <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink to="#" className="nav-logo">
                        <img src={logo} alt="CompaLogoDitta" className="navbar-logo" />
                        <span>Polieco-Marketplace</span>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink to="/" className="nav-link">Home <span className="sr-only">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Link</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink to="/nuovoAnnuncio" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    NuovoAnnuncio
                                </NavLink>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <NavLink className="dropdown-item" to="#">Action</NavLink>
                                    <NavLink className="dropdown-item" to="#">Another action</NavLink>
                                    <div className="dropdown-divider"></div>
                                    <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link disabled" to="#">Disabled</NavLink>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </Navbar>
                {/* ROUTES */}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/nuovoAnnuncio" element={<NuovoAnnuncio />} />
                    <Route path="/aggiungiAzienda" element={<AggiungiAzienda />} />
                    <Route element={<NotFoundPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default NavbarTen

