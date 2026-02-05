import { cn } from "../../utils/utils.ts";
import { Label } from "../label/label.tsx";
import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { textFieldVariants } from "../field-input/text-field.variants.ts";

export type FieldProps = ComponentProps<"div"> &
  VariantProps<typeof textFieldVariants>;

export const Field = (props: FieldProps) => {
  const {} = props;

  return (
    <div
      role="group"
      data-slot="field"
      data-orientation="vertical"
      className={cn("")}
      {...props}
    />
  );
};

export type FieldLabelProps = ComponentProps<"label"> &
  VariantProps<typeof textFieldVariants>;

export const FieldLabel = (props: FieldLabelProps) => {
  const {} = props;

  return <Label data-slot="field-label" className={cn("")} {...props} />;
};
