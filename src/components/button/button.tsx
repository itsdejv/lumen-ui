import { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/utils.ts";

const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm",
    "font-medium transition-all cursor-pointer",
  ),
  {
    variants: {
      variant: {
        solid: "",
        outline: "",
        ghost: "",
      },
      size: {
        m: "h-9 px-4 py-2 has-[>svg]:px-3",
      },
      intent: {
        primary: "",
        secondary: "",
      },
      animation: {
        none: "",
        scale: "active:scale-95",
        jump: "active:translate-y-[3px] duration-[50ms]",
        ripple: "relative overflow-hidden",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        intent: "primary",
        className: "bg-primary text-primary-foreground",
      },
      {
        variant: "solid",
        intent: "secondary",
        className: "bg-secondary text-secondary-foreground",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "m",
      intent: "primary",
      animation: "scale",
    },
  },
);

interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { asChild, size, animation, variant, intent, ...restProps } = props;

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ size, animation, variant, intent }))}
      {...restProps}
    />
  );
};
