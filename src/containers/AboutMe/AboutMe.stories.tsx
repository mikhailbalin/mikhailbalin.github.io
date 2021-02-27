import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { AboutMe } from "./AboutMe";

export default {
  title: "Containers/AboutMe",
  component: AboutMe,
} as Meta;

export const Primary: Story = () => <AboutMe />;
