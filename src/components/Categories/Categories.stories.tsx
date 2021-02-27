import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Categories } from "./Categories";

export default {
  title: "Categories",
  component: Categories,
} as Meta;

export const Primary: Story = () => <Categories />;
