import React from "react";
import { Descriptions, Skeleton } from "antd";
import useIsMobile from "../../../hooks/useIsMobile";
import WithTitle from "./WithTitle";
import { GameProps } from "./utils";

const title = "Minimum System Requirements";

interface GameMinimumSystemRequirementsProps
  extends GameProps<"minimumSystemRequirements"> {}

const GameMinimumSystemRequirements: React.FC<GameMinimumSystemRequirementsProps> = ({
  minimumSystemRequirements,
  isLoading,
}) => {
  const isMobile = useIsMobile();

  if (isLoading) {
    return (
      <WithTitle title={title}>
        <Skeleton
          active
          title={false}
          paragraph={{ rows: 10 }}
          style={{ width: isMobile ? "80%" : "50%" }}
        />
      </WithTitle>
    );
  }

  // TODO
  if (!minimumSystemRequirements) {
    return (
      <WithTitle title={title}>
        <span>You can use microwave to play this game</span>
      </WithTitle>
    );
  }

  return (
    <WithTitle title={title}>
      <Descriptions
        layout="vertical"
        items={[
          { label: "OS", children: minimumSystemRequirements.os },
          {
            label: "Processor",
            children: minimumSystemRequirements.processor,
          },
          { label: "Memory", children: minimumSystemRequirements.memory },
          {
            label: "Graphics",
            children: minimumSystemRequirements.graphics,
          },
          { label: "Storage", children: minimumSystemRequirements.storage },
        ]}
        size={"small"}
        column={isMobile ? 1 : 3}
      />
    </WithTitle>
  );
};

export default GameMinimumSystemRequirements;
