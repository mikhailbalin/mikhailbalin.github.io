import { StyleObject, StyletronComponent } from "styletron-react";
import {
  CustomTheme,
  themedStyled,
  themedWithStyle,
} from "../../settings/theme";
import { LinkSize, LinkStylesProps } from "./Link.types";
import { Link as GatsbyLink } from "gatsby";
import {
  StyledLink as BaseLink,
  LinkProps as BaseLinkProps,
} from "baseui/link";

const hoverSize = "1px";

export const HoverLine = themedStyled<"div", { $hovered: boolean }>(
  "div",
  ({ $theme, $hovered }) => ({
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: hoverSize,
    backgroundColor: $theme.colors.primaryA,
    transform: $hovered ? "translateX(0)" : "translateX(-100%)",
    transformOrigin: "left",
    transition: `transform ${$theme.animation.timing400}`,
  })
);

export const getLinkStyles = ({
  $theme,
  $isUpper,
  $size = "default",
}: LinkStylesProps): StyleObject => ({
  position: "relative",
  display: "inline-block",
  cursor: "pointer",
  color: $theme.colors.primaryA,
  textDecoration: "none",
  textTransform: $isUpper ? "uppercase" : "none",
  overflow: "hidden",
  ...($size === "default" && $theme.typography.font160),

  ":hover": {
    color: $theme.colors.primaryA,
    textDecoration: "none",
  },
});

export const StyledGatsbyLink = themedStyled<
  typeof GatsbyLink,
  { $theme?: CustomTheme; $isUpper: boolean; $size: LinkSize }
>(GatsbyLink, getLinkStyles);

export const StyledBaseLink = themedWithStyle<
  StyletronComponent<BaseLinkProps>,
  { $theme?: CustomTheme; $isUpper: boolean; $size: LinkSize }
>(BaseLink, getLinkStyles);

export const HoverWrapper = themedStyled("div", {
  paddingBottom: hoverSize,
});
