import React from "react";
import { StyledLink } from "baseui/link";

export interface LinkProps {
  children: React.ReactNode;
}

export const Link = ({ children }: LinkProps) => {
  return (
    <div>
      <StyledLink>{children}</StyledLink>
    </div>
  );
};
