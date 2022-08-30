import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Checkout = ()=> {
    return (
        <Container className="p-5">
            <Col md={8} className='offset-md-2'>
                <Row>
                    <Col md={6}>
                        <Form.Control size="md" type="text" placeholder="Nom" className="mb-3"></Form.Control>
                    </Col>
                    <Col md={6}>
                        <Form.Control size="md" type="text" placeholder="Pre nom" className="mb-3"></Form.Control>
                    </Col>
                </Row>
                <Form.Control size="md" type="email" placeholder="Adresse e-mail" className="mb-0"></Form.Control>
                <Form.Text htmlFor="email">
                    Ne partagera jamais votre e-mail avec quelqu'un d'autre
                </Form.Text>
                <Form.Control size="md" type="text" placeholder="Adresse" className="my-3"></Form.Control>
                <Row>
                    <Col md={6}>
                        <Form.Control size="md" type="text" placeholder="Code potale" className="mb-3"></Form.Control>
                    </Col>
                    <Col md={6}>
                        <Form.Control size="md" type="text" placeholder="Code" className="mb-5"></Form.Control>
                    </Col>
                </Row>
                <Button variant="" size='md' style={{ backgroundColor: '#fab25d', color: 'white', width: '100%' }}>Confirmer</Button>
            </Col>
        </Container>
    )
}