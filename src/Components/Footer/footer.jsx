import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer fixed-bottom bg-light mt-auto">
            <Container>
                <p>Copyright &copy; {currentYear} - Tutti i diritti riservati.</p>
            </Container>
        </footer>
    );
}

export default Footer;
