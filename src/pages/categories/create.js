import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import MyAlert from "../../components/Alert";
import MyBreadCrumb from "../../components/Breadcrumb";
import { postData } from "../../utils/fetch";
import CategoryForm from "./form";
import { setNotif } from "../../redux/notif/actions";

function CategoryCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      const res = await postData(`/cms/categories`, form);
      if (res.data.data) {
        dispatch(
          setNotif(
            true,
            `success`,
            `Berhasil Menambahkann ${res.data.data.name}`
          )
        );
      }
      navigate("/categories");
      setLoading(false);
    } catch (error) {
      console.log("cek error", error);
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
