import React from "react";
import { Form } from "react-bootstrap";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import MyButton from "../../../components/Button";

export default function MyForm({ form, handleChange, handleSubmit, loading }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <TextInputWithLabel
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={form.email}
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <TextInputWithLabel
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={form.password}
          placeholder="Enter email"
        />
      </Form.Group>
      <MyButton
        loading={loading}
        disabled={loading}
        variant="info"
        action={handleSubmit}
      >
        Daftar
      </MyButton>
    </Form>
  );
}
