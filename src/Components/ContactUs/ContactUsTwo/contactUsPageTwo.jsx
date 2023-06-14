import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUsPageTwo = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Logica per gestire l'invio del modulo di contatto
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <div className="contact-form-wrapper">
                        <h1 className="text-center">Contattaci</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName">
                                <Form.Control type="text" placeholder="Il tuo nome" className="input-field" />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Control type="email" placeholder="La tua email" className="input-field" />
                            </Form.Group>

                            <Form.Group controlId="formMessage">
                                <Form.Control as="textarea" rows={5} placeholder="Il tuo messaggio" className="input-field" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="submit-button">
                                Invia
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUsPageTwo;
