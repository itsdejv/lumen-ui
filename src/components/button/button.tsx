import { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/utils.ts";
import { Spinner } from "./spinner.tsx";

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
        small: "text-xs h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        medium: "text-sm h-9 px-4 py-2 has-[>svg]:px-3",
        large: "text-md h-10 rounded-md px-6 has-[>svg]:px-4",
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
        className:
          "bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-primary/50 disabled:bg-primary/40 disabled:text-primary-foreground/50",
      },
      {
        variant: "outline",
        intent: "primary",
        className:
          "text-primary ring-primary hover:bg-primary disabled:text-primary/40 disabled:ring-primary/30 disabled:bg-transparent",
      },
      {
        variant: "bordered",
        intent: "primary",
        className:
          "text-primary ring-primary hover:bg-primary/10 hover:text-primary/80 hover:ring-primary/80 disabled:text-primary/40 disabled:ring-primary/20",
      },
      {
        variant: "soft",
        intent: "primary",
        className:
          "bg-primary/30 text-primary/90 hover:bg-primary/20 hover:text-primary-80 disabled:bg-primary/10 disabled:text-primary/30",
      },
      {
        variant: "ghost",
        intent: "primary",
        className:
          "text-primary hover:bg-primary/20 hover:text-primary-80 disabled:text-primary/30 disabled:bg-transparent",
      },
    ],
    defaultVariants: {
      radius: "medium",
      variant: "solid",
      size: "medium",
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
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  spinner?: ReactNode;
  isLoading?: boolean;
  loaderPosition?: "center" | "icon";
}

export const Button = (props: ButtonProps) => {
  const {
    asChild,
    size,
    animation,
    variant,
    intent,
    radius,
    children,
    startIcon,
    endIcon,
    isLoading,
    spinner,
    loaderPosition = "icon",
    ...restProps
  } = props;

  const iconSizes = {
    small: "size-3.5",
    medium: "size-4",
    large: "size-5",
  };

  const iconClass = cn(
    "inline-flex shrink-0 items-center justify-center [&_svg]:size-full",
    iconSizes[size ?? "medium"],
  );

  const Comp = asChild ? Slot : "button";
  const hiddenViaLoading =
    loaderPosition === "center" && isLoading && "invisible";

  return (
    <Comp
      disabled={props.disabled || isLoading}
      className={cn(
        buttonVariants({ size, animation, variant, intent, radius }),
        isLoading && "pointer-events-none",
      )}
      {...restProps}
    >
      {isLoading && loaderPosition === "center" && (
        <span
          className={cn(iconClass, loaderPosition === "center" && "absolute")}
        >
          {spinner ?? <Spinner />}
        </span>
      )}

      {isLoading && (
        <span className={cn(iconClass, hiddenViaLoading)}>
          {spinner ?? <Spinner />}
        </span>
      )}

      {!isLoading && startIcon && (
        <span className={cn(iconClass, hiddenViaLoading)}>{startIcon}</span>
      )}
      <span className={cn(hiddenViaLoading)}>{children}</span>
      {endIcon && (
        <span className={cn(iconClass, hiddenViaLoading)}>{endIcon}</span>
      )}
    </Comp>
  );
};
