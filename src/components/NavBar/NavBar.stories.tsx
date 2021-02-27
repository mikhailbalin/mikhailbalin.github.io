import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { NavBar } from "./NavBar";

export default {
  title: "NavBar",
  component: NavBar,
} as Meta;

const Template: Story<any> = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
