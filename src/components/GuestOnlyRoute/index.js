import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export default function GuestOnlyRoute({ children }) {
  let { token } = useSelector((state) => state.auth);

  if (token) return <Navigate to="/" replace={true} />;

  return children || <Outlet />;
}
