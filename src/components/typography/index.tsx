import React from "react";
import {
  HeadingXXLarge,
  HeadingXLarge,
  HeadingLarge,
  HeadingMedium,
  ParagraphMedium,
} from "baseui/typography";
import { BlockProps } from "baseui/block";
import { customTheme as theme } from "../../settings/theme";

export const MyHeadingXXLarge = ({
  color,
  marginBottom,
  ...rest
}: BlockProps) => (
  <HeadingXXLarge
    color={color || theme.colors.primaryA}
    marginBottom={marginBottom ?? theme.sizing.scale600}
    {...rest}
  />
);

export const MyHeadingXLarge = ({
  color,
  marginBottom,
  ...rest
}: BlockProps) => (
  <HeadingXLarge
    color={color || theme.colors.primaryA}
    marginBottom={marginBottom ?? theme.sizing.scale600}
    {...rest}
  />
);

export const MyHeadingLarge = ({
  color,
  marginBottom,
  ...rest
}: BlockProps) => (
  <HeadingLarge
    color={color || theme.colors.primaryA}
    marginBottom={marginBottom ?? theme.sizing.scale600}
    {...rest}
  />
);

export const MyHeadingMedium = ({
  color,
  marginBottom,
  ...rest
}: BlockProps) => (
  <HeadingMedium
    color={color || theme.colors.primaryA}
    marginBottom={marginBottom ?? theme.sizing.scale600}
    {...rest}
  />
);

export const MyParagraphMedium = ({
  color,
  marginBottom,
  ...rest
}: BlockProps) => (
  <ParagraphMedium
    color={color || theme.colors.primaryA}
    marginBottom={marginBottom ?? theme.sizing.scale800}
    {...rest}
  />
);
