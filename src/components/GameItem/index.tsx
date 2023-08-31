import React from "react";
import { Card, Typography, Skeleton } from "antd";
import { GamePreview } from "../../models/game.model";
import GameItemDescription from "./components/GameItemDescription";
import GameItemImage from "./components/GameItemImage";
import useIsMobile from "../../hooks/useIsMobile";

const { Title } = Typography;
const { Meta } = Card;

interface GameItemProps
  extends Pick<
    GamePreview,
    "title" | "releaseDate" | "publisher" | "genre" | "thumbnail"
  > {
  isLoading: boolean;
}

const GameItem: React.FC<GameItemProps> = (props) => {
  const { title, isLoading } = props;
  const isMobile = useIsMobile();

  if (isLoading) return <Skeleton active paragraph={{ rows: 4 }} />;

  if (isMobile) {
    return (
      <Card hoverable cover={<GameItemImage {...props} />}>
        <Meta
          title={<Title level={3}>{title}</Title>}
          description={<GameItemDescription {...props} />}
        />
      </Card>
    );
  }

  return (
    <Card hoverable size="small">
      <Meta
        avatar={<GameItemImage {...props} />}
        title={<Title level={3}>{title}</Title>}
        description={<GameItemDescription {...props} />}
      />
    </Card>
  );
};

export default GameItem;
