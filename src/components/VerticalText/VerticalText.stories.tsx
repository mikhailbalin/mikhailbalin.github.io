import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { VerticalText, VerticalTextProps } from "./VerticalText";

export default {
  title: "VerticalText",
  component: VerticalText,
} as Meta;

export const Template: Story<VerticalTextProps> = (args) => (
  <VerticalText {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Title",
};
