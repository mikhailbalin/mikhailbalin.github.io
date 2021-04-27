import React, { useEffect, useState } from "react";
import { Button as BaseButton, SHAPE, SIZE } from "baseui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { useWindowScroll } from "react-use";
import {
  CircleInner,
  CircleOuter,
  Loader,
  ProgressBlock,
} from "./ButtonNav.styles";

export interface ButtonNavProps {
  size?: SIZE[keyof Pick<SIZE, "default" | "mini">];
}

export const ButtonNav = ({ size }: ButtonNavProps) => {
  const { y } = useWindowScroll();
  const [percentSrcolled, setPercentSrcolled] = useState<string>();

  useEffect(() => {
    const scrollTop =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setPercentSrcolled(((y / scrollTop) * 100).toFixed());
  });

  return (
    <BaseButton
      shape={SHAPE.circle}
      size={size || SIZE.default}
      overrides={{
        BaseButton: {
          style: {
            position: "fixed",
            backgroundColor: "transparent",
            width: size === SIZE.mini ? "60px" : "80px",
            height: size === SIZE.mini ? "60px" : "80px",

            ":hover": {
              backgroundColor: "transparent",
            },

            ":active": {
              backgroundColor: "transparent",
            },
          },
        },
      }}
    >
      <CircleOuter>
        <ProgressBlock $right={0} $top={0}>
          <Loader $origin="bottom left" />
        </ProgressBlock>

        <ProgressBlock $right={0} $bottom={0}>
          <Loader $origin="top left" />
        </ProgressBlock>

        <ProgressBlock $left={0} $bottom={0}>
          <Loader $origin="top right" />
        </ProgressBlock>

        <ProgressBlock $left={0} $top={0}>
          <Loader $origin="bottom right" />
        </ProgressBlock>

        <CircleInner>
          <FontAwesomeIcon icon={faReply} size="lg" color="#000" />
          <div>{percentSrcolled}</div>
        </CircleInner>
      </CircleOuter>
    </BaseButton>
  );
};
