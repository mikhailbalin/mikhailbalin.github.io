import React from "react";
import { Button, KIND, SHAPE } from "baseui/button";
import { styled } from "baseui";
import { Theme } from "baseui/theme";

const MenuIconLine = styled("div", ({ $theme }) => ({
  width: "100%",
  height: "2px",
  backgroundColor: $theme.colors.black,
}));

const MenuIcon = styled("div", ({ $theme }) => ({
  flexDirection: "column",
  display: "flex",
  justifyContent: "space-evenly",
  width: "32px",
  height: "32px",
  padding: "4px",
}));

export interface ButtonMenuProps {}

export const ButtonMenu = (props: ButtonMenuProps) => {
  return (
    <Button
      onClick={() => alert("click")}
      kind={KIND.minimal}
      shape={SHAPE.circle}
      overrides={{
        BaseButton: {
          style: {
            width: "60px",
            height: "60px",
          },
        },
      }}
    >
      <MenuIcon>
        <MenuIconLine />
        <MenuIconLine />
        <MenuIconLine />
      </MenuIcon>
    </Button>
  );
};
