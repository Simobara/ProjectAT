import React from 'react';

const NavbarSix =()=> {
    return (
        <>
            <nav id="navbar">
                <div className="nav-wrapper">
                    {/* <!-- Navbar Logo --> */}
                    <div className="logo">
                        {/* <!-- Logo Placeholder for Inlustration --> */}
                        <a href="#home"><i className="fas fa-chess-knight"></i> Logo</a>
                    </div>

                    {/* <!-- Navbar Links --> */}
                    <ul id="menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>


            {/* <!-- Menu Icon --> */}
            <div className="menuIcon">
                <span className="icon icon-bars"></span>
                <span className="icon icon-bars overlay"></span>
            </div>


            <div className="overlay-menu">
                <ul id="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </>
    )
}
export default NavbarSix
