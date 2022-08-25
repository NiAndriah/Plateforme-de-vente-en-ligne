import React, { useState } from "react";
import { faShoppingCart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardImg, Row, Col, Container, Navbar, NavbarBrand, NavLink, Form, FormControl, 
        Badge, Nav, NavItem, Button, Modal, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavBar = ({ setIsFiltered, setResult, ordered })=> {
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
                            setResult(e.target.value);
                        }
                    }/>
                    <Link to='/cart'>
                        <FontAwesomeIcon icon={faShoppingBag} className='fa-2x ms-2' />
                    </Link>
                    <h6>
                        <Badge bg='success' className="rounded-pill">{ordered}</Badge>
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
        {data.map(item => <KitChenSink ordered={ordered} setOrdered={setOrdered} key={item.ref} item={item}/>)}
    </Row>
)

export const KitChenSink = ({ item, ordered, setOrdered })=> {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [qty, setQty] = useState(1);

    return(
        <>
            <Col xs={6} sm={{ span:12, offset:3 }} md={{ span:6, offset:0 }} lg={4}>
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
                                    €{ item.price }/{ item.unit }
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
                            <Button variant="danger" onClick={()=>setQty(qty>1?qty-1:1)}>-</Button>
                                <strong className="mx-2">{qty}</strong>
                            <Button variant="danger" onClick={()=>setQty(qty+1)}>+</Button>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Annuler
                </Button>
                <Button variant="success" onClick={()=>{
                    setOrdered(ordered+1)
                    handleClose()
                    }}>
                    Ajouter
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}