import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../utils/utils.ts";
import { Input as InputPrimitive } from "@base-ui/react";
import { useInputGroup } from "../input-group/input-group.context.tsx";
import { InputWrapper } from "./input-wrapper.tsx";
import { useField } from "../field-input/input-field.context.tsx";
import { FieldLabel } from "../field/field.tsx";

const inputVariants = cva(
  cn(
    "focus-visible:outline-none aria-invalid:text-error py-[var(--input-py)] px-[var(--input-px)]",
  ),
  {},
);

interface InputProps
  extends ComponentProps<"input">, VariantProps<typeof inputVariants> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const { label, className: fieldClasses } = useField();
    const { isInGroup } = useInputGroup();

    const inputElement = (
      <>
        <InputPrimitive
          data-slot="input-control"
          data-role="main-input"
          className={cn(inputVariants(), "aria-invalid:text-error", className)}
          ref={ref}
          {...props}
        />
        {label && (
          <FieldLabel className={fieldClasses?.fieldLabel}>{label}</FieldLabel>
        )}
      </>
    );

    if (isInGroup) {
      return inputElement;
    }

    return <InputWrapper>{inputElement}</InputWrapper>;
  },
);
