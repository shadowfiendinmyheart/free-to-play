import React from "react";
import {Route, Routes} from "react-router-dom";
import RouterLayout from "../RouterLayout";
import MainPage from "../../pages/MainPage";
import NotFoundPage from "../../pages/NotFoundPage";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<RouterLayout />}>
      <Route index element={<MainPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default Router;
