import { Navigate, Route, Routes } from "react-router";
import GuestOnlyRoute from "../components/GuestOnlyRoute";
import PageSignin from "../pages/auth/signin";
import MyNavbar from "../components/Navbar";
import GuardRoute from "../components/GuardRoute";
import { HomeRoute } from "./HomeRoute";
import { CategoriesRoute } from "./categoriesRoute";
import PageTalents from "../pages/talents";

export function AppRouters() {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <GuestOnlyRoute>
            <PageSignin />
          </GuestOnlyRoute>
        }
      />
      <Route
        path="/"
        element={
          <>
            <MyNavbar />
            <GuardRoute />
          </>
        }
      >
        <Route path="dashboard/*" element={<HomeRoute />} />
        <Route path="categories/*" element={<CategoriesRoute />} />
        <Route path="talents/*" element={<PageTalents />} />
        <Route path="" element={<Navigate to="/dashboard" replace={true} />} />
      </Route>
    </Routes>
  );
}
