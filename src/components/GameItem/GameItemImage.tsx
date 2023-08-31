import React from "react";
import { GamePreview } from "../../models/game.model";

import styles from "./styles.module.scss";

interface GameItemImageProps extends Pick<GamePreview, "title" | "thumbnail" | "genre"> {}

const GameItemImage: React.FC<GameItemImageProps> = ({ title, thumbnail }) => {
  return (
    <img alt={`${title} thumbnail`} className={styles.gameThumbnail} src={thumbnail} />
  );
};

export default GameItemImage;
