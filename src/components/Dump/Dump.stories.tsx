import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Dump } from "./Dump";

export default {
  title: "Dump",
  component: Dump,
} as Meta;

export const Primary: Story = () => <Dump />;
