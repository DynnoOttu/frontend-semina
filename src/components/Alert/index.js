import React from "react";
import { Alert } from "react-bootstrap";

function MyAlert({ message, type }) {
  return <Alert variant={type}>{message}</Alert>;
}

export default MyAlert;
