import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Subscribe } from "./Subscribe";

export default {
  title: "Subscribe",
  component: Subscribe,
} as Meta;

export const Primary: Story = () => <Subscribe />;
