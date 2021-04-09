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

export const MyHeadingXXLarge = ({ color, ...rest }: BlockProps) => (
  <HeadingXXLarge
    color={color || theme.colors.primaryA}
    marginBottom={theme.sizing.scale600}
    {...rest}
  />
);

export const MyHeadingXLarge = ({ color, ...rest }: BlockProps) => (
  <HeadingXLarge
    color={color || theme.colors.primaryA}
    marginBottom={theme.sizing.scale600}
    {...rest}
  />
);

export const MyHeadingLarge = ({ color, ...rest }: BlockProps) => (
  <HeadingLarge
    color={color || theme.colors.primaryA}
    marginBottom={theme.sizing.scale600}
    {...rest}
  />
);

export const MyHeadingMedium = ({ color, ...rest }: BlockProps) => (
  <HeadingMedium
    color={color || theme.colors.primaryA}
    marginBottom={theme.sizing.scale600}
    {...rest}
  />
);

export const MyParagraphMedium = ({ color, ...rest }: BlockProps) => (
  <ParagraphMedium
    color={color || theme.colors.primaryA}
    marginBottom={theme.sizing.scale800}
    {...rest}
  />
);
