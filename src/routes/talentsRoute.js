import { Route, Routes } from "react-router";
import PageTalents from "../pages/talents";

export function CategoriesRoute() {
  return (
    <Routes>
      <Route path="/" element={<PageTalents />} />
    </Routes>
  );
}
