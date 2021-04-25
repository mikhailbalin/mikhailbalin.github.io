import React from "react";
import { useHover } from "react-use";
import { LinkProps } from "./Link.types";
import {
  HoverLine,
  HoverWrapper,
  StyledBaseLink,
  StyledGatsbyLink,
} from "./Link.styles";

export const Link = ({
  children,
  to,
  href,
  linkStyle,
  isUpper = false,
  size = "default",
}: LinkProps) => {
  const element = (hovered: boolean) => (
    <HoverWrapper>
      {children}
      <HoverLine $hovered={hovered} />
    </HoverWrapper>
  );

  const [hoverable] = useHover(element);
  const commonProps = { $size: size, $isUpper: isUpper, linkStyle };

  return to ? (
    <StyledGatsbyLink to={to} {...commonProps}>
      {hoverable}
    </StyledGatsbyLink>
  ) : (
    <StyledBaseLink href={href} {...commonProps}>
      {hoverable}
    </StyledBaseLink>
  );
};
