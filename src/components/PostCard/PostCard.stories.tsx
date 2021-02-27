import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { PostCard } from "./PostCard";

export default {
  title: "PostCard",
  component: PostCard,
} as Meta;

export const Primary: Story = () => <PostCard />;
