import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { NavButton } from "./NavButton";

export default {
  title: "NavButton",
  component: NavButton,
} as Meta;

export const Primary: Story = () => <NavButton />;
