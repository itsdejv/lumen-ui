import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./text-field.tsx";

const meta = {
  title: "Example/FieldInput",
  component: TextField,
  tags: ["docsPage"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["soft", "underline", "hover-underline"],
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
    radius: {
      control: "inline-radio",
      options: ["none", "small", "medium", "large", "full"],
    },
  },
  args: {},
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <div className="flex flex-wrap flex-col items-center gap-6">
      <TextField {...args} />
    </div>
  ),
};
