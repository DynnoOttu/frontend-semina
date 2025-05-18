import { Container } from "react-bootstrap";
import MyBreadCrumb from "../../components/Breadcrumb";
import TalentsForm from "./form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import MyAlert from "../../components/Alert";
import { postData } from "../../utils/fetch";
import { setNotif } from "../../redux/notif/actions";

function PageTalentsCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    role: "",
    file: "",
    image: "",
  });

  console.log("FORM upload image", form);

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const uploadImage = async (file) => {
    let formData = new FormData();
    formData.append("image", file);
    const res = await postData("/cms/upload-image", formData, true);
    return res;
  };

  const handleChange = async (e) => {
    console.log("cek upload imgae", e);
    if (e.target.name === "image") {
      if (
        e?.target?.files[0]?.type === "image/jpg" ||
        e?.target?.files[0]?.type === "image/jpeg" ||
        e?.target?.files[0]?.type === "image/png"
      ) {
        const size = parseFloat(e.target.files[0].size / 3145728).toFixed(2);
        if (size > 2) {
          setAlert({
            ...alert,
            status: true,
            type: "danger",
            message: "Please select image size less than 3 MB",
          });
          setForm({
            ...form,
            file: "",
            [e.target.name]: "",
          });
        } else {
          const res = await uploadImage(e.target.files[0]);

          setForm({
            ...form,
            file: res.data.data._id,
            [e.target.name]: res.data.data.name,
          });
        }
      } else {
        setAlert({
          ...alert,
          status: true,
          type: "danger",
          message: "Type image harus png | jpg | jpeg",
        });
        setForm({
          ...form,
          file: "",
          [e.target.name]: "",
        });
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      const payload = {
        image: form.file,
        role: form.role,
        name: form.name,
      };

      const res = await postData("/cms/talents", payload);
      if (res.data.data) {
        dispatch(
          setNotif(
            true,
            "success",
            `berhasil tambah talents ${res.data.data.name}`
          )
        );
        navigate("/talents");
        setLoading(false);
      } else {
        setLoading(false);
        setAlert({
          ...alert,
          status: true,
          type: "danger",
          message: res.response.data.msg,
        });
      }
    } catch (error) {}
  };

  return (
    <Container>
      <MyBreadCrumb
        textSecound={"Categories"}
        urlSecount={"Categories"}
        textThrid={"Create"}
      />
      {alert.status && <MyAlert message={alert.message} type={alert.type} />}
      <TalentsForm
        loading={loading}
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default PageTalentsCreate;
