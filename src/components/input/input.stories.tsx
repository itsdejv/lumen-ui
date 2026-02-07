import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input.tsx";
import { Field, FieldDescription, FieldLabel } from "../field/field.tsx";

const meta = {
  title: "Example/Input",
  component: Input,
  tags: ["docsPage"],
  argTypes: {
    intent: {
      control: "inline-radio",
      options: ["primary", "secondary", "error", "warning", "success"],
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
  render: (args) => (
    <div className="flex flex-wrap flex-col items-center gap-6">
      <div className="w-full max-w-sm">
        <Input {...args} />
      </div>
    </div>
  ),
};

export const InputField: Story = {
  args: {
    variant: "outline",
    placeholder: "you@example.com",
  },
  argTypes: {
    error: { table: { disable: true } },
    disabled: { table: { disable: true } },
    unstyled: { table: { disable: true } },
    intent: { table: { disable: true } },
    radius: { table: { disable: true } },
  },

  render: (args) => (
    <div className="flex flex-col items-center gap-8 p-8">
      <div className="w-full max-w-sm space-y-2">
        <div className="space-y-1 mb-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Input with Field
          </h2>
          <p className="text-sm text-muted-foreground">
            Example of Input component used with Field wrapper components.
          </p>
        </div>

        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input {...args} />
          <FieldDescription>We'll never share your email.</FieldDescription>
        </Field>
      </div>

      <div className="w-full max-w-sm space-y-2">
        <div className="space-y-1 mb-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Error Input Field
          </h2>
          <p className="text-sm text-muted-foreground">
            Example of Input component used with Field wrapper components.
          </p>
        </div>

        <Field error required disabled>
          <FieldLabel>Email</FieldLabel>
          <Input {...args} />
          <FieldDescription>This field is required</FieldDescription>
        </Field>
      </div>
    </div>
  ),
};
