import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Code, CodeProps } from "./Code";

export default {
  title: "Code",
  component: Code,
} as Meta;

export const Primary: Story<CodeProps> = (props) => <Code {...props} />;
