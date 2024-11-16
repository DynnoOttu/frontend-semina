import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { useNavigate } from "react-router";

function MyBreadCrumb({ textSecound, textThrid, urlSecount }) {
  const navigate = useNavigate();
  return (
    <Breadcrumb>
      <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>

      {!textThrid && <Breadcrumb.Item active>{textSecound}</Breadcrumb.Item>}

      {textThrid && (
        <Breadcrumb.Item onClick={() => navigate(urlSecount)}>
          {textSecound}
        </Breadcrumb.Item>
      )}

      {textThrid && <Breadcrumb.Item active>{textThrid}</Breadcrumb.Item>}
    </Breadcrumb>
  );
}

export default MyBreadCrumb;
