import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ButtonMenu, ButtonMenuProps } from "./ButtonMenu";

export default {
  title: "Buttons/ButtonMenu",
  component: ButtonMenu,
  parameters: {
    backgrounds: {
      default: "cararra",
    },
  },
} as Meta;

const Template: Story<ButtonMenuProps> = (args) => <ButtonMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
