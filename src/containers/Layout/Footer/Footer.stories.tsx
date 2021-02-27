import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Footer } from "./Footer";

export default {
  title: "Containers/Footer",
  component: Footer,
} as Meta;

export const Primary: Story = () => <Footer />;
