import React, { useState } from "react";
import { Button, KIND, SHAPE } from "baseui/button";
import { Theme } from "baseui/theme";
import { useSpring, animated } from "react-spring";
import { themedStyled } from "../../settings/theme";

const Line = themedStyled(animated.div, ({ $theme }) => ({
  position: "relative",
  width: "100%",
  height: "2px",
  backgroundColor: $theme.colors.black,
  transformStyle: "preserve-3d",
}));

const Icon = themedStyled("div", {
  position: "relative",
  flexDirection: "column",
  display: "flex",
  justifyContent: "space-between",
  width: "32px",
  height: "32px",
  padding: "4px",
});

export const ButtonMenu = () => {
  const [active, setActive] = useState(false);

  const top = useSpring({
    transform: active ? "rotateZ(-45deg)" : "rotateZ(0deg)",
    top: active ? "calc(50% - 1px)" : "calc(25% - 1px)",
  });

  const middle = useSpring({
    opacity: active ? 0 : 1,
    transform: active ? "scaleX(0)" : "scaleX(1)",
  });

  const bottom = useSpring({
    transform: active ? "rotateZ(45deg)" : "rotateZ(0deg)",
    bottom: active ? "calc(50% - 1px)" : "calc(25% - 1px)",
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
      <Icon>
        <Line style={top} />
        <Line style={middle} />
        <Line style={bottom} />
      </Icon>
    </Button>
  );
};
