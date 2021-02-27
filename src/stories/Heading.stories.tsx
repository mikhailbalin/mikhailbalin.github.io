import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import {
  HeadingXXLarge,
  HeadingXLarge,
  HeadingLarge,
  HeadingMedium,
} from "baseui/typography";
import { BlockProps } from "baseui/block";

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
  <HeadingXXLarge {...args} />
);

export const XLarge: Story<BlockProps> = (args) => <HeadingXLarge {...args} />;

export const Large: Story<BlockProps> = (args) => <HeadingLarge {...args} />;

export const Medium: Story<BlockProps> = (args) => <HeadingMedium {...args} />;
