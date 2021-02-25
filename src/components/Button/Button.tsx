import React from "react";
import { Button as BaseButton, ButtonProps } from "baseui/button";
import { Theme } from "baseui/theme";

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <BaseButton
      {...rest}
      overrides={{
        BaseButton: {
          style: ({ $theme }: { $theme: Theme }) => ({
            border: `${$theme.colors.warning600} solid`,
          }),
        },
      }}
    >
      {children}
    </BaseButton>
  );
};
