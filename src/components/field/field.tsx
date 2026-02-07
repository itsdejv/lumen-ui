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
    error?: boolean;
    disabled?: boolean;
    required?: boolean;
  };

export const Field = (props: FieldProps) => {
  const {
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
          fieldVariants({ orientation, spacing }),
          error && "data-[invalid=true]:text-destructive",
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
);

export type FieldLabelProps = ComponentProps<"label">;

export const FieldLabel = (props: FieldLabelProps) => {
  const { className, children, ...restProps } = props;
  const { error, required } = useFieldContext();

  return (
    <Label
      data-slot="field-label"
      className={cn(
        fieldLabelVariants(),
        error && "text-destructive",
        className,
      )}
      {...restProps}
    >
      {children}
      {required && <span className="text-destructive ml-0.5">*</span>}
    </Label>
  );
};

const fieldMessageVariants = cva(
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

export type FieldMessageProps = ComponentProps<"p"> &
  VariantProps<typeof fieldMessageVariants>;

export const FieldDescription = (props: FieldMessageProps) => {
  const { className, variant, ...restProps } = props;
  const { error } = useFieldContext();

  const computedVariant = error && !variant ? "error" : variant;

  return (
    <p
      data-slot="field-description"
      className={cn(
        fieldMessageVariants({ variant: computedVariant }),
        className,
      )}
      {...restProps}
    />
  );
};

export const FieldError = (props: Omit<FieldMessageProps, "variant">) => {
  const { className, ...restProps } = props;

  return (
    <p
      data-slot="field-error"
      role="alert"
      className={cn(
        fieldMessageVariants({ variant: "error" }),
        "flex items-center gap-1.5",
        className,
      )}
      {...restProps}
    >
      <svg
        className="h-3.5 w-3.5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {props.children}
    </p>
  );
};

export const FieldWarning = (props: Omit<FieldMessageProps, "variant">) => {
  const { className, ...restProps } = props;

  return (
    <p
      data-slot="field-warning"
      className={cn(
        fieldMessageVariants({ variant: "warning" }),
        "flex items-center gap-1.5",
        className,
      )}
      {...restProps}
    >
      <svg
        className="h-3.5 w-3.5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      {props.children}
    </p>
  );
};

export const FieldSuccess = (props: Omit<FieldMessageProps, "variant">) => {
  const { className, ...restProps } = props;

  return (
    <p
      data-slot="field-success"
      className={cn(
        fieldMessageVariants({ variant: "success" }),
        "flex items-center gap-1.5",
        className,
      )}
      {...restProps}
    >
      <svg
        className="h-3.5 w-3.5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {props.children}
    </p>
  );
};
