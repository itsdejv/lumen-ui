import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["docsPage"],
  argTypes: {
    children: {
      control: "text",
    },
    asChild: {
      control: "boolean",
    },
    intent: {
      control: "select",
      options: ["primary", "secondary"],
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost", "bordered", "soft"],
    },
    size: {
      control: "select",
      options: ["m"],
    },
    animation: {
      control: "select",
      options: ["none", "scale", "ripple", "jump"],
    },
    radius: {
      control: "select",
      options: ["none", "small", "medium", "large", "full"],
    },
  },
  args: {
    radius: "medium",
    children: "Button",
    intent: "primary",
    variant: "solid",
    size: "m",
    animation: "scale",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
