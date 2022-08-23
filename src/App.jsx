import React, { Fragment, useState } from "react";
import { NavBar, SideMenu, List } from "./component";
import { list } from "./component/data";
import { Row, Container, Col } from 'react-bootstrap';

const App = () => {
  const [category, setCategory] = useState(0);
  const loadCategory= (index)=> {
    setCategory(index);
  }
  return (
    <Fragment>
        <NavBar />
        <Container>
          <Row>
            <Col sm={2}>
              <SideMenu loadCategory={loadCategory} category={category}/>
            </Col>
            <Col sm={10}>
              <List data={list[category]}/>
            </Col>
          </Row>
        </Container>
    </Fragment>
  );
}

export default App;
