import React from "react";
import { Route, Routes } from "react-router-dom";
import RouterLayout from "../RouterLayout";
import MainPage from "../../pages/MainPage";
import GamePage from "../../pages/GamePage";
import NotFoundPage from "../../pages/NotFoundPage";
import { ROUTES } from "../../constants/routes";
import ScrollToTop from "./ScrollToTop";

const Router: React.FC = () => (
  <ScrollToTop>
    <Routes>
      <Route path={ROUTES.MAIN_PAGE} element={<RouterLayout />}>
        <Route index element={<MainPage />} />
        <Route path={ROUTES.GAME_PAGE} element={<GamePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </ScrollToTop>
);

export default Router;
