import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Contacts } from "./Contacts";

export default {
  title: "Contacts",
  component: Contacts,
} as Meta;

export const Primary: Story = () => <Contacts />;
