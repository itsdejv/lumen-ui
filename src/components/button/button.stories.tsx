import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button.tsx";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["docsPage"],
  argTypes: {
    children: {
      control: { type: "text" },
      name: "Button title",
    },
    animation: {
      control: { type: "select" },
      options: ["scale", "ripple", "jump", "none"],
      name: "Click animation",
      description: "Select animation after clicking",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    animation: "scale",
  },
};
