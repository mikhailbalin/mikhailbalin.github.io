import React, { useState } from "react";
import { Button, KIND, SHAPE } from "baseui/button";
import { Theme } from "baseui/theme";
import { useSpring, animated } from "react-spring";
import { themedStyled } from "../../settings/theme";

const MenuIconLine = themedStyled(animated.div, ({ $theme }) => ({
  width: "100%",
  height: "2px",
  backgroundColor: $theme.colors.black,
  transformStyle: "preserve-3d",
}));

const MenuIcon = themedStyled("div", {
  position: "relative",
  flexDirection: "column",
  display: "flex",
  justifyContent: "space-evenly",
  width: "32px",
  height: "32px",
  padding: "4px",
});

export const ButtonMenu = () => {
  const [active, setActive] = useState(false);

  const top = useSpring({
    transform: active
      ? "translateY(6px) rotateZ(-45deg)"
      : "translateY(0px) rotateZ(0deg)",
  });

  const middle = useSpring({
    opacity: active ? 0 : 1,
    transform: active ? "scale3d(0, 1, 1)" : "scale3d(1, 1, 1)",
  });

  const bottom = useSpring({
    transform: active
      ? "translateY(-6px) rotateZ(45deg)"
      : "translateY(0px) rotateZ(0deg)",
  });

  return (
    <Button
      onClick={() => setActive(!active)}
      kind={KIND.minimal}
      shape={SHAPE.circle}
      overrides={{
        BaseButton: {
          style: ({ $theme }: { $theme: Theme }) => ({
            width: "60px",
            height: "60px",
            backgroundColor: $theme.colors.white,
          }),
        },
      }}
    >
      <MenuIcon>
        <MenuIconLine style={top} />
        <MenuIconLine style={middle} />
        <MenuIconLine style={bottom} />
      </MenuIcon>
    </Button>
  );
};
