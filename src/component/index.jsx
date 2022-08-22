import React from "react";
import { faShoppingCart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Container, NavbarBrand, NavLink, Form, FormControl, Badge } from 'react-bootstrap';

export const NavBar = ()=> {
    return(
        <Navbar expand='lg' className='bg-orange'>
            <Container fluid>
                <NavbarBrand >
                    <NavLink>
                        <FontAwesomeIcon icon={faShoppingCart} /> Mes cours en ligne
                    </NavLink>
                </NavbarBrand>
                <Form className="d-flex">
                    <FormControl type="search" placeholder="recherche"/>
                    <NavLink>
                        <FontAwesomeIcon icon={faShoppingBag} className='fa-2x ms-2' />
                    </NavLink>
                    <h6>
                        <Badge bg='success' className="rounded-pill">1</Badge>
                    </h6>
                </Form>
            </Container>
        </Navbar>
    )
}