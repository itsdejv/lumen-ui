import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../utils/utils.ts";
import { Input as InputPrimitive } from "@base-ui/react";

const inputVariants = cva(
  cn(
    "relative outline-none transition-all",
    "focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2",
  ),
  {
    variants: {
      variant: {
        soft: cn(
          "bg-[var(--input-color)]/10 hover:bg-[var(--input-color)]/20",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[var(--input-color)]/10",
        ),
        ghost: cn(
          "bg-transparent hover:bg-[var(--input-color)]/10",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent",
        ),
        outline: cn(
          "border border-[var(--input-color)] bg-[var(--input-color)]/5 hover:bg-[var(--input-color)]/10 hover:border-[var(--input-color)]/60",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[var(--input-color)]/5 disabled:hover:border-[var(--input-color)]/40",
        ),
        "outline-soft": cn(
          "border border-[var(--input-color)]/40 bg-[var(--input-color)]/5 hover:bg-[var(--input-color)]/10 hover:border-[var(--input-color)]/60",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[var(--input-color)]/5 disabled:hover:border-[var(--input-color)]/40",
        ),
      },
      intent: {
        primary: "[--input-color:var(--color-primary)]",
        secondary: "[--input-color:var(--color-secondary)]",
        error: "[--input-color:var(--color-error)]",
      },
      inputSize: {
        small: "text-xs h-8 rounded-md gap-1.5 px-1.5 has-[>svg]:px-2.5",
        medium: "text-sm h-9 px-1.5 py-2 has-[>svg]:px-3",
        large: "text-md h-10 rounded-md px-1.5 has-[>svg]:px-4",
      },
      radius: {
        none: "rounded-none",
        small: "rounded-sm",
        medium: "rounded-md",
        large: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "soft",
      intent: "primary",
      inputSize: "medium",
      radius: "medium",
    },
  },
);
interface InputProps
  extends ComponentProps<"input">, VariantProps<typeof inputVariants> {
  unstyled?: boolean;
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    variant,
    inputSize,
    intent,
    error,
    radius,
    unstyled,
    ...restProps
  } = props;

  return (
    <>
      <InputPrimitive
        ref={ref}
        className={cn(
          !unstyled &&
            inputVariants({
              variant,
              inputSize,
              intent: error ? "error" : intent,
              radius,
            }),
          className,
        )}
        {...restProps}
      />
    </>
  );
});
