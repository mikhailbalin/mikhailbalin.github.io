import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Link } from "./Link";
import { LinkProps } from "./Link.types";

export default {
  title: "Link",
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Link",
  to: "/",
};
