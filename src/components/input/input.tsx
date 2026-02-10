import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../utils/utils.ts";
import { Input as InputPrimitive } from "@base-ui/react";
import { useInputGroup } from "../input-group/input-group.context.tsx";
import { InputWrapper } from "./input-wrapper.tsx";

const inputVariants = cva(cn("focus-visible:outline-none"), {});

interface InputProps
  extends ComponentProps<"input">, VariantProps<typeof inputVariants> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const { isInGroup } = useInputGroup();

    const inputElement = (
      <InputPrimitive
        data-slot="input-control"
        data-role="main-input"
        className={cn(inputVariants(), "aria-invalid:text-error", className)}
        ref={ref}
        {...props}
      />
    );

    if (isInGroup) {
      return inputElement;
    }

    return <InputWrapper>{inputElement}</InputWrapper>;
  },
);
