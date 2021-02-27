import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { SectionTitle, SectionTitleProps } from "./SectionTitle";

export default {
  title: "SectionTitle",
} as Meta;

const Template: Story<SectionTitleProps> = (args) => <SectionTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Contact Me",
};
