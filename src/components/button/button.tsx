import { ComponentProps, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/utils.ts";
import { Spinner } from "../spinner/spinner.tsx";

const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm rounded-[var(--btn-radius)]",
    "font-medium transition-all cursor-pointer active:scale-95",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--btn-color)]",
  ),
  {
    variants: {
      intent: {
        primary:
          "[--btn-color:theme(colors.primary.DEFAULT)] [--btn-fg:theme(colors.primary.foreground)]",
        secondary:
          "[--btn-color:theme(colors.secondary.DEFAULT)] [--btn-fg:theme(colors.secondary.foreground)]",
      },
      variant: {
        solid:
          "bg-[var(--btn-color)] text-[var(--btn-fg)] hover:opacity-90 disabled:bg-opacity-50",
        outline:
          "bg-transparent ring-2 ring-inset ring-[var(--btn-color)] text-[var(--btn-color)] hover:bg-[var(--btn-color)] hover:text-[var(--btn-fg)]",
        bordered:
          "bg-transparent ring-2 ring-inset ring-[var(--btn-color)] text-[var(--btn-color)] hover:bg-[var(--btn-color)]/10",
        soft: "bg-[var(--btn-color)]/20 text-[var(--btn-color)] hover:bg-[var(--btn-color)]/30",
        ghost:
          "bg-transparent text-[var(--btn-color)] hover:bg-[var(--btn-color)]/10",
      },
      size: {
        small: "text-xs h-8 px-3 has-[>svg]:px-2.5",
        medium: "text-sm h-9 px-4",
        large: "text-md h-10 px-6",
      },
      radius: {
        none: "[--btn-radius:0]",
        small: "[--btn-radius:theme(borderRadius.sm)]",
        medium: "[--btn-radius:theme(borderRadius.md)]",
        large: "[--btn-radius:theme(borderRadius.lg)]",
        full: "[--btn-radius:theme(borderRadius.full)]",
      },
      animation: {
        none: "",
        scale: "active:scale-95",
        jump: "active:translate-y-[3px] duration-[50ms]",
        ripple: "relative overflow-hidden",
      },
    },
    compoundVariants: [],
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
  extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  spinner?: ReactNode;
  isLoading?: boolean;
  loaderPosition?: "center" | "icon";
}

const Button = (props: ButtonProps) => {
  const {
    className,
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

  const isCenteredLoader = isLoading && loaderPosition === "center";
  const isIconLoader = isLoading && loaderPosition === "icon";
  const contentVisibilityClass = isCenteredLoader ? "invisible" : "";

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      disabled={props.disabled || isLoading}
      className={cn(
        buttonVariants({ size, animation, variant, intent, radius }),
        isLoading && "pointer-events-none",
        "relative",
        className,
      )}
      {...restProps}
    >
      {/* CENTER LOADER: Rendered absolutely over the hidden content */}
      {isCenteredLoader && (
        <span className={cn(iconClass, "absolute")}>
          {spinner ?? <Spinner />}
        </span>
      )}

      {/* ICON LOADER: Replaces the icon slot and maintains space in the layout */}
      {isIconLoader && (
        <span className={cn(iconClass)}>{spinner ?? <Spinner />}</span>
      )}

      {/* START ICON: Rendered only if the loader isn't already occupying the icon slot */}
      {!isIconLoader && startIcon && (
        <span className={cn(iconClass, contentVisibilityClass)}>
          {startIcon}
        </span>
      )}

      {/* CHILDREN: Main button text/content */}
      <span className={cn(contentVisibilityClass)}>{children}</span>

      {/* END ICON: Always hidden if center loader is active */}
      {endIcon && (
        <span className={cn(iconClass, contentVisibilityClass)}>{endIcon}</span>
      )}
    </Comp>
  );
};

export { Button };
