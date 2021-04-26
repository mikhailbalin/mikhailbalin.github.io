import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { BlockProps } from "baseui/block";
import {
  MyHeadingXXLarge,
  MyHeadingXLarge,
  MyHeadingLarge,
  MyHeadingMedium,
  MyHeadingSmall,
} from "../components/typography";

export default {
  title: "Typography/Heading",
  argTypes: {
    color: {
      description: "Color of text",
      defaultValue: "#151515",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "color",
      },
    },
    children: {
      defaultValue: "We ignite opportunity by setting the world in motion.",
      description: "React children",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: {
        type: "text",
      },
    },
  },
} as Meta;

export const XXLarge: Story<BlockProps> = (args) => (
  <MyHeadingXXLarge {...args} />
);

export const XLarge: Story<BlockProps> = (args) => (
  <MyHeadingXLarge {...args} />
);

export const Large: Story<BlockProps> = (args) => <MyHeadingLarge {...args} />;

export const Medium: Story<BlockProps> = (args) => (
  <MyHeadingMedium {...args} />
);

export const Small: Story<BlockProps> = (args) => <MyHeadingSmall {...args} />;
