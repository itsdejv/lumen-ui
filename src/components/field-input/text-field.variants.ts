import { cva } from "class-variance-authority";
import { cn } from "../../utils/utils.ts";

export const textFieldVariants = cva(cn("relative"), {
  variants: {
    variant: {
      floatingFilled: "",
    },
  },
});
