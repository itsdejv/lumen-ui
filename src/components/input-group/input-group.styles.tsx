import { cva } from "class-variance-authority";

export const inputGroupAddonVariants = cva("select-none", {
  variants: {
    align: {
      "inline-start": "pl-1.5 order-first",
      "inline-end": "pr-1.5 order-last",
    },
  },
  defaultVariants: {
    align: "inline-start",
  },
});
