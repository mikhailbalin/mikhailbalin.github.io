import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ButtonBack } from "./ButtonBack";

export default {
  title: "Buttons/Back",
  component: ButtonBack,
} as Meta;

const Template: Story = (args) => <ButtonBack {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
