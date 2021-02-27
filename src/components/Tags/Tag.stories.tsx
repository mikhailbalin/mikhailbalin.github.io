import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Tags } from "./Tags";

export default {
  title: "Tags",
  component: Tags,
} as Meta;

export const Primary: Story = () => <Tags />;
