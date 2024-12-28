import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import MyBreadCrumb from "../../components/Breadcrumb";
import MyAlert from "../../components/Alert";
import CategoryForm from "./form";
import { config } from "../../configs";
import axios from "axios";
import MyNavbar from "../../components/Navbar";

function CategoryCreate() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      await axios.post(`${config.api_host_dev}/cms/categories`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/categories");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setAlert({
        ...alert,
        status: true,
        message: error?.response?.data?.msg ?? "Internal Server Error",
        type: "danger",
      });
    }
  };

  return (
    <>
      <div className="mt-3">
        <Container>
          <MyBreadCrumb
            textSecound={"Categories"}
            urlSecount={"Categories"}
            textThrid={"Create"}
          />

          {alert.status && (
            <MyAlert message={alert.message} type={alert.type} />
          )}
          <CategoryForm
            loading={loading}
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Container>
      </div>
    </>
  );
}

export default CategoryCreate;
