import type { Meta, StoryObj } from "@storybook/react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupInputField,
  InputGroupText,
} from "./input-group.tsx";
import { Field } from "../field/field.tsx";
import { Search } from "lucide-react";

const meta = {
  title: "Example/Input Group",
  component: InputGroup,
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
    "focus-outline": {
      control: "boolean",
    },
  },
  args: {
    disabled: false,
    "aria-invalid": "false",
    size: "medium",
    radius: "medium",
    intent: "primary",
    "focus-outline": false,
  },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: ({ ...args }) => (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div>
        <span className="h-2">Normal input</span>
        <Field>
          <InputGroup {...args}>
            <InputGroupInput placeholder="E-mail" />
            <InputGroupAddon>
              <InputGroupButton variant="soft">
                <Search />
              </InputGroupButton>
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <InputGroupText>Loading...</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </div>

      <div>
        <span className="h-2">Field input</span>
        <Field>
          <InputGroup {...args}>
            <InputGroupInputField label="Label" />
            <InputGroupAddon>
              <InputGroupButton variant="soft">
                <Search />
              </InputGroupButton>
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <InputGroupText>Loading...</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </div>
    </div>
  ),
};
