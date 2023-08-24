import React from "react";
import {Outlet} from "react-router-dom";

const LayoutRouter: React.FC = () => (
  <div>
    <Outlet />
  </div>
);

export default LayoutRouter;
