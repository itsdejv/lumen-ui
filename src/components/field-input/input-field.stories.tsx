import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./input-field.tsx";

const meta = {
  title: "Example/FieldInput",
  component: InputField,
  tags: ["docsPage"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <div className="flex flex-wrap flex-col items-center gap-6">
      <InputField label="Test label" />
    </div>
  ),
};
