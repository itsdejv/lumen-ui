import { cva } from "class-variance-authority";
import { cn } from "../../utils/utils.ts";

export const inputWrapperVariants = cva(
  cn(
    "relative w-max outline-focus transition-all cursor-text",
    "px-[var(--input-px)] py-[var(--input-py)] data-[invalid=true]:border-error",
    "has-[[data-role=main-input]:focus-visible]:outline-2 has-[[data-role=main-input]:focus-visible]:outline-offset-2 has-[[data-role=main-input]:disabled]:pointer-events-none has-[[data-role=main-input]:disabled]:opacity-50",
  ),
  {
    variants: {
      variant: {
        outline: cn(
          "border border-[var(--input-border-color)] hover:border-[var(--input-border-color)]/80 hover:bg-[var(--input-bg-color)]/10",
        ),
        "outline-soft": cn(
          "border border-[var(--input-border-color)] bg-[var(--input-bg-color)]/20 hover:border-[var(--input-border-color)]/80 hover:bg-[var(--input-bg-color)]/30",
        ),
        soft: cn(
          "bg-[var(--input-bg-color)]/20 hover:bg-[var(--input-bg-color)]/30",
        ),
        transparent: cn("hover:bg-[var(--input-bg-color)]/20"),
      },
      intent: {
        primary:
          "[--input-border-color:var(--color-primary)] [--input-bg-color:var(--color-primary)]",
      },
      radius: {
        medium: "rounded-md",
      },
      size: {
        medium:
          "[--input-px:theme(spacing.[1.5])] [--input-py:theme(spacing.2)]",
      },
    },
    defaultVariants: {
      variant: "outline",
      intent: "primary",
      radius: "medium",
      size: "medium",
    },
  },
);
