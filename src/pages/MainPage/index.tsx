import React from "react";
import {Link} from "react-router-dom";
import {List, Typography} from "antd";
import FiltersPanel from "../../components/FiltersPanel";
import GameItem from "../../components/GameItem";
import {mapGamePageViewToGamePreview} from "../../utils/mappers";
import {getGamePageRoutePath} from "../../constants/routes";
import {gameItemsMock} from "./mockData";

import styles from "./styles.module.scss";

const {Title} = Typography;

const MainPage: React.FC = () => {
  return (
    <>
      <Title>Free to GAME app</Title>
      <div className={styles.content}>
        <List
          dataSource={gameItemsMock}
          renderItem={(item) => {
            return (
              <Link to={getGamePageRoutePath(item.id)}>
                <div className={styles.gameItemWrapper}>
                  <GameItem {...mapGamePageViewToGamePreview(item)} />
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
