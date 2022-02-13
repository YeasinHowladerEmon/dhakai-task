import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import arrowLogo from "../image/Path 616.png";


const ProductNav = () => {
  return (
    <div className=" divBtn">
      <Container fluid>
        <Row>
          <Col className="buttonDiv aa">
            <Button className="btn btn-primary a">All for you</Button>
          </Col>
          <Col className="buttonDiv bb">
            <Button className="btn btn-primary b">Recommended</Button>
          </Col>
          <Col className="buttonDiv cc">
            <Button className="btn btn-primary c">Top ManuFacturers</Button>
          </Col>
          <Col className="buttonDiv dd">
            <Button className="btn btn-primary d">Winter Special</Button>
          </Col>
          <Col className="buttonDiv ee">
            <Button className="btn btn-primary e">Demin Special</Button>
          </Col>
          <Col className="buttonDiv ff">
            <Button className="btn btn-primary   f">Women's wear</Button>
          </Col>
          <Col className="buttonDiv mrrs-5">
            <Button className="btn btn-primary mrr-5">Kid's Wear</Button>
          </Col>
          <Col className="buttonDiv mrrs-5">
            <Button className="btn btn-primary mrr-5">T-shirts</Button>
          </Col>
          <Col className="buttonDiv gg">
            <Button className="btn btn-primary g">Men's Fashion</Button>
            <img src={arrowLogo} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductNav;
