import React from "react";
import {
  HeadingXXLarge,
  HeadingXLarge,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  HeadingXSmall,
} from "baseui/typography";
import { BlockProps } from "baseui/block";

export const MyHeadingXXLarge: React.FC<BlockProps> = (props) => (
  <HeadingXXLarge {...props} />
);

export const MyHeadingXLarge: React.FC<BlockProps> = (props) => (
  <HeadingXLarge {...props} />
);

export const MyHeadingLarge: React.FC<BlockProps> = (props) => (
  <HeadingLarge {...props} />
);

export const MyHeadingMedium: React.FC<BlockProps> = (props) => (
  <HeadingMedium {...props} />
);

export const MyHeadingSmall: React.FC<BlockProps> = (props) => (
  <HeadingSmall {...props} />
);

export const MyHeadingXSmall: React.FC<BlockProps> = (props) => (
  <HeadingXSmall {...props} />
);
