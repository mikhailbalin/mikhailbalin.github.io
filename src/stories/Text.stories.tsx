import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "@mantine/core";

const meta = {
  title: "Typography/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const ParagraphBig: Story = {
  args: {
    children: "Let’s get in touch",
  },
};

export const Paragraph: Story = {
  args: {
    ...ParagraphBig.args,
  },
};

export const Tiny: Story = {
  args: {
    ...ParagraphBig.args,
  },
};

export const ParagraphBold: Story = {
  args: {
    ...ParagraphBig.args,
  },
};

export const ParagraphLink: Story = {
  args: {
    ...ParagraphBig.args,
  },
};
