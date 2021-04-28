import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ButtonNav, ButtonNavProps } from "./ButtonNav";
import { SIZE } from "baseui/button";

export default {
  title: "Buttons/Nav",
  component: ButtonNav,
  decorators: [
    (ButtonNavStory) => (
      <div style={{ height: "550vh" }}>
        <ButtonNavStory />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ButtonNavProps> = (args) => <ButtonNav {...args} />;

export const Primary = Template.bind({});

export const Mini = Template.bind({});
Mini.args = {
  size: SIZE.mini,
};
