import React from "react";
import { Container, Table } from "react-bootstrap";
import { Navigate } from "react-router";
import MyBreadCrumb from "../../components/Breadcrumb";
import MyButton from "../../components/Button";
import MyNavbar from "../../components/Navbar";

function Dashboard() {
  return (
    <>
      <MyNavbar />
      <Container>
        <div className="mt-4">
          <MyBreadCrumb />
          <MyButton>Tambah</MyButton>
          <Table className="mt-3" striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}

export default Dashboard;
