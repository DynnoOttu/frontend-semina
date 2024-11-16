import axios from "axios";
import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router";
import MyAlert from "../../../components/Alert";
import { config } from "../../../configs";
import MyForm from "./form";

function PageSignin() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${config.api_host_dev}/cms/auth/sigin`,
        form
      );
      localStorage.setItem("token", res.data.data.token);
      setLoading(false);
      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      setAlert({
        status: true,
        message: error?.response?.data?.msg ?? "Internal Server Error",
        type: "danger",
      });
    }
  };

  if (token) return <Navigate to="/" replace={true} />;

  return (
    <Container md={12}>
      <div className="m-auto" style={{ width: "50%", marginTop: "20px" }}>
        {alert.status && <MyAlert message={alert.message} type={alert.type} />}
      </div>
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title className="text-center">Form Signin</Card.Title>
          <MyForm
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;
