import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Navbars() {
  return (
    <>
      <Navbar sticky="top" bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My Blog</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link style={{ color: "white" }} href="#home">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#posts">
              Posts
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#profile">
              Profile
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
