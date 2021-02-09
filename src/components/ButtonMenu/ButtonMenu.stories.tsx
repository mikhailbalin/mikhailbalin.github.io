import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ButtonMenu } from "./ButtonMenu";

export default {
  title: "Buttons/ButtonMenu",
  component: ButtonMenu,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const Template: Story<any> = (args) => <ButtonMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
