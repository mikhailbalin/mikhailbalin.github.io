import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ButtonNav } from "./ButtonNav";

export default {
  title: "ButtonNav",
  component: ButtonNav,
} as Meta;

export const Primary: Story = () => <ButtonNav />;
