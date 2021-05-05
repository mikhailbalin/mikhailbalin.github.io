import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { CareerBlock, CareerBlockProps } from "./CareerBlock";

export default {
  title: "CareerBlock",
  component: CareerBlock,
  decorators: [
    (CareerBlockStory) => (
      <div style={{ height: "700px", paddingTop: "50px" }}>
        <CareerBlockStory />
      </div>
    ),
  ],
} as Meta;

const Template: Story<CareerBlockProps> = (args) => <CareerBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  dates: "2009 - 2010",
  name: "Marco Interactive",
  description:
    "At magnum periculum adiit in quo enim inter argumentum conclusionemque rationis et dolorum. Censes aut reiciendis voluptatibus maiores alias consequatur.",
  position: "Internship",
  indicatorVisible: true,
  threshold: 50,
};
