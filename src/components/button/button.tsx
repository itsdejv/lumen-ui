import { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/utils.ts";

const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm",
    "font-medium transition-all cursor-pointer",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  ),
  {
    variants: {
      variant: {
        solid: "",
        outline: "bg-transparent ring-2 ring-inset hover:text-white",
        bordered: "bg-transparent ring-2 ring-inset",
        soft: "bg-transparent",
        ghost: "bg-transparent",
      },
      size: {
        m: "h-9 px-4 py-2 has-[>svg]:px-3",
      },
      radius: {
        none: "rounded-none",
        small: "rounded-sm",
        medium: "rounded-md",
        large: "rounded-lg",
        full: "rounded-full",
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
        className: "bg-primary text-primary-foreground hover:bg-primary/90",
      },
      {
        variant: "outline",
        intent: "primary",
        className: "text-primary ring-primary hover:bg-primary",
      },
      {
        variant: "bordered",
        intent: "primary",
        className:
          "text-primary ring-primary hover:bg-primary/10 hover:text-primary/80 hover:ring-primary/80",
      },
      {
        variant: "soft",
        intent: "primary",
        className:
          "bg-primary/30 text-primary/90 hover:bg-primary/20 hover:text-primary-80",
      },
      {
        variant: "ghost",
        intent: "primary",
        className: "text-primary hover:bg-primary/20 hover:text-primary-80",
      },
    ],
    defaultVariants: {
      radius: "medium",
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
  const { asChild, size, animation, variant, intent, radius, ...restProps } =
    props;

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        buttonVariants({ size, animation, variant, intent, radius }),
      )}
      {...restProps}
    />
  );
};
