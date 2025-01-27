import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import MyBreadCrumb from "../../components/Breadcrumb";
import MyButton from "../../components/Button";
import { accessCategories } from "../../const";
import { fetchCategories } from "../../redux/categories/actions";
import TableWithAction from "../../components/TableWithAction";
import { ToastContainer, toast } from "react-toastify";
import { clearNotif, setNotif } from "../../redux/notif/actions";
import Swal from "sweetalert2";
import { deleteData } from "../../utils/fetch";

export default function PageCategories() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notif = useSelector((state) => state.notif);
  const categories = useSelector((state) => state.categories);

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
    Object.keys(accessCategories).forEach(function (key, index) {
      if (accessCategories[key].indexOf(role) >= 0) {
        access[key] = true;
      }
    });
    setAccess(access);
  };

  const handleDelete = (id) => {
    try {
      Swal.fire({
        title: "Apa kamu yakin?",
        text: "Anda tidak akan dapat mengembalikan ini!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Iya, Hapus",
        cancelButtonText: "Batal",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await deleteData(`/cms/categories/${id}`);
          console.log("cek res", res);
          dispatch(
            setNotif(
              true,
              "success",
              `berhasil hapus kategori ${res?.data?.name}`
            )
          );
          dispatch(fetchCategories());
        }
      });
    } catch (error) {
      console.log("cek error", error);
    }
  };

  useEffect(() => {
    checkAccess();
  }, []);

  useEffect(() => {
    if (notif.status) {
      toast(notif.message, {
        type: notif.typeNotif,
        onClose: () => {
          // Callback ketika toast selesai
          dispatch(clearNotif()); // Reset status menjadi false
        },
      });
    }
  }, [notif.status]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Container className="mt-4">
      <MyBreadCrumb textSecound={"Categories"} />

      {access.tambah && (
        <MyButton
          className={"mb-3"}
          action={() => navigate("/categories/create")}
        >
          Tambah
        </MyButton>
      )}

      <TableWithAction
        status={categories.status}
        thead={["Nama", "Aksi"]}
        data={categories.data}
        tbody={["name"]}
        editUrl={access.edit ? `/categories/edit` : null}
        deleteAction={access.hapus ? (id) => handleDelete(id) : null}
        withoutPagination
      />

      {notif.status && <ToastContainer />}
    </Container>
  );
}
