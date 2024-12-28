import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavLink from "../NavAccess";
import { useNavigate } from "react-router";
import {
  accessCategories,
  accessOrders,
  accessParticipant,
  accessPayments,
  accessTalents,
} from "../../const";

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

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">MyEvent</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink
            role={role}
            roles={accessCategories.lihat}
            action={() => navigate("/")}
          >
            Home
          </NavLink>
          <NavLink
            role={role}
            roles={accessCategories.lihat}
            action={() => navigate("/categories")}
          >
            Categories
          </NavLink>
          <NavLink
            role={role}
            roles={accessTalents.lihat}
            action={() => navigate("/talents")}
          >
            Talents
          </NavLink>
          <NavLink
            role={role}
            roles={accessPayments.lihat}
            action={() => navigate("/payments")}
          >
            Payment
          </NavLink>
          {/* <NavLink
            role={role}
            roles={organizers.lihat}
            action={() => navigate('/organizers')}
          >
            Oranizer
          </NavLink> */}
          {/* <NavLink
            role={role}
            roles={accessEvents.lihat}
            action={() => navigate("/events")}
          >
            Events
          </NavLink> */}
          <NavLink
            role={role}
            roles={accessParticipant.lihat}
            action={() => navigate("/participant")}
          >
            Participant
          </NavLink>
          <NavLink
            role={role}
            roles={accessOrders.lihat}
            action={() => navigate("/orders")}
          >
            Orders
          </NavLink>
        </Nav>
        <Nav className="d-flex justify-content-end">
          <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
