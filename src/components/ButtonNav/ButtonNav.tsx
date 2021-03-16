import React, { useEffect, useState } from "react";
import { Button as BaseButton, SHAPE, SIZE } from "baseui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { CustomTheme, themedStyled } from "../../settings/theme";
import { useWindowScroll } from "react-use";

const CircleOuter = themedStyled("div", ({ $theme }) => ({
  position: "absolute",
  left: $theme.sizing.scale300,
  top: $theme.sizing.scale300,
  right: $theme.sizing.scale300,
  bottom: $theme.sizing.scale300,
  borderRadius: "50%",
  backgroundColor: "#ccc",
  overflow: "hidden",
}));

const CircleInner = themedStyled("div", ({ $theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  left: $theme.sizing.scale0,
  top: $theme.sizing.scale0,
  right: $theme.sizing.scale0,
  bottom: $theme.sizing.scale0,
  borderRadius: "50%",
  backgroundColor: $theme.colors.backgroundPrimary,
}));

const ProgressBlock = themedStyled<
  "div",
  {
    $left?: string | number;
    $right?: string | number;
    $top?: string | number;
    $bottom?: string | number;
  }
>("div", ({ $left, $right, $top, $bottom }) => ({
  position: "absolute",
  width: "50%",
  height: "50%",
  left: $left,
  right: $right,
  top: $top,
  bottom: $bottom,
  overflow: "hidden",
}));

const Loader = themedStyled<
  "div",
  {
    $origin: string;
  }
>("div", ({ $origin }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  transform: "rotateZ(-90deg)",
  transformOrigin: $origin,
  backgroundColor: "#000",
}));

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
          style: ({ $theme }: { $theme: CustomTheme }) => ({
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
          }),
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
