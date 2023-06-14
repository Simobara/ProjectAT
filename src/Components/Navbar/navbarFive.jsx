import React from 'react';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './navbarFiveEl';
import logo from "../../Assets/Images/main.png";



import Home from '../Home/Home';
import NuovoAnnuncio from '../NuovoAnnuncio/nuovoAnnuncio';
import AggiungiAzienda from '../AggiungiAzienda/aggiungiAzienda';
import NotFoundPage from '../NotFoundPage/notFoundPage';





const NavbarFive = () => {
    return (
        <>
            <Router>
                <Navbar bg="primary">
                    <NavLink to='/'>
                        <img src={logo} alt='logo' />
                    </NavLink>
                    <Bars />
                    <NavMenu>
                        <NavLink to='/' activeclassname="active" activestyle="true">
                            Home
                        </NavLink>
                        <NavLink to='/nuovoAnnuncio' activeclassname="active" activestyle="true">
                            Nuovo Annuncio
                        </NavLink>
                        <NavLink to='/aggiungiAzienda' activeclassname="active" activestyle="true">
                            Aggiungi Azienda
                        </NavLink>
                        {/* Second Nav */}
                        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='#'>Sign up</NavBtnLink>
                    </NavBtn>
                </Navbar>
                <Routes>
                    <Route exact path="/" component={Home} />
                    <Route path="/nuovoAnnuncio" component={NuovoAnnuncio} />
                    <Route path="/aggiungiAzienda" component={AggiungiAzienda} />
                    <Route element={<NotFoundPage />} />
                </Routes>
            </Router>
        </>
    );
};

export default NavbarFive;