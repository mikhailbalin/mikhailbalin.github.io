import {
  CustomTheme,
  themedStyled,
  themedWithStyle,
} from "../../settings/theme";
import { StyletronComponent } from "styletron-react";
import { LinkProps, StyledLink } from "baseui/link";

export const Root = themedStyled("address", {
  // padding: "2.5vw",
});

export const ContactBlock = themedStyled<"div", { $size: "default" | "small" }>(
  "div",
  ({ $theme, $size }) => ({
    display: "flex",
    alignItems: "center",
    gap: $theme.sizing.scale300,
    paddingTop: $theme.sizing.scale300,
    paddingBottom: $theme.sizing.scale300,
    color: $theme.colors.primaryA,
    ...$theme.typography.font150,
  })
);

export const SocialBlock = themedStyled("div", ({ $theme }) => ({
  display: "flex",
  marginTop: $theme.sizing.scale850,
}));

export const SocialLink = themedWithStyle<
  StyletronComponent<LinkProps>,
  { $theme?: CustomTheme }
>(StyledLink, ({ $theme }) => ({
  display: "block",
  marginRight: $theme.sizing.scale700,
  transitionProperty: "transform",
  transitionDuration: $theme.animation.timing400,
  transitionTimingFunction: $theme.animation.easeInOutCurve,

  ":hover": {
    color: $theme.colors.primaryA,
    transform: "scale(1.2)",
  },
}));
