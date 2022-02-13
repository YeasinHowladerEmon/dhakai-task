import React from "react";
import { Container, Navbar, Form, Nav, Button } from "react-bootstrap";
import "../AllStyle/Nav.css";
import search from "../../image/Search.png";
import message from "../../image/Group 5882.png";
import notifaction from "../../image/Group 5883.png";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div>
      <Navbar variant="light" className="nav-bg-color" expand="lg">
        <Container fluid>
          <div className="btn-ex-ac">
            <Button className="btn btn-primary">
              <strong>Explore</strong>
            </Button>
            <span>Activity</span>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto my-2 my-lg-0" navbarScroll>
              <Form className="input-container">
                <input type="text" />
                <img src={search} alt="" />
                <label>Search by name, group, type and others</label>
              </Form>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="#action3" className="">
                <img src={message} alt="" />
              </Nav.Link>
              <Nav.Link href="#action1">
                <img src={notifaction} alt="" />
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard" >
                <span style={{color: "#fff", position: "relative", top: "8px"}}>Dashboard</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navber;
