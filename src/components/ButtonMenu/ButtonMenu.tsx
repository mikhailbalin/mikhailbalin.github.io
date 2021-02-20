import React, { useState } from "react";
import { Button, KIND, SHAPE } from "baseui/button";
import { Theme } from "baseui/theme";
import { useSpring, animated } from "react-spring";
import { themedStyled } from "../../settings/theme";
import { useHover } from "../../hooks/useHover";

const Line = themedStyled(animated.div, ({ $theme }) => ({
  position: "relative",
  width: "100%",
  height: $theme.sizing.scale0,
  backgroundColor: $theme.colors.black,
  transformStyle: "preserve-3d",
}));

const Icon = themedStyled("div", ({ $theme }) => ({
  position: "relative",
  flexDirection: "column",
  display: "flex",
  justifyContent: "space-between",
  width: $theme.sizing.scale900,
  height: $theme.sizing.scale900,
  padding: $theme.sizing.scale100,
}));

const Circle = themedStyled(animated.div, ({ $theme }) => ({
  position: "absolute",
  left: $theme.sizing.scale100,
  top: $theme.sizing.scale100,
  right: $theme.sizing.scale100,
  bottom: $theme.sizing.scale100,
  border: `solid 2px #d9dbd0`,
  borderRadius: "50%",
}));

export const ButtonMenu = () => {
  const [active, setActive] = useState(false);
  const [hoverRef, hovered] = useHover<HTMLButtonElement>();

  const topStyles = useSpring({
    transform: active ? "rotateZ(-45deg)" : "rotateZ(0deg)",
    top: active ? "calc(50% - 1px)" : "calc(25% - 1px)",
  });

  const middleStyles = useSpring({
    opacity: active ? 0 : 1,
    transform: active ? "scaleX(0)" : "scaleX(1)",
  });

  const bottomStyles = useSpring({
    transform: active ? "rotateZ(45deg)" : "rotateZ(0deg)",
    bottom: active ? "calc(50% - 1px)" : "calc(25% - 1px)",
  });

  const circleStyles = useSpring({
    transform: hovered ? "scale(1)" : "scale(0.7)",
    opacity: hovered ? 1 : 0,
  });

  return (
    <Button
      onClick={() => setActive(!active)}
      kind={KIND.minimal}
      shape={SHAPE.circle}
      overrides={{
        BaseButton: {
          style: ({ $theme }: { $theme: Theme }) => ({
            position: "relative",
            width: "60px",
            height: "60px",
            backgroundColor: $theme.colors.white,
            ":hover": {
              backgroundColor: "trasparent",
            },
            ":active": {
              backgroundColor: "trasparent",
            },
          }),
        },
      }}
      ref={hoverRef}
    >
      <Icon>
        <Line style={topStyles} />
        <Line style={middleStyles} />
        <Line style={bottomStyles} />
      </Icon>

      <Circle style={circleStyles} />
    </Button>
  );
};
