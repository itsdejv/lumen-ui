import { Field, FieldLabel } from "../field/field.tsx";
import { Input } from "../input/input.tsx";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/utils.ts";

const textFieldInputVariants = cva(
  cn(
    "relative outline-none",
    "focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
  ),
  {
    variants: {
      variant: {
        soft: "peer bg-[var(--input-color)]/10 hover:bg-[var(--input-color)]/20",
        ghost: cn(
          "peer bg-transparent border-b-2 border-foreground",
          "hover:bg-[var(--input-color)]/10 hover:[var(--input-color)]",
          "focus:border-[var(--input-color)] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:bg-[var(--input-color)]/10",
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
        small: "text-xs h-8 rounded-md gap-1.5 px-1.5 has-[>svg]:px-2.5",
        medium: "text-sm h-11 px-1.5 pt-4 pb-0.5 has-[>svg]:px-3",
        large: "text-md h-10 rounded-md px-1.5 has-[>svg]:px-4",
      },
      radius: {
        none: "rounded-none",
        small: "rounded-sm",
        medium: "rounded-md",
        large: "rounded-lg",
        full: "rounded-full",
      },
    },
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
        "absolute origin-left start-1.5 text-sm scale-75 top-0.5 duration-300",
        "peer-focus:text-primary peer-focus:text-sm peer-focus:scale-75 peer-focus:top-0.5",
        "peer-placeholder-shown:text-base peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2.5",
      ),
      ghost: cn(
        "absolute origin-left start-1.5 text-sm scale-75 top-0.5 duration-300",
        "peer-focus:text-primary peer-focus:text-sm peer-focus:scale-75 peer-focus:top-0.5",
        "peer-placeholder-shown:text-sm peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4",
      ),
    },
    size: {
      small: "",
      medium: "",
      large: "",
    },
  },
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
            variant === "ghost" && "rounded-b-none",
          )}
        />
        <FieldLabel
          unstyled
          className={cn(textFieldLabelVariants({ variant, size }))}
        >
          E-mail
        </FieldLabel>
      </Field>
    </div>
  );
};
