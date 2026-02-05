import { Field, FieldLabel } from "../field/field.tsx";
import { Input } from "../input/input.tsx";
import { VariantProps } from "class-variance-authority";
import { textFieldVariants } from "./text-field.variants.ts";
import { Button } from "../button";

interface TextFieldProps extends VariantProps<typeof textFieldVariants> {}

export const TextField = (props: TextFieldProps) => {
  const { variant } = props;

  return (
    <div className="flex">
      <Field variant={variant} className="bg-black/20">
        <Input className="bg-red-500 py-1.5" />
        <FieldLabel variant={variant}>Test</FieldLabel>
      </Field>
      <Button>Test</Button>
    </div>
  );
};
