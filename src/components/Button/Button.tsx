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
            paddingTop: "12px",
            paddingRight: "23px",
            paddingBottom: "12px",
            paddingLeft: "23px",
            textTransform: "uppercase",
            letterSpacing: "0.8px",
            transitionProperty: "background color",
            borderTopStyle: "solid",
            borderColor: "transparent",
            borderRightStyle: "solid",
            borderBottomStyle: "solid",
            borderLeftStyle: "solid",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            ...(kind === "secondary"
              ? {
                  borderColor: "#d9dbd0",
                  ":hover": {
                    color: $theme.colors.white,
                  },
                  ":active": {
                    color: $theme.colors.white,
                  },
                }
              : {}),
            ...$theme.typography.font260,
          }),
        },
      }}
    >
      {children}
    </BaseButton>
  );
};
