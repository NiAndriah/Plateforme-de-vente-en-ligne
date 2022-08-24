import React from "react";
import { faShoppingCart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardImg, Row, Col, Container, Navbar, 
    NavbarBrand, NavLink, Form, FormControl, Badge, Nav, NavItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavBar = ({ setIsFiltered, setResult })=> {
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
                        <Badge bg='success' className="rounded-pill">1</Badge>
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

export const List = ({ data })=> (
    <Row>
        {data.map(item => <KitChenSink key={item.ref} item={item}/>)}
    </Row>
)

export const KitChenSink = ({ item })=> (
    <Col xs={6} sm={{ span:12, offset:3 }} md={{ span:6, offset:0 }} lg={4}>
        <Card className='mb-3' style={{ maxWidth:'18rem' }}>
            <CardImg height={150} src={`assets/${item.category}/${item.image}`} />
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
                        <Button variant='warning'>Voir produit</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </Col>
)