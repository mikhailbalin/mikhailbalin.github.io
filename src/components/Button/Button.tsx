import React from "react";
import { Button as BaseButton, ButtonProps } from "baseui/button";
import { Theme } from "baseui/theme";

export const Button = ({ children, kind, ...rest }: ButtonProps) => {
  return (
    <BaseButton
      {...rest}
      kind={kind}
      overrides={{
        BaseButton: {
          style: ({ $theme }: { $theme: Theme }) => ({
            transitionProperty: "background color",
            ...(kind === "secondary"
              ? {
                  borderColor: "#d9dbd0",
                  borderTopStyle: "solid",
                  borderRightStyle: "solid",
                  borderBottomStyle: "solid",
                  borderLeftStyle: "solid",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  ":hover": {
                    color: $theme.colors.white,
                  },
                }
              : {}),
          }),
        },
      }}
    >
      {children}
    </BaseButton>
  );
};
