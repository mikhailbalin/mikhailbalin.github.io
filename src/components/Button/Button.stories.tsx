import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ButtonProps, KIND } from "baseui/button";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export default {
  title: "Buttons/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Contact Me",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  kind: KIND.secondary,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  kind: KIND.tertiary,
  children: "Download CV",
  endEnhancer: <FontAwesomeIcon icon={faFilePdf} size="2x" />,
};

export const TertiaryEmail = Template.bind({});
TertiaryEmail.args = {
  ...Tertiary.args,
  children: "Send an Email",
  endEnhancer: <FontAwesomeIcon icon={faPaperPlane} size="2x" />,
};
