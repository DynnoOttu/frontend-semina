import { Route, Routes } from "react-router";
import PageTalents from "../pages/talents";
import PageTalentsCreate from "../pages/talents/create";
import TalentsEdit from "../pages/talents/edit";

export function TalentsRoute() {
  return (
    <Routes>
      <Route path="/" element={<PageTalents />} />
      <Route path="/create" element={<PageTalentsCreate />} />
      <Route path="/edit/:talentId" element={<TalentsEdit />} />
    </Routes>
  );
}
