import React from "react";
import { SideMenu, List } from "../component";
import { Row, Container, Col } from 'react-bootstrap';

export const Home = ({ loadCategory, category, data }) => (
    <Container>
        <Row>
        <Col sm={2}>
            <SideMenu loadCategory={loadCategory} category={category}/>
        </Col>
        <Col sm={10}>
            <List data={data}/>
        </Col>
        </Row>
    </Container>
)