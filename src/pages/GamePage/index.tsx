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
import {useGetGameByIdQuery} from "../../services/gameService";

const GamePage = () => {
  const {id} = useParams();
  const {
    data: game,
    error = false,
    isLoading = false,
  } = useGetGameByIdQuery(Number(id) || 0, {skip: false});

  // TODO
  if (error) return <></>;

  const gameProps = {...game, isLoading};

  return (
    <div className={styles.gamePage}>
      <Link to={ROUTES.MAIN_PAGE} className={styles.backButtonWrapper}>
        <Button type="link" icon={<ArrowLeftOutlined />}>
          Back
        </Button>
      </Link>
      <GameTitle {...gameProps} />
      <GameMainInfo {...gameProps} />
      <GameMinimumSystemRequirements {...gameProps} />
      <GameScreenshots {...gameProps} />
    </div>
  );
};

export default GamePage;
