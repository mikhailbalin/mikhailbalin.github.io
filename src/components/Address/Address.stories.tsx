import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Address, AddressProps } from "./Address";

export default {
  title: "Sidebar/Address",
  component: Address,
} as Meta;

const Template: Story<AddressProps> = (args) => <Address {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
