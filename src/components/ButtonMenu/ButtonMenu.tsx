import React, { useState } from "react";
import { Button, KIND, SHAPE as BASE_SHAPE } from "baseui/button";
import { Theme } from "baseui/theme";
import { StyleObject } from "styletron-react";
import { useSpring, animated } from "react-spring";
import { themedStyled } from "../../settings/theme";
import { useHover } from "../../hooks/useHover";

type SHAPE = BASE_SHAPE[keyof Pick<BASE_SHAPE, "circle" | "square">];

const Line = themedStyled(animated.div, ({ $theme }) => ({
  position: "relative",
  width: "100%",
  height: $theme.sizing.scale0,
  backgroundColor: $theme.colors.black,
  transformStyle: "preserve-3d",
}));

const Icon = themedStyled<"div", { $shape: SHAPE }>(
  "div",
  ({ $theme, $shape }) => {
    const size =
      $shape === "circle" ? $theme.sizing.scale900 : $theme.sizing.scale950;

    return {
      position: "relative",
      flexDirection: "column",
      display: "flex",
      justifyContent: "space-between",
      width: size,
      height: size,
      padding: $theme.sizing.scale100,
    };
  }
);

const Circle = themedStyled(animated.div, ({ $theme }) => ({
  position: "absolute",
  left: $theme.sizing.scale100,
  top: $theme.sizing.scale100,
  right: $theme.sizing.scale100,
  bottom: $theme.sizing.scale100,
  border: `solid 2px #d9dbd0`,
  borderRadius: "50%",
}));

const getButtonStyles = ({
  $theme,
  $shape,
}: {
  $theme: Theme;
  $shape: SHAPE;
}): StyleObject => {
  const size = $shape === "circle" ? "60px" : "80px";

  return {
    position: "relative",
    width: size,
    height: size,
    alignItems: "center",
    zIndex: 1,
    backgroundColor: $theme.colors.white,
    flexShrink: 0,
    ":hover": {
      backgroundColor: "trasparent",
    },
    ":active": {
      backgroundColor: "trasparent",
    },
  };
};

export interface ButtonMenuProps {
  shape: SHAPE;
  onClick?: (active: boolean) => void;
}

export const ButtonMenu = ({ shape = "circle", onClick }: ButtonMenuProps) => {
  const [active, setActive] = useState(false);
  const [hoverRef, hovered] = useHover<HTMLButtonElement>();

  const position = active ? "50%" : "25%";

  const topStyles = useSpring({
    transform: active
      ? "rotateZ(-45deg) translateY(-1px)"
      : "rotateZ(0deg) translateY(-1px)",
    top: position,
  });

  const middleStyles = useSpring({
    opacity: active ? 0 : 1,
    transform: active ? "scaleX(0)" : "scaleX(1)",
  });

  const bottomStyles = useSpring({
    transform: active
      ? "rotateZ(45deg) translateY(1px)"
      : "rotateZ(0deg) translateY(1px)",
    bottom: position,
  });

  const circleStyles = useSpring({
    transform: hovered ? "scale(1)" : "scale(0.7)",
    opacity: hovered ? 1 : 0,
  });

  return (
    <Button
      ref={hoverRef}
      kind={KIND.minimal}
      shape={shape}
      overrides={{
        BaseButton: {
          style: ({ $theme }: { $theme: Theme }) =>
            getButtonStyles({ $theme, $shape: shape }),
        },
      }}
      onClick={() => {
        setActive((prevState) => {
          const newState = !prevState;
          onClick && onClick(newState);
          return newState;
        });
      }}
    >
      <Icon $shape={shape}>
        <Line style={topStyles} />
        <Line style={middleStyles} />
        <Line style={bottomStyles} />
      </Icon>

      {shape === "square" && <Circle style={circleStyles} />}
    </Button>
  );
};
