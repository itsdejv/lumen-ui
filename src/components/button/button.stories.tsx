import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { ArrowRight, Mail } from "lucide-react";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["docsPage"],
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    startIcon: {
      table: {
        disable: true,
      },
    },
    endIcon: {
      table: {
        disable: true,
      },
    },
    spinner: {
      table: {
        disable: true,
      },
    },
    children: {
      control: "text",
    },
    intent: {
      control: "inline-radio",
      options: ["primary", "secondary"],
    },
    variant: {
      control: "inline-radio",
      options: ["solid", "outline", "ghost", "bordered", "soft"],
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
    animation: {
      control: "inline-radio",
      options: ["none", "scale", "ripple", "jump"],
    },
    radius: {
      control: "inline-radio",
      options: ["none", "small", "medium", "large", "full"],
    },
    isLoading: {
      control: "boolean",
    },
    loaderPosition: {
      control: "inline-radio",
      options: ["center", "icon"],
    },
  },
  args: {
    loaderPosition: "icon",
    radius: "medium",
    children: "Button",
    intent: "primary",
    variant: "solid",
    size: "medium",
    animation: "scale",
    isLoading: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <div className="flex flex-wrap flex-col items-center gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-400">Standard</span>
        <Button {...args} />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-400">Left Icon</span>
        <Button {...args} startIcon={<Mail />} />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-400">Full Set</span>
        <Button {...args} startIcon={<Mail />} endIcon={<ArrowRight />}>
          Odeslat
        </Button>
      </div>
    </div>
  ),
};
