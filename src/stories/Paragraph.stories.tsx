import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ParagraphMedium } from "baseui/typography";
import { BlockProps } from "baseui/block";

export default {
  title: "Typography/Paragraph",
  argTypes: {
    children: {
      defaultValue:
        "Alii autem, quibus ego cum memoriter, tum etiam ac ratione intellegi posse et. Et quidem faciunt, ut de homine sensibus reliqui nihil est, omnis iste natus.",
      description: "React children",
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: {
        type: "text",
      },
    },
  },
} as Meta;

export const Medium: Story<BlockProps> = (args) => (
  <ParagraphMedium {...args} />
);
