import React from "react";
import { Button, KIND } from "baseui/button";
import { useSpring } from "react-spring";
import { useHover } from "../../hooks/useHover";
import { useGlobalState } from "../../hooks/useState";
import { ButtonMenuProps } from "./ButtonMenu.types";
import { Circle, getButtonStyles, Icon, Line } from "./ButtonMenu.styles";
import { CustomThemeProps } from "../../settings/theme";

export const ButtonMenu = ({ shape = "circle" }: ButtonMenuProps) => {
  const { menuOpen, toogleMenu } = useGlobalState();
  const [hoverRef, hovered] = useHover<HTMLButtonElement>();

  const position = menuOpen ? "50%" : "25%";

  const topStyles = useSpring({
    transform: menuOpen
      ? "rotateZ(-45deg) translateY(-1px)"
      : "rotateZ(0deg) translateY(-1px)",
    top: position,
  });

  const middleStyles = useSpring({
    opacity: menuOpen ? 0 : 1,
    transform: menuOpen ? "scaleX(0)" : "scaleX(1)",
  });

  const bottomStyles = useSpring({
    transform: menuOpen
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
          style: ({ $theme }: CustomThemeProps) =>
            getButtonStyles({ $theme, $shape: shape }),
        },
      }}
      onClick={toogleMenu}
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
