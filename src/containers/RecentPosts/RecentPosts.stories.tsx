import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { RecentPosts } from "./RecentPosts";

export default {
  title: "Containers/RecentPosts",
  component: RecentPosts,
} as Meta;

export const Primary: Story = () => <RecentPosts />;
