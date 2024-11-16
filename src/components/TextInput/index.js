import React from "react";
import { Form } from "react-bootstrap";

function TextInput({ type, value, name, placeholder, onChange }) {
  return (
    <Form.Control
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default TextInput;
