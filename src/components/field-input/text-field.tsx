import { Field, FieldLabel } from "../field/field.tsx";
import { Input } from "../input/input.tsx";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/utils.ts";

const textFieldInputVariants = cva(
  cn(
    "h-[var(--input-height)] px-[var(--input-px)] pt-[var(--input-pt)]",
    "relative outline-none",
    "focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
  ),
  {
    variants: {
      variant: {
        soft: "peer bg-[var(--input-color)]/10 hover:bg-[var(--input-color)]/20",
        underline: cn(
          "peer bg-transparent bg-[length:100%_2px] bg-no-repeat bg-bottom duration-300 ease-in-out",
          "bg-gradient-to-r from-[var(--input-color)] to-[var(--input-color)]",
          "hover:bg-[var(--input-color)]/10 hover:[var(--input-color)]",
          "focus:border-[var(--input-color)] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:bg-[var(--input-color)]/10",
        ),
        "hover-underline": cn(
          "peer bg-transparent bg-[length:0%_2px] bg-no-repeat bg-bottom transition-[background-size] duration-300 ease-in-out",
          "bg-gradient-to-r from-[var(--input-color)] to-[var(--input-color)]",
          "hover:bg-[var(--input-color)]/10 hover:bg-[length:100%_2px]",
          "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:bg-[var(--input-color)]/10 focus-visible:bg-[length:100%_2px]",
        ),
      },
      intent: {
        primary: "[--input-color:var(--color-primary)]",
        secondary: "[--input-color:var(--color-secondary)]",
        error: "[--input-color:var(--color-error)]",
        success: "[--input-color:var(--color-success)]",
        warning: "[--input-color:var(--color-warning)]",
      },
      size: {
        small:
          "[--input-height:theme(spacing.9)] [--input-px:theme(spacing.[1.5])] [--input-pt:theme(spacing.3)]",
        medium:
          "[--input-height:theme(spacing.11)] [--input-px:theme(spacing.[1.5])] [--input-pt:theme(spacing.3)]",
        large:
          "[--input-height:theme(spacing.14)] [--input-px:theme(spacing.[1.5])] [--input-pt:theme(spacing.4)]",
      },
      radius: {
        none: "rounded-none",
        small: "rounded-sm",
        medium: "rounded-md",
        large: "rounded-lg",
        full: "rounded-full",
      },
    },
    compoundVariants: [
      {
        variant: "soft",
        radius: "full",
        className: "pl-4",
      },
      {
        variant: "underline",
        radius: "full",
        className: "rounded-xl",
      },
    ],
    defaultVariants: {
      variant: "soft",
      intent: "primary",
      radius: "medium",
      size: "medium",
    },
  },
);

const textFieldLabelVariants = cva(cn(), {
  variants: {
    variant: {
      soft: cn(
        "absolute origin-left start-1.5 text-[length:var(--input-text-size)] scale-75 top-[var(--input-label-top)] duration-300",
        "peer-focus:text-primary peer-focus:text-[length:var(--input-text-size)] peer-focus:scale-75 peer-focus:top-[var(--input-label-top)]",
        "peer-placeholder-shown:text-[length:var(--input-text-size)] peer-placeholder-shown:scale-100 peer-placeholder-shown:top-[var(--input-placeholder-shown)]",
      ),
      underline: cn(
        "absolute origin-left start-1.5 text-[length:var(--input-text-size)] scale-75 top-[var(--input-label-top)] duration-300",
        "peer-focus:text-primary peer-focus:text-[length:var(--input-text-size)] peer-focus:scale-75 peer-focus:top-[var(--input-label-top)]",
        "peer-placeholder-shown:text-[length:var(--input-text-size)] peer-placeholder-shown:scale-100 peer-placeholder-shown:top-[var(--input-placeholder-shown)]",
      ),
      "hover-underline": cn(
        "absolute origin-left start-1.5 text-[length:var(--input-text-size)] scale-75 top-[var(--input-label-top)] duration-300",
        "peer-focus:text-primary peer-focus:text-[length:var(--input-text-size)] peer-focus:scale-75 peer-focus:top-[var(--input-label-top)]",
        "peer-placeholder-shown:text-[length:var(--input-text-size)] peer-placeholder-shown:scale-100 peer-placeholder-shown:top-[var(--input-placeholder-shown)]",
      ),
    },
    radius: {
      none: "",
      small: "",
      medium: "",
      large: "",
      full: "",
    },
    size: {
      small:
        "[--input-text-size:theme(fontSize.sm)] [--input-label-top:calc(theme(spacing.[0.5])*-1)] [--input-placeholder-shown:theme(spacing.3)]",
      medium:
        "[--input-text-size:theme(fontSize.sm)] [--input-label-top:theme(spacing.[0.5])] [--input-placeholder-shown:theme(spacing.4)]",
      large:
        "[--input-text-size:theme(fontSize.base)] [--input-label-top:theme(spacing.[0.5])] [--input-placeholder-shown:theme(spacing.6)]",
    },
  },
  compoundVariants: [
    {
      variant: "soft",
      radius: "full",
      className: "start-4",
    },
    {
      variant: "soft",
      size: "small",
      className: "[--input-placeholder-shown:theme(spacing.2)]",
    },
    {
      variant: "soft",
      size: "medium",
      className: "[--input-placeholder-shown:theme(spacing.3)]",
    },
    {
      variant: "soft",
      size: "large",
      className: "[--input-placeholder-shown:theme(spacing.4)]",
    },
  ],
  defaultVariants: {
    variant: "soft",
    size: "medium",
  },
});

interface TextFieldProps extends VariantProps<typeof textFieldInputVariants> {
  error?: boolean;
}

export const TextField = (props: TextFieldProps) => {
  const { variant, size, radius, error } = props;

  return (
    <div className="flex">
      <Field unstyled error={error} className="relative">
        <Input
          unstyled
          placeholder=" "
          className={cn(
            textFieldInputVariants({ radius, variant, size }),
            variant === "underline" && "rounded-b-none",
            variant === "hover-underline" && "rounded-b-none",
          )}
        />
        <FieldLabel
          unstyled
          className={cn(textFieldLabelVariants({ variant, size, radius }))}
        >
          E-mail
        </FieldLabel>
      </Field>
    </div>
  );
};
