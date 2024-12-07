import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import MyAlert from "../../../components/Alert";
import { postData } from "../../../utils/fetch";
import { userLogin } from "../../../redux/auth/action";
import MyForm from "./form";

function PageSignin() {
  const dispatch = useDispatch();
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
      const res = await postData(`/cms/auth/sigin`, form);
      dispatch(userLogin(res.data.data.token, res.data.data.role));
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
