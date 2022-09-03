import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { userProfilContext } from "../../lib/userProfilContext";
import { Link } from "react-router-dom";

export const Checkout = ()=> {
    const [isValid, setIsValid] = useState(false);
    const value = useContext(userProfilContext);
    const {
        firstName,
        lastName,
        email,
        address,
        zipCode,
        city,
        setUserProfilContext
    } = value
    const validate = ()=> {
        let errors = [];
        let inputs = document.querySelectorAll('.form-control');
        // remove nodeList (input search)
        inputs =  [].slice.call(inputs, 1); 
        inputs.forEach(input => {
            !input.value ? errors.push(input) : errors.length && errors.pop();
        })
        setIsValid(!errors.length);
    }
    useEffect(()=> validate());
    return (
        <Container className="p-5">
            <Col md={8} className='offset-md-2'>
                <Row>
                    <Col md={6}>
                        <Form.Control size="md" type="text" placeholder="Nom" className="mb-3"
                        name='firstName' defaultValue={firstName}
                        onChange={e => setUserProfilContext({[e.target.name]: e.target.value})}></Form.Control>
                    </Col>
                    <Col md={6}>
                        <Form.Control size="md" type="text" placeholder="Pre nom" className="mb-3"
                        name='lastName' defaultValue={lastName}
                        onChange={e => setUserProfilContext({[e.target.name]: e.target.value})}></Form.Control>
                    </Col>
                </Row>
                <Form.Control size="md" type="email" placeholder="Adresse e-mail" className="mb-0"
                name='email' defaultValue={email}
                onChange={e => setUserProfilContext({[e.target.name]: e.target.value})}></Form.Control>
                <Form.Text htmlFor="email">
                    Ne partagera jamais votre e-mail avec quelqu'un d'autre
                </Form.Text>
                <Form.Control size="md" type="text" placeholder="Adresse" className="my-3"
                name='address' defaultValue={address}
                onChange={e => setUserProfilContext({[e.target.name]: e.target.value})}></Form.Control>
                <Row>
                    <Col md={6}>
                        <Form.Control size="md" type="text" placeholder="Code potale" className="mb-3"
                        name='zipCode' defaultValue={zipCode}
                        onChange={e => setUserProfilContext({[e.target.name]: e.target.value})}></Form.Control>
                    </Col>
                    <Col md={6}>
                        <Form.Control size="md" type="text" placeholder="Code" className="mb-5"
                        name='city' defaultValue={city}
                        onChange={e => setUserProfilContext({[e.target.name]: e.target.value})}></Form.Control>
                    </Col>
                </Row>
                <Link to='/confirm'>
                    <Button variant="warning" size='lg' style={{ backgroundColor: '#FFAA00', color: 'white', width: '100%' }} 
                    className={`${!isValid && 'disabled'}`}>Confirmer</Button>
                </Link>
            </Col>
        </Container>
    )
}