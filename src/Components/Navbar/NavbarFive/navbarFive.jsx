import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import logo from "../../../Assets/Images/main.png";
import './navbarFive.css'

import Home from '../../Home/Home';
import NuovoAnnuncio from '../../NuovoAnnuncio/nuovoAnnuncio';
import AggiungiAzienda from '../../AggiungiAzienda/aggiungiAzienda';
import NotFoundPage from '../../NotFoundPage/notFoundPage';



const NavbarFive = () => {



    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <Router>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <NavLink to="#" className="nav-logo">
                            <img src={logo} alt="CompaLogoDitta" className="navbar-logo" />
                        </NavLink>
                        <div>Polieco-Marketplace</div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className={click ? "nav-menu active" : "nav-menu"}>
                                    <li className="nav-item">
                                        <NavLink exact to="/" activeclassname="active" className="nav-links" onClick={click ? handleClick : null}> Home </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/nuovoAnnuncio" activeclassname="active" className="nav-links" onClick={click ? handleClick : null}>Nuovo Annuncio </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/aggiungiAzienda" activeclassname="active" className="nav-links" onClick={click ? handleClick : null}> Aggiungi Azienda</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <Nav>
                                <Nav.Link href="#deets">Another Link</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Another Link
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
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
    );
}
export default NavbarFive;  