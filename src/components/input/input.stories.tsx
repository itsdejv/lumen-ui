import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input.tsx";

const meta = {
  title: "Example/Input",
  component: Input,
  tags: ["docsPage"],
  argTypes: {
    placeholder: {
      control: "text",
    },
    "aria-invalid": {
      control: "boolean",
    },
  },
  args: {
    disabled: false,
    placeholder: "Input",
    "aria-invalid": "false",
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
