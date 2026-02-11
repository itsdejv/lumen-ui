import { cva } from "class-variance-authority";

export const inputWrapperVariants = cva(
  [
    "relative w-max transition-all cursor-text",
    "px-[var(--input-px)] py-[var(--input-py)]",
    "data-[invalid=true]:border-error",
    "has-[[data-role=main-input]:disabled]:pointer-events-none",
    "has-[[data-role=main-input]:disabled]:opacity-50",
    "hover:bg-[var(--input-bg-color)]/10",
    "has-[[data-role=main-input]:focus-visible]:bg-[var(--input-bg-color)]/10",
  ],
  {
    variants: {
      "focus-outline": {
        true: [
          "outline-focus has-[[data-role=main-input]:focus-visible]:outline-2",
          "has-[[data-role=main-input]:focus-visible]:outline-offset-2",
        ],
        false: "has-[[data-role=main-input]:focus-visible]:outline-none",
      },
      variant: {
        outline: [
          "border border-[var(--input-border-color)] hover:border-[var(--input-border-color)]/80",
        ],
        "outline-soft": [
          "border border-[var(--input-border-color)] bg-[var(--input-bg-color)]/20 hover:border-[var(--input-border-color)]/80 hover:bg-[var(--input-bg-color)]/30",
          "has-[[data-role=main-input]:focus-visible]:border-[var(--input-border-color)]/80 has-[[data-role=main-input]:focus-visible]:bg-[var(--input-bg-color)]/30",
        ],
        soft: [
          "bg-[var(--input-bg-color)]/20 hover:bg-[var(--input-bg-color)]/30 has-[[data-role=main-input]:focus-visible]:bg-[var(--input-bg-color)]/30",
        ],
        transparent: "",
        underline: [
          "bg-transparent bg-no-repeat bg-bottom bg-gradient-to-r from-[var(--input-bg-color)] to-[var(--input-bg-color)]",
          "duration-300 ease-in-out bg-[length:100%_2px]",
          "has-[[data-role=main-input]:outline-0",
        ],
        "underline-hover": [
          "bg-transparent bg-no-repeat bg-bottom bg-gradient-to-r from-[var(--input-bg-color)] to-[var(--input-bg-color)]",
          "transition-[background-size] duration-300 ease-in-out bg-[length:0%_2px] hover:bg-[length:100%_2px]",
          "has-[[data-role=main-input]:focus-visible]:bg-[length:100%_2px]",
        ],
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
    compoundVariants: [
      {
        variant: ["underline", "underline-hover"],
        className: "rounded-b-none",
      },
    ],
    defaultVariants: {
      variant: "outline",
      intent: "primary",
      radius: "medium",
      size: "medium",
    },
  },
);
