import React from "react";
import {Link, useParams} from "react-router-dom";
import {Button} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import GameMainInfo from "./components/GameMainInfo";
import GameTitle from "./components/GameTitle";
import GameMinimumSystemRequirements from "./components/GameMinimumSystemRequirements";
import GameScreenshots from "./components/GameScreenshots";
import {ROUTES} from "../../constants/routes";

import styles from "./styles.module.scss";

const GamePage = () => {
  const {id} = useParams();

  return (
    <div className={styles.gamePage}>
      <Link to={ROUTES.MAIN_PAGE} className={styles.backButtonWrapper}>
        <Button type="link" icon={<ArrowLeftOutlined />}>
          Back
        </Button>
      </Link>
      <GameTitle />
      <GameMainInfo />
      <GameMinimumSystemRequirements />
      <GameScreenshots />
    </div>
  );
};

export default GamePage;
