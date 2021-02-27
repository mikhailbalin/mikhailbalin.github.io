import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Form } from "./Form";

export default {
  title: "Containers/Form",
  component: Form,
} as Meta;

export const Primary: Story = () => <Form />;
