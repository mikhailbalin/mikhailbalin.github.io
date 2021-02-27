import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ButtonAction } from "./ButtonAction";

export default {
  title: "Buttons/ButtonAction",
  component: ButtonAction,
} as Meta;

export const Primary: Story = () => <ButtonAction />;
