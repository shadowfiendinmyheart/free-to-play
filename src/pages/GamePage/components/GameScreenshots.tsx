import React from "react";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import {Carousel, Image, Skeleton} from "antd";
import WithTitle from "./WithTitle";
import {GameProps} from "./utils";
import {Screenshot} from "../../../models/game.model";

const title = "Screenshots";

interface GameScreenshotsProps extends GameProps<"screenshots"> {}

const GameScreenshots: React.FC<GameScreenshotsProps> = ({
  screenshots,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <WithTitle title={title}>
        <Skeleton.Image
          active
          style={{width: "100%", height: "55vw", maxHeight: "500px"}}
        />
      </WithTitle>
    );
  }

  return (
    <WithTitle title={title}>
      {screenshots?.length ? (
        <Carousel
          arrows
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
        >
          {screenshots?.map((screenshot: Screenshot) => (
            <Image key={screenshot.id} src={screenshot.image} />
          ))}
        </Carousel>
      ) : (
        <span>Screenshots are empty...</span>
      )}
    </WithTitle>
  );
};

export default GameScreenshots;
