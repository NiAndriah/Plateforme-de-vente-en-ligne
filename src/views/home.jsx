import React from "react";
import { SideMenu, List } from "../component";
import { Row, Container, Col } from 'react-bootstrap';

export const Home = ({ loadCategory, category, ordered, setOrdered, data }) => (
    <Container>
        <Row>
        <Col sm={2}>
            <SideMenu loadCategory={loadCategory} category={category}/>
        </Col>
        <Col sm={10}>
            <List ordered={ordered} setOrdered={setOrdered} data={data}/>
        </Col>
        </Row>
    </Container>
)