import React from "react";
import { Container } from "react-bootstrap";
import MyBreadCrumb from "../../components/Breadcrumb";

function Dashboard() {
  return (
    <Container className="mt-4">
      <MyBreadCrumb />
      <h1>Dashboard</h1>
    </Container>
  );
}

export default Dashboard;
