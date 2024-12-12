import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavLink from "../NavAccess";
import { useNavigate } from "react-router";

export default function MyNavbar() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchRole = () => {
      let { role } = localStorage.getItem("auth")
        ? JSON.parse(localStorage.getItem("auth"))
        : {};

      setRole(role);
    };

    fetchRole();
  }, []);

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
