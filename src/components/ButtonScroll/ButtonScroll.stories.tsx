import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ButtonScroll, ButtonScrollProps } from "./ButtonScroll";
import { SIZE } from "baseui/button";

export default {
  title: "Buttons/Nav",
  component: ButtonScroll,
  decorators: [
    (ButtonNavStory) => (
      <div style={{ height: "150vh" }}>
        <ButtonNavStory />
      </div>
    ),
  ],
  argTypes: {
    baseButtonStyle: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<ButtonScrollProps> = (args) => (
  <ButtonScroll
    {...args}
    baseButtonStyle={{
      position: "absolute",
      opacity: 1,
      transform: `scale(1)`,
    }}
  />
);

export const Primary = Template.bind({});

export const Mini = Template.bind({});
Mini.args = {
  size: SIZE.mini,
};
