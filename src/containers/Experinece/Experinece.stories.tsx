import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Experinece } from "./Experinece";

export default {
  title: "Containers/Experinece",
  component: Experinece,
} as Meta;

export const Primary: Story = () => <Experinece />;
