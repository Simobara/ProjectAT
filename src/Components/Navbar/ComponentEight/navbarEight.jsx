
import React from 'react';
//<-----BOOTSTRAP IMPORTS------->//
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



// import "./navbar.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from "../../../Assets/Images/main.png";

import Home from '../../Home/Home';
import NuovoAnnuncio from '../../NuovoAnnuncio/nuovoAnnuncio';
import AggiungiAzienda from '../../AggiungiAzienda/aggiungiAzienda';
import NotFoundPage from '../../NotFoundPage/notFoundPage';

const NavbarEight = () => {


    // const [click, setClick] = useState(false);

    // const handleClick = () => setClick(!click);
    // const Close = () => setClick(false);

    return (
        <>
            <Router>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#"><img src={logo} alt="CompaLogoDitta" className="navbar-logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                <NavDropdown title="Link" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#" disabled>
                                    Link
                                </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
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
    )
}

export default NavbarEight;
