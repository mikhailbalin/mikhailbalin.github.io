import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Dump, DumpProps } from "./Dump";

export default {
  title: "Dump",
  component: Dump,
} as Meta;

const Template: Story<DumpProps> = (props) => <Dump {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  string: "this is a test string",
  integer: 42,
  array: [1, 2, 3, "test", null],
  float: 3.14159,
  object: {
    "first-child": true,
    "second-child": false,
    "last-child": null,
  },
  string_number: "1234",
  date: "2021-02-27T18:20:38.361Z",
};
