import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Instagram } from "./Instagram";

export default {
  title: "Containers/Instagram",
  component: Instagram,
} as Meta;

export const Primary: Story = () => <Instagram />;
