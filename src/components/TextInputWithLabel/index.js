import React from "react";
import { Form } from "react-bootstrap";
import TextInput from "../TextInput";

function TextInputWithLabel({
  type,
  value,
  name,
  placeholder,
  onChange,
  label,
}) {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <TextInput
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Form.Group>
  );
}

export default TextInputWithLabel;
