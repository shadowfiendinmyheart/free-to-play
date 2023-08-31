import React from "react";
import { Descriptions } from "antd";
import { GamePreview } from "../../../models/game.model";
import { getRuDate } from "../../../utils/date";

interface GameItemAboutProps
  extends Pick<GamePreview, "releaseDate" | "publisher" | "genre"> {}

const GameItemDescription: React.FC<GameItemAboutProps> = ({
  releaseDate,
  publisher,
  genre,
}) => {
  return (
    <Descriptions
      items={[
        { label: "Release date", children: getRuDate(releaseDate) },
        { label: "Publisher", children: publisher },
        { label: "Genre", children: genre },
      ]}
      size={"small"}
      column={1}
    />
  );
};

export default GameItemDescription;
