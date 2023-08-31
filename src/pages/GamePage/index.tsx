import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import GameMainInfo from "./components/GameMainInfo";
import GameTitle from "./components/GameTitle";
import GameMinimumSystemRequirements from "./components/GameMinimumSystemRequirements";
import GameScreenshots from "./components/GameScreenshots";
import WithErrorFallback from "../../components/ErrorFallback/WithErrorFallback";
import { ROUTES } from "../../constants/routes";
import { useGetGameByIdQuery } from "../../services/gameService";
import { checkIsEarlierThanFiveMinutes } from "../../utils/date";
import { GameWithTimestampReceiving } from "../../models/game.model";
import { QueryError } from "../../components/ErrorFallback";

import styles from "./styles.module.scss";

const GamePage = () => {
  const { id } = useParams();

  const gameFromStorage: GameWithTimestampReceiving | undefined = JSON.parse(
    sessionStorage.getItem(`game_${id}`) || "null",
  );
  const isCached = Boolean(gameFromStorage);
  const isFresh = isCached
    ? checkIsEarlierThanFiveMinutes(gameFromStorage!.timestampReceiving)
    : false;

  const { data, isError, error, isFetching } = useGetGameByIdQuery(Number(id), {
    skip: isFresh,
  });

  const game = isFresh ? gameFromStorage : data;
  const gameProps = { ...game, isLoading: isFetching };

  return (
    <div className={styles.gamePage}>
      <Link to={ROUTES.MAIN_PAGE} className={styles.backButtonWrapper}>
        <Button type="link" icon={<ArrowLeftOutlined />}>
          Back
        </Button>
      </Link>
      <WithErrorFallback isError={isError} expandError={error as QueryError}>
        <GameTitle {...gameProps} />
        <GameMainInfo {...gameProps} />
        <GameMinimumSystemRequirements {...gameProps} />
        <GameScreenshots {...gameProps} />
      </WithErrorFallback>
    </div>
  );
};

export default GamePage;
