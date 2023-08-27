import React, {ReactNode} from "react";
import {Descriptions, Skeleton, Typography} from "antd";
import useIsMobile from "../../../hooks/useIsMobile";
import {gameMock} from "./../mockData";
import WithTitle from "./WithTitle";

const title = "Minimum System Requirements";

const GameMinimumSystemRequirements = () => {
  const isMobile = useIsMobile();
  const {minimumSystemRequirements} = gameMock;
  const isLoading = false;

  if (isLoading) {
    return (
      <WithTitle title={title}>
        <Skeleton
          active
          title={false}
          paragraph={{rows: 10}}
          style={{width: isMobile ? "80%" : "50%"}}
        />
      </WithTitle>
    );
  }

  // TODO
  if (!minimumSystemRequirements) return <></>;

  return (
    <WithTitle title={title}>
      <Descriptions
        layout="vertical"
        items={[
          {label: "OS", children: minimumSystemRequirements.os},
          {
            label: "Processor",
            children: minimumSystemRequirements.processor,
          },
          {label: "Memory", children: minimumSystemRequirements.memory},
          {
            label: "Graphics",
            children: minimumSystemRequirements.graphics,
          },
          {label: "Storage", children: minimumSystemRequirements.storage},
        ]}
        size={"small"}
        column={isMobile ? 1 : 3}
      />
    </WithTitle>
  );
};

export default GameMinimumSystemRequirements;
