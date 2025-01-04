import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
