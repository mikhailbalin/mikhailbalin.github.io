import React from "react";
import { Button as BaseButton, ButtonProps } from "baseui/button";
import { CustomTheme } from "../../settings/theme";

export const Button = ({ children, kind, ...rest }: ButtonProps) => {
  return (
    <BaseButton
      {...rest}
      kind={kind}
      overrides={{
        BaseButton: {
          style: ({ $theme }: { $theme: CustomTheme }) => ({
            paddingTop: kind === "tertiary" ? "18px" : "12px",
            paddingBottom: kind === "tertiary" ? "18px" : "12px",
            paddingRight: kind === "tertiary" ? "32px" : "23px",
            paddingLeft: kind === "tertiary" ? "32px" : "23px",
            borderColor: "transparent",
            borderTopStyle: "solid",
            borderRightStyle: "solid",
            borderBottomStyle: "solid",
            borderLeftStyle: "solid",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            transitionProperty: "background color",
            ...(kind === "secondary" && {
              borderColor: "#d9dbd0",
              ":hover": {
                color: $theme.colors.white,
              },
              ":active": {
                color: $theme.colors.white,
              },
            }),
            ...(kind === "tertiary" && {
              boxShadow: $theme.lighting.shadow600,
              transitionDuration: $theme.animation.timing400,
              transitionTimingFunction: $theme.animation.easeInOutCurve,
              ":hover": {
                boxShadow: $theme.lighting.shadow700,
                transform: "translateY(-3px) scale(1.02)",
              },
            }),
            ...$theme.typography.font260,
          }),
        },
        EndEnhancer: {
          style: ({ $theme }: { $theme: CustomTheme }) => ({
            marginLeft: $theme.sizing.scale550,
          }),
        },
      }}
    >
      {children}
    </BaseButton>
  );
};
