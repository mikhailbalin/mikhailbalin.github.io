import { Meta, Story } from "@storybook/react/types-6-0";
import { BlockProps } from "baseui/block";
import React from "react";
import { MyHeadingXXLarge } from "./Typography";

export default {
  title: "Typography/MyHeadingXXLarge",
  component: MyHeadingXXLarge,
} as Meta;

const Template: Story<BlockProps> = (args) => <MyHeadingXXLarge {...args} />;

export const HeadingXXLarge = Template.bind({});
HeadingXXLarge.args = {
  children: "We ignite opportunity by setting the world in motion.",
};
