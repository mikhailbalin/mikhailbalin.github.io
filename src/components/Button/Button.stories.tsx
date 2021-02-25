import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ButtonProps, KIND } from "baseui/button";
import { Button } from "./Button";

export default {
  title: "Buttons/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    backgrounds: {
      default: "cararra",
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Hello",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  kind: KIND.secondary,
};

export const Large = Template.bind({});
Large.args = {
  isLoading: true,
};

export const Small = Template.bind({});
Small.args = {
  isLoading: true,
};
