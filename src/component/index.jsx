import React, { useState } from "react";
import { faShoppingCart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardImg, Row, Col, Container, Navbar, NavbarBrand, NavLink, Form, FormControl, 
        Badge, Nav, NavItem, Button, Modal, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addToCart } from "../lib/actions";
import { useDispatch, useSelector } from "react-redux/es/exports";

export const NavBar = ({ setIsFiltered, filterResults })=> {
    const len = useSelector(state => state.items);
    return(
        <Navbar expand='lg' className='mb-5 bg-orange'>
            <Container fluid>
                <NavbarBrand >
                    <Link to='/'>
                        <FontAwesomeIcon icon={faShoppingCart} /> Mes cours en ligne
                    </Link>
                </NavbarBrand>
                <Form className="d-flex">
                    <FormControl type="search" placeholder="recherche" onChange={
                        (e)=> {
                            if (e.target.value)
                                setIsFiltered(true);
                            else
                                setIsFiltered(false);
                            filterResults(e.target.value);
                        }
                    }/>
                    <Link to='/cart'>
                        <FontAwesomeIcon icon={faShoppingBag} className='fa-2x ms-2' />
                    </Link>
                    <h6>
                        <Badge bg='success' className="rounded-pill">{len.length?len.length:''}</Badge>
                    </h6>
                </Form>
            </Container>
        </Navbar>
    )
}

export const SideMenu = ( {loadCategory, category} ) => {
    const Links = ["Fruits", "Légumes", "Produits Frais", "Epicerie", "Boissons"];
    return(
        <Nav as="ul" className="flex-column">
            { Links.map((link, index)=> (
                <NavItem as="li" key={index}>
                    <NavLink className={category===index && "active"} onClick={()=>loadCategory(index) }>
                        {link}
                    </NavLink>
                </NavItem>
            )) }
        </Nav>
    )
}

export const List = ({ data, ordered, setOrdered })=> (
    <Row>
        {data.map(item => <KitChenSink key={item.ref} item={item}/>)}
    </Row>
)

export const KitChenSink = ({ item })=> {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const add = (item, qty)=> {
        dispatch(addToCart(item, qty));
    }

    return(
        <>
            <Col md={6} xl={4}>
                <Card className='mb-3' style={{ maxWidth:'18rem' }}>
                    <CardImg height={170} src={`assets/${item.category}/${item.image}`} />
                    <Card.Body>
                        <Row>
                            <Col sm={6}>
                                <Card.Title>
                                    { item.name }
                                </Card.Title>
                            </Col>
                            <Col sm={6}>
                                <Card.Text>
                                    € { item.price }/{ item.unit }
                                </Card.Text>
                                <Button variant='warning' onClick={handleShow}>Voir produit</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter au panier</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs={3}>
                            <Image src={`assets/${item.category}/${item.image}`} height={50}/>
                        </Col>
                        <Col>
                            {item.name}<br />
                            €{item.price}/{item.unit}
                        </Col>
                        <Col>
                            <Button variant="secondary" onClick={()=>setQty(qty>1?qty-1:1)}>-</Button>
                                <strong className="mx-2">{qty}</strong>
                            <Button variant="secondary" onClick={()=>setQty(qty+1)}>+</Button>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Annuler
                </Button>
                <Button variant="success" onClick={()=>{
                        handleClose()
                        add(item, qty)
                    }}>
                    Ajouter
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}