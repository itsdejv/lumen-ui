import { cn } from "../../utils/utils.ts";
import { Label } from "../label/label.tsx";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { FieldContext, useFieldContext } from "./context/FieldContext.tsx";

const fieldVariants = cva("group/field flex w-full", {
  variants: {
    orientation: {
      vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
      horizontal:
        "flex-row items-center *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      responsive:
        "flex-col *:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:*:data-[slot=field-label]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
    },
    spacing: {
      none: "gap-0",
      compact: "gap-1",
      normal: "gap-2",
      relaxed: "gap-3",
      loose: "gap-4",
    },
  },
  defaultVariants: {
    orientation: "vertical",
    spacing: "normal",
  },
});

export type FieldProps = ComponentProps<"div"> &
  VariantProps<typeof fieldVariants> & {
    unstyled?: boolean;
    error?: boolean;
    disabled?: boolean;
    required?: boolean;
  };

export const Field = (props: FieldProps) => {
  const {
    unstyled,
    orientation,
    spacing,
    error,
    disabled,
    required,
    className,
    ...restProps
  } = props;

  return (
    <FieldContext.Provider value={{ error, required, disabled }}>
      <div
        role="group"
        data-slot="field"
        data-orientation={orientation}
        data-invalid={error}
        className={cn(
          !unstyled && fieldVariants({ orientation, spacing }),
          error && "data-[invalid=true]:text-error",
          className,
        )}
        {...restProps}
      />
    </FieldContext.Provider>
  );
};

const fieldLabelVariants = cva(
  cn(
    "text-sm font-medium leading-none text-foreground",
    "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ),
  {
    variants: {
      variant: {
        error: "text-error",
      },
    },
  },
);

export type FieldLabelProps = ComponentProps<"label"> &
  VariantProps<typeof fieldLabelVariants> & {
    unstyled?: boolean;
  };

export const FieldLabel = (props: FieldLabelProps) => {
  const { className, children, unstyled, variant, ...restProps } = props;
  const { error, required } = useFieldContext();

  const activeVariant = variant || (error ? "error" : undefined);

  return (
    <Label
      data-slot="field-label"
      className={cn(
        !unstyled && cn(fieldLabelVariants({ variant: activeVariant })),
        className,
      )}
      {...restProps}
    >
      {children}
      {required && <span className="text-destructive ml-0.5">*</span>}
    </Label>
  );
};

const fieldDescriptionVariants = cva(
  cn(
    "text-left text-sm leading-normal font-normal",
    "last:mt-0 nth-last-2:-mt-1",
    "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
    "[[data-variant=legend]+&]:-mt-1.5",
    "group-has-data-horizontal/field:text-balance",
  ),
  {
    variants: {
      variant: {
        muted: "text-muted-foreground",
        error: "text-error",
        warning: "text-warning",
        success: "text-success",
      },
    },
    defaultVariants: {
      variant: "muted",
    },
  },
);

export type FieldMessageProps = ComponentProps<"span"> &
  VariantProps<typeof fieldDescriptionVariants> & {
    unstyled?: boolean;
  };

export const FieldDescription = (props: FieldMessageProps) => {
  const { unstyled, className, variant, ...restProps } = props;
  const { error } = useFieldContext();

  const computedVariant = error && !variant ? "error" : variant;

  return (
    <span
      data-slot="field-description"
      className={cn(
        !unstyled && fieldDescriptionVariants({ variant: computedVariant }),
        className,
      )}
      {...restProps}
    />
  );
};
