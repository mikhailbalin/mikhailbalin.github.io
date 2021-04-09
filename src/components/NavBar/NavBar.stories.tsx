import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { NavBar } from "./NavBar";

export default {
  title: "NavBar",
  component: NavBar,
} as Meta;

export const Primary: Story = () => <NavBar />;
