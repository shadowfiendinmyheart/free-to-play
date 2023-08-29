import React from "react";
import {Link} from "react-router-dom";
import {List, Typography} from "antd";
import FiltersPanel from "../../components/FiltersPanel";
import GameItem from "../../components/GameItem";
import {getGamePageRoutePath} from "../../constants/routes";
import {useGetGamesQuery} from "../../services/gameService";
import {Category, SortGameBy} from "../../models/game.model";

import styles from "./styles.module.scss";
import {useAppSelector} from "../../hooks/redux";

const {Title} = Typography;

const MainPage: React.FC = () => {
  const {platform} = useAppSelector((state) => state.filterReducer);
  const {
    data: games,
    error,
    isLoading,
  } = useGetGamesQuery({
    platform: platform,
    sortBy: SortGameBy.Popularity,
    tags: [Category.Anime],
  });

  // TODO
  if (error) return <></>;

  return (
    <>
      <Title>Free-to-play games</Title>
      <div className={styles.content}>
        <List
          dataSource={games}
          renderItem={(item) => {
            return (
              <Link to={getGamePageRoutePath(item.id)}>
                <div className={styles.gameItemWrapper}>
                  <GameItem isLoading={isLoading} {...item} />
                </div>
              </Link>
            );
          }}
          pagination={{defaultPageSize: 5, align: "center"}}
          className={styles.list}
        />
        <FiltersPanel />
      </div>
    </>
  );
};

export default MainPage;
