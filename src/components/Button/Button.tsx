import React from "react";
import { Button as BaseButton, ButtonProps } from "baseui/button";
import { CustomThemeProps } from "../../settings/theme";
import { StyleObject } from "styletron-react";

export const Button = ({
  children,
  kind,
  baseButtonStyles,
  ...rest
}: Omit<ButtonProps, "overrides"> & { baseButtonStyles?: StyleObject }) => {
  return (
    <BaseButton
      kind={kind}
      overrides={{
        BaseButton: {
          style: ({
            $theme: { sizing, colors, lighting, animation, typography },
          }: CustomThemeProps) => ({
            paddingTop: kind === "tertiary" ? sizing.scale650 : sizing.scale500,
            paddingBottom:
              kind === "tertiary" ? sizing.scale650 : sizing.scale500,
            paddingRight:
              kind === "tertiary" ? sizing.scale900 : sizing.scale800,
            paddingLeft:
              kind === "tertiary" ? sizing.scale900 : sizing.scale800,
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
            textDecoration: "none",

            ":hover": {
              color: colors.white,
              textDecoration: "none",
            },

            ":active": {
              color: colors.white,
            },

            ...(kind === "secondary" && {
              borderColor: "#d9dbd0",
              ":hover": {
                color: colors.white,
                textDecoration: "none",
              },
              ":active": {
                color: colors.white,
              },
            }),

            ...(kind === "tertiary" && {
              boxShadow: lighting.shadow600,
              transitionDuration: animation.timing400,
              transitionTimingFunction: animation.easeInOutCurve,
              ":hover": {
                boxShadow: lighting.shadow700,
                transform: "translateY(-3px) scale(1.02)",
              },
            }),

            ...typography.font260,

            ...(baseButtonStyles || {}),
          }),
        },
        EndEnhancer: {
          style: ({ $theme }: CustomThemeProps) => ({
            marginLeft: $theme.sizing.scale550,
          }),
        },
      }}
      {...rest}
    >
      {children}
    </BaseButton>
  );
};
