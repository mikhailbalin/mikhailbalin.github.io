import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ContactMe } from "./ContactMe";

export default {
  title: "Containers/ContactMe",
  component: ContactMe,
} as Meta;

export const Primary: Story = () => <ContactMe />;
