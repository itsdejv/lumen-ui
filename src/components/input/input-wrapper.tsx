import { VariantProps } from "class-variance-authority";
import { cn } from "../../utils/utils.ts";
import { ComponentProps } from "react";
import { inputWrapperVariants } from "./input-wrapper.styles.ts";

interface InputWrapperProps
  extends ComponentProps<"div">, VariantProps<typeof inputWrapperVariants> {
  error?: boolean;
}

export const InputWrapper = ({
  variant,
  intent,
  radius,
  size,
  className,
  "focus-outline": focusOutline,
  ...props
}: InputWrapperProps) => {
  return (
    <div
      className={cn(
        inputWrapperVariants({
          variant,
          intent,
          radius,
          size,
          "focus-outline": focusOutline,
        }),
        className,
      )}
      {...props}
    />
  );
};
