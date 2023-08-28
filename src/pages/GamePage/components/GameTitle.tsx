import React from "react";
import {Skeleton, Typography} from "antd";
import {GameProps} from "./utils";

const {Title} = Typography;

interface GameTitleProps extends GameProps<"title"> {}

const GameTitle: React.FC<GameTitleProps> = ({title, isLoading}) => {
  if (isLoading)
    return <Skeleton.Input active size="large" style={{width: "300px"}} />;

  return <Title>{title}</Title>;
};

export default GameTitle;
