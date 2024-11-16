import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavLink from "../NavLink";
import { useNavigate } from "react-router";

export default function MyNavbar() {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">MyEvent</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink action={() => navigate("/")} children="Home" />
          <NavLink
            action={() => navigate("/categories")}
            children="Categories"
          />
          <NavLink action={() => navigate("/talents")} children="Talents" />
          <NavLink action={() => navigate("/event")} children="Event" />
          <NavLink
            action={() => navigate("/participants")}
            children="Participants"
          />
          <NavLink
            action={() => navigate("/transactions")}
            children="Transactions"
          />
        </Nav>
      </Container>
    </Navbar>
  );
}
