import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./spinner.tsx";

const meta = {
  title: "Example/Spinner",
  component: Spinner,
  tags: ["docsPage"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
