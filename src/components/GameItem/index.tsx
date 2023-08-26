import React from "react";
import {Card, Typography, Skeleton} from "antd";
import {GamePreview} from "../../models/game.model";
import GameItemDescription from "./GameItemDescription";
import GameItemImage from "./GameItemImage";
import useIsMobile from "../../hooks/useIsMobile";

const {Title} = Typography;
const {Meta} = Card;

interface GameItemProps
  extends Pick<
    GamePreview,
    "title" | "releaseDate" | "publisher" | "genre" | "thumbnail"
  > {}

const GameItem: React.FC<GameItemProps> = (props) => {
  const {title} = props;
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = React.useState(false);

  if (isLoading) return <Skeleton active paragraph={{rows: 4}} />;

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
