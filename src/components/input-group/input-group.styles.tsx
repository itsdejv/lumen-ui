import { cva } from "class-variance-authority";
import { cn } from "../../utils/utils.ts";

export const inputGroupAddonVariants = cva(
  cn(
    "select-none py-[var(--input-group-addon-py)] select-none flex flex-col justify-center",
  ),
  {
    variants: {
      align: {
        "inline-start": "pl-1.5 order-first",
        "inline-end": "pr-1.5 order-last pr-[var(--input-px)]",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  },
);
