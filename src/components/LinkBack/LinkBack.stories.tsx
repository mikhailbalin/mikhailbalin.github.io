import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { LinkBack, LinkBackProps } from "./LinkBack";

export default {
  title: "Links/Back",
  component: LinkBack,
} as Meta;

const Template: Story<LinkBackProps> = (args) => <LinkBack {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  to: "/",
};
