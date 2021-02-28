import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { SidebarMedia } from "./SidebarMedia";

export default {
  title: "Sidebar/Media",
  component: SidebarMedia,
} as Meta;

export const Primary: Story = () => <SidebarMedia />;
