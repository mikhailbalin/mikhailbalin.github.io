import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Main } from "./Main";

export default {
  title: "Containers/Main",
  component: Main,
} as Meta;

export const Primary: Story = () => <Main />;
