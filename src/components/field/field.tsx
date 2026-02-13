import { cn } from "../../utils/utils.ts";
import { Label } from "../label/label.tsx";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, useMemo } from "react";

const fieldVariants = cva(
  "data-[invalid=true]:text-error group/field flex w-full gap-2",
  {
    variants: {
      orientation: {
        vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
        horizontal:
          "flex-row items-center *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        responsive:
          "flex-col *:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:*:data-[slot=field-label]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  },
);

type FieldProps = ComponentProps<"div"> &
  VariantProps<typeof fieldVariants> & {
    required?: boolean;
  };

const Field = (props: FieldProps) => {
  const { orientation, className, ...restProps } = props;

  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...restProps}
    />
  );
};

type FieldLabelProps = ComponentProps<"label">;

const FieldLabel = (props: FieldLabelProps) => {
  const { className, children, ...restProps } = props;

  return (
    <Label
      data-slot="field-label"
      className={cn(
        "text-sm font-medium leading-none",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className,
      )}
      {...restProps}
    >
      {children}
    </Label>
  );
};

type FieldDescriptionProps = ComponentProps<"span"> & {};

const FieldDescription = ({ className, ...props }: FieldDescriptionProps) => {
  return (
    <span
      data-slot="field-description"
      className={cn(
        "text-left text-xs leading-none font-normal text-muted-foreground",
        "last:mt-0 nth-last-2:-mt-1",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        "[[data-variant=legend]+&]:-mt-1.5",
        "group-has-data-horizontal/field:text-balance",
        className,
      )}
      {...props}
    />
  );
};

const FieldError = ({
  className,
  children,
  errors,
  ...props
}: ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>;
}) => {
  const content = useMemo(() => {
    if (children) {
      return children;
    }

    if (!errors?.length) {
      return null;
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ];

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message;
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>,
        )}
      </ul>
    );
  }, [children, errors]);

  if (!content) {
    return null;
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("text-error text-xs font-normal", className)}
      {...props}
    >
      {content}
    </div>
  );
};

export { Field, FieldLabel, FieldDescription, FieldError };
