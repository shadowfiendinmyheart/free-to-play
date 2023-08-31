import React from "react";
import { Route, Routes } from "react-router-dom";
import RouterLayout from "../RouterLayout";
import MainPage from "../../pages/MainPage";
import GamePage from "../../pages/GamePage";
import NotFoundPage from "../../pages/NotFoundPage";
import ScrollToTop from "./ScrollToTop";
import { getRoutePath } from "../../constants/routes";

const Router: React.FC = () => (
  <ScrollToTop>
    <Routes>
      <Route path={getRoutePath.mainPage()} element={<RouterLayout />}>
        <Route index element={<MainPage />} />
        <Route path={getRoutePath.gamePage()} element={<GamePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </ScrollToTop>
);

export default Router;
