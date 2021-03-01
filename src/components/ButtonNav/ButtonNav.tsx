import React from "react";
import { Button as BaseButton, SHAPE, SIZE } from "baseui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { CustomTheme, themedStyled } from "../../settings/theme";

const CircleOuter = themedStyled("div", ({ $theme }) => ({
  position: "absolute",
  left: $theme.sizing.scale300,
  top: $theme.sizing.scale300,
  right: $theme.sizing.scale300,
  bottom: $theme.sizing.scale300,
  borderRadius: "50%",
  backgroundColor: "#ccc",
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

export interface ButtonNavProps {
  size?: SIZE[keyof Pick<SIZE, "default" | "mini">];
}

export const ButtonNav = ({ size }: ButtonNavProps) => {
  return (
    <BaseButton
      shape={SHAPE.circle}
      size={size || SIZE.default}
      overrides={{
        BaseButton: {
          style: ({ $theme }: { $theme: CustomTheme }) => ({
            position: "relative",
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
        <CircleInner>
          <FontAwesomeIcon
            icon={faReply}
            rotation={90}
            size="lg"
            color="#000"
          />
        </CircleInner>
      </CircleOuter>
    </BaseButton>
  );
};
