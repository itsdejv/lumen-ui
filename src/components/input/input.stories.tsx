import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input.tsx";

const meta = {
  title: "Example/Input",
  component: Input,
  tags: ["docsPage"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: [
        "outline",
        "outline-soft",
        "soft",
        "transparent",
        "underline",
        "underline-hover",
      ],
    },
    placeholder: {
      control: "text",
    },
    "aria-invalid": {
      control: "boolean",
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
    radius: {
      control: "inline-radio",
      options: ["none", "small", "medium", "large", "full"],
    },
    intent: {
      control: "inline-radio",
      options: ["primary", "secondary", "success", "error", "muted"],
    },
  },
  args: {
    disabled: false,
    placeholder: "Input",
    "aria-invalid": "false",
    size: "medium",
    radius: "medium",
    intent: "primary",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <div className="flex flex-wrap flex-col items-center gap-6">
      <div className="w-full max-w-sm">
        <Input {...args} />
      </div>
    </div>
  ),
};
