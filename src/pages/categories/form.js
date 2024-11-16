import React from "react";
import { Form } from "react-bootstrap";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import MyButton from "../../components/Button";

function CategoryForm({ form, handleChange, handleSubmit, loading, edit }) {
  return (
    <Form>
      <TextInputWithLabel
        placeholder={"Masukan Nama Kategori"}
        label={"Nama Kategori"}
        name="name"
        value={form.name}
        type="text"
        onChange={handleChange}
      />
      <MyButton action={handleSubmit} variant="primary" loading={loading}>
        {edit ? "Ubah" : "Simpan"}
      </MyButton>
    </Form>
  );
}

export default CategoryForm;
