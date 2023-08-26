import React from "react";
import {Outlet} from "react-router-dom";

import styles from "./styles.module.scss";

const RouterLayout: React.FC = () => (
  <div className={styles.layout}>
    <Outlet />
  </div>
);

export default RouterLayout;
