import React from "react";
import {
  HeadingXXLarge,
  HeadingXLarge,
  HeadingLarge,
  HeadingMedium,
  ParagraphMedium,
  HeadingSmall,
} from "baseui/typography";
import { BlockProps } from "baseui/block";
import { useThemedStyletron } from "../../settings/theme";

export const MyHeadingXXLarge = ({
  color,
  marginBottom,
  ...rest
}: BlockProps) => {
  const [, theme] = useThemedStyletron();

  return (
    <HeadingXXLarge
      color={color || theme.colors.primaryA}
      marginBottom={marginBottom ?? theme.sizing.scale600}
      {...rest}
    />
  );
};

export const MyHeadingXLarge = ({
  color,
  marginBottom,
  ...rest
}: BlockProps) => {
  const [, theme] = useThemedStyletron();

  return (
    <HeadingXLarge
      color={color || theme.colors.primaryA}
      marginBottom={marginBottom ?? theme.sizing.scale600}
      {...rest}
    />
  );
};

export const MyHeadingLarge = ({
  color,
  marginBottom,
  ...rest
}: BlockProps) => {
  const [, theme] = useThemedStyletron();

  return (
    <HeadingLarge
      color={color || theme.colors.primaryA}
      marginBottom={marginBottom ?? theme.sizing.scale600}
      {...rest}
    />
  );
};

export const MyHeadingMedium = ({
  color,
  marginBottom,
  ...rest
}: BlockProps) => {
  const [, theme] = useThemedStyletron();

  return (
    <HeadingMedium
      color={color || theme.colors.primaryA}
      marginBottom={marginBottom ?? theme.sizing.scale600}
      {...rest}
    />
  );
};

export const MyHeadingSmall = ({
  color,
  marginTop,
  marginBottom,
  ...rest
}: BlockProps) => {
  const [, theme] = useThemedStyletron();

  return (
    <HeadingSmall
      color={color || theme.colors.primaryA}
      marginTop={marginTop ?? theme.sizing.scale300}
      marginBottom={marginBottom ?? theme.sizing.scale600}
      $style={{
        textTransform: "uppercase",
      }}
      {...rest}
    />
  );
};

export const MyParagraphMedium = ({
  color,
  marginBottom,
  ...rest
}: BlockProps) => {
  const [, theme] = useThemedStyletron();

  return (
    <ParagraphMedium
      color={color || theme.colors.primaryA}
      marginBottom={marginBottom ?? theme.sizing.scale800}
      {...rest}
    />
  );
};
