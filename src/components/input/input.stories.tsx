import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input.tsx";

const meta = {
  title: "Example/Input",
  component: Input,
  tags: ["docsPage"],
  argTypes: {
    intent: {
      control: "inline-radio",
      options: ["primary", "secondary", "error"],
    },
    variant: {
      control: "inline-radio",
      options: ["outline", "outline-soft", "soft", "ghost"],
    },
    inputSize: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
    radius: {
      control: "inline-radio",
      options: ["none", "small", "medium", "large", "full"],
    },
    disabled: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
    unstyled: {
      control: "boolean",
    },
  },
  args: {
    variant: "outline",
    intent: "primary",
    inputSize: "medium",
    radius: "medium",
    disabled: false,
    unstyled: false,
    error: false,
    placeholder: "Input",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "outline",
  },

  render: (args) => (
    <div className="flex flex-wrap flex-col items-center gap-6">
      <Input {...args} />
    </div>
  ),
};
