import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "antd";
import { getRoutePath } from "../../constants/routes";

import styles from "./styles.module.scss";

const { Title, Text } = Typography;

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Title>404</Title>
      <Text>¯\_(ツ)_/¯</Text>
      <Text>Page not found</Text>
      <Link to={getRoutePath.mainPage()}>
        <Button type="link">Go to main page</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
