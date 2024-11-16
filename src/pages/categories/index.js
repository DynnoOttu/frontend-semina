import React, { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router";
import MyBreadCrumb from "../../components/Breadcrumb";
import MyButton from "../../components/Button";
import MyNavbar from "../../components/Navbar";
import axios from "axios";
import { config } from "../../configs";

export default function PageCategories() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCategoriesApi = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${config.api_host_dev}/cms/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCategoriesApi();
  }, []);

  if (!token) {
    return <Navigate to="/signin" replace={true} />;
  }
  return (
    <>
      <MyNavbar />
      <Container>
        <div className="mt-4">
          <MyBreadCrumb textSecound="Categories" />
          <MyButton action={() => navigate("/categories/create")}>
            Tambah
          </MyButton>
          <Table className="mt-3" striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Name Organizer</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={data.length + 1} className="text-center">
                    <Spinner animation="grow" variant="info" />
                  </td>
                </tr>
              ) : (
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}
