import React from "react";
import {Link} from "react-router-dom";
import {List, Typography} from "antd";
import FiltersPanel from "../../components/FiltersPanel";
import GameItem from "../../components/GameItem";
import {getGamePageRoutePath} from "../../constants/routes";
import {useGetGamesQuery} from "../../services/gameService";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {listSlice} from "../../store/reducers/ListSlice";
import ErrorFallback, {QueryError} from "../../components/ErrorFallback";

import styles from "./styles.module.scss";

const {Title} = Typography;

const MainPage: React.FC = () => {
  const {platform, tags, sortBy} = useAppSelector(
    (state) => state.filterReducer,
  );
  const {currentPage} = useAppSelector((state) => state.listReducer);
  const dispatch = useAppDispatch();
  const {changeCurrentPage} = listSlice.actions;
  const {
    data: games,
    isError,
    error,
    isFetching,
    isLoading,
  } = useGetGamesQuery(
    {
      platform: platform,
      tags: tags,
      sortBy: sortBy,
    },
    {refetchOnMountOrArgChange: true},
  );

  const handleChangeCurrentPageClick = (page: number) => {
    dispatch(changeCurrentPage(page));
  };

  return (
    <>
      <header>
        <Title>Free-to-play games</Title>
      </header>
      <div className={styles.content}>
        <List
          dataSource={games}
          renderItem={(item) => {
            return (
              <Link to={getGamePageRoutePath(item.id)}>
                <div className={styles.gameItemWrapper}>
                  <GameItem isLoading={isFetching} {...item} />
                </div>
              </Link>
            );
          }}
          pagination={
            !isError && {
              defaultPageSize: 5,
              current: currentPage,
              onChange: handleChangeCurrentPageClick,
              align: "center",
            }
          }
          className={styles.list}
        >
          {isError && <ErrorFallback expandError={error as QueryError} />}
        </List>
        <FiltersPanel />
      </div>
    </>
  );
};

export default MainPage;
