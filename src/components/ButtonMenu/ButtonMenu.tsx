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

  const propsTop = useSpring({
    transform: active
      ? "translate3d(0px, 7px, 0px) rotateZ(-45deg)"
      : "translate3d(0px, 0px, 0px) rotateZ(0deg)",
  });

  const propsBottom = useSpring({
    transform: active
      ? "translate3d(0px, -7px, 0px) rotateZ(45deg)"
      : "translate3d(0px, 0px, 0px) rotateZ(0deg)",
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
        <MenuIconLine style={propsTop} />
        <MenuIconLine
          style={{
            opacity: (o.interpolate((o) => o) as unknown) as number,
            transform: xyz.interpolate(
              (x: unknown, y: unknown, z: unknown) =>
                `scale3d(${x}, ${y}, ${z})`
            ),
          }}
        />
        <MenuIconLine style={propsBottom} />
      </MenuIcon>
    </Button>
  );
};
