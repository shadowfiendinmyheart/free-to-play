import React from "react";
import {Skeleton, Typography} from "antd";
import {gameMock} from "./../mockData";

const {Title} = Typography;

const GameTitle = () => {
  const {title} = gameMock;
  const isLoading = false;

  if (isLoading)
    return <Skeleton.Input active size="large" style={{width: "300px"}} />;

  return <Title>{title}</Title>;
};

export default GameTitle;
