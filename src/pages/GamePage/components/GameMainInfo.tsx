import React from "react";
import {Descriptions, Skeleton} from "antd";
import {getRuDate} from "../../../utils/date";
import {gameMock} from "../mockData";
import useIsMobile from "../../../hooks/useIsMobile";

import styles from "./styles.module.scss";

const GameMainInfo = () => {
  const {releaseDate, publisher, developer, genre, thumbnail} = gameMock;
  const isMobile = useIsMobile();
  const isLoading = false;

  if (isLoading) {
    return (
      <div className={styles.mainInfo}>
        <Skeleton
          active
          title={false}
          paragraph={{rows: 4}}
          style={{width: isMobile ? "100%" : "300px"}}
        />
        <Skeleton.Image
          active
          style={
            isMobile
              ? {width: "100%", height: "45vw"}
              : {width: "300px", height: "170px"}
          }
        />
      </div>
    );
  }

  return (
    <div className={styles.mainInfo}>
      <Descriptions
        items={[
          {label: "Release date", children: getRuDate(releaseDate)},
          {label: "Publisher", children: publisher},
          {label: "Developer", children: developer},
          {label: "Genre", children: genre},
        ]}
        size={"small"}
        column={1}
      />
      <img
        alt={"game's thumbnail"}
        src={thumbnail}
        className={styles.thumbnail}
      />
    </div>
  );
};

export default GameMainInfo;
