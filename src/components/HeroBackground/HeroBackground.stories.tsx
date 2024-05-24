import type { Meta, StoryObj } from "@storybook/react";
import { HeroBackground } from "./HeroBackground";
import { PropsWithChildren, useRef } from "react";
import { RootRefContext } from "../../context";

const Wrapper = ({ children }: PropsWithChildren) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  return (
    <RootRefContext.Provider value={rootRef}>
      <div ref={rootRef}>{children}</div>
    </RootRefContext.Provider>
  );
};

const meta = {
  title: "HeroBackground",
  component: HeroBackground,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: (Story) => {
    return (
      <Wrapper>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </Wrapper>
    );
  },
} satisfies Meta<typeof HeroBackground>;

export default meta;
type Story = StoryObj<typeof HeroBackground>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Blog: Story = {
  args: {
    variant: "blog",
    children: <div className="h-96" />,
  },
  argTypes: {
    variant: {
      options: ["default", "blog"],
      control: { type: "radio" },
    },
    children: { table: { disable: true } },
  },
};
