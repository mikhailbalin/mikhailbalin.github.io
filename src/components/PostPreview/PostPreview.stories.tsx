import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { PostPreview, PostPreviewProps } from "./PostPreview";

export default {
  title: "PostPreview",
  component: PostPreview,
} as Meta;

export const Template: Story<PostPreviewProps> = (args) => (
  <PostPreview {...args} />
);
