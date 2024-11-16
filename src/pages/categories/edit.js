import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import MyBreadCrumb from "../../components/Breadcrumb";
import CategoryForm from "./form";
import MyAlert from "../../components/Alert";

function CategoryEdit() {
  const navigate = useNavigate();
  const { categoryId } = useParams();
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

  const fetchOneCategories = async () => {};

  useEffect(() => {
    fetchOneCategories();
  }, []);

  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      navigate("/categories");
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
    <Container>
      <MyBreadCrumb
        textSecound={"Categories"}
        urlSecount={"Categories"}
        textThrid={"Create"}
      />

      {alert.status && <MyAlert message={alert.message} type={alert.type} />}
      <CategoryForm
        edit
        form={form}
        loading={loading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default CategoryEdit;
