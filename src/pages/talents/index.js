import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MyBreadCrumb from "../../components/Breadcrumb";
import { accessTalents } from "../../const";
import MyButton from "../../components/Button";
import { useNavigate } from "react-router";
import { fetchTalents } from "../../redux/talents/action";
import { useDispatch, useSelector } from "react-redux";
import TableWithAction from "../../components/TableWithAction";

export default function PageTalents() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const talents = useSelector((state) => state.talents);

  const [access, setAccess] = useState({
    tambah: false,
    hapus: false,
    edit: false,
  });

  const checkAccess = () => {
    let { role } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};
    const access = { tambah: false, hapus: false, edit: false };

    Object.keys(accessTalents).forEach(function (key, index) {
      console.log("cek key", key);
      if (accessTalents[key].indexOf(role) >= 0) {
        access[key] = true;
      }
    });
    setAccess(access);
  };

  const handleDelete = (id) => {
    try {
    } catch (error) {}
  };

  useEffect(() => {
    checkAccess();
  }, []);

  useEffect(() => {
    dispatch(fetchTalents());
  }, []);

  return (
    <Container className="mt-4">
      <MyBreadCrumb textSecound={"Talents"} />

      {access.tambah && (
        <MyButton
          className={"mb-3"}
          variant="primary"
          action={() => navigate("/talents/create")}
        >
          Tambah
        </MyButton>
      )}

      <TableWithAction
        status={talents.status}
        thead={["Name", "Role", "Image", "Aksi"]}
        data={talents.data}
        tbody={["name", "role", "avatar"]}
        editUrl={access.edit && "/talents/edit"}
        deleteAction={access.hapus ? (id) => handleDelete(id) : null}
        withoutPagination
      />
    </Container>
  );
}
