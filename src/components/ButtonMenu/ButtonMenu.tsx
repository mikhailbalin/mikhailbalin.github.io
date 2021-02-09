import React, { useState } from "react";
import { Button, KIND, SHAPE } from "baseui/button";
import { styled } from "baseui";
import { Theme } from "baseui/theme";
import { useSpring, animated } from "react-spring";

const MenuIconLine = styled(animated.div, ({ $theme }) => ({
  width: "100%",
  height: "2px",
  backgroundColor: $theme.colors.black,
  transformStyle: "preserve-3d",
}));

const MenuIcon = styled("div", {
  flexDirection: "column",
  display: "flex",
  justifyContent: "space-evenly",
  width: "32px",
  height: "32px",
  padding: "4px",
});

export const ButtonMenu = () => {
  const [active, setActive] = useState(false);
  const { o, xyz } = useSpring({
    o: active ? 0 : 1,
    xyz: active ? [0, 1, 1] : [1, 1, 1],
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
        <MenuIconLine />
        <MenuIconLine
          style={{
            opacity: (o.interpolate((o) => o) as unknown) as number,
            transform: xyz.interpolate(
              (x: any, y: any, z: any) => `scale3d(${x}, ${y}, ${z})`
            ),
          }}
        />
        <MenuIconLine />
      </MenuIcon>
    </Button>
  );
};
