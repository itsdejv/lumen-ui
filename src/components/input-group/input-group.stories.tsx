import type { Meta, StoryObj } from "@storybook/react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./input-group.tsx";
import { Field, FieldDescription, FieldLabel } from "../field/field.tsx";
import { Search } from "lucide-react";

const meta = {
  title: "Example/Input Group",
  component: InputGroup,
  tags: ["docsPage"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
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
    intent: {
      control: "inline-radio",
      options: ["primary"],
    },
    "focus-outline": {
      control: "boolean",
    },
  },
  args: {
    disabled: false,
    variant: "outline",
    intent: "primary",
    "focus-outline": false,
  },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: ({ ...args }) => (
    <div className="flex justify-center items-center">
      <div>
        <Field>
          <FieldLabel>Label</FieldLabel>
          <InputGroup {...args}>
            <InputGroupInput placeholder="E-mail" />
            <InputGroupAddon>
              <InputGroupButton variant="ghost" size="icon-small">
                <Search size={16} />
              </InputGroupButton>
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <InputGroupButton variant="ghost">Test</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>Please enter something good here.</FieldDescription>
        </Field>
      </div>
    </div>
  ),
};
