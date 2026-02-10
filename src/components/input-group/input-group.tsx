import { ComponentProps } from "react";
import { cn } from "../../utils/utils.ts";
import { cva, VariantProps } from "class-variance-authority";
import { inputGroupAddonVariants } from "./input-group.styles.tsx";
import { InputWrapper } from "../input/input-wrapper.tsx";
import { InputGroupContext, useInputGroup } from "./input-group.context.tsx";
import { Input } from "../input/input.tsx";
import { inputWrapperVariants } from "../input/input-wrapper.styles.ts";
import { Button } from "../button";

interface InputGroupProps
  extends ComponentProps<"div">, VariantProps<typeof inputWrapperVariants> {
  disabled?: boolean;
}

const InputGroup = ({ className, disabled, ...props }: InputGroupProps) => {
  return (
    <InputGroupContext.Provider
      value={{
        isInGroup: true,
        disabled,
      }}
    >
      <InputWrapper
        data-slot="input-group"
        role="group"
        className={cn(
          "flex",
          "[&>[data-slot='input-group-addon']:first-of-type]:pl-0 [&>[data-slot='input-group-addon']:last-of-type]:pr-0",
          "**:data-[role=main-input]:px-1.5",
          className,
        )}
        {...props}
      />
    </InputGroupContext.Provider>
  );
};

interface InputGroupAddonProps
  extends ComponentProps<"div">, VariantProps<typeof inputGroupAddonVariants> {}

const InputGroupAddon = ({
  align,
  className,
  ...props
}: InputGroupAddonProps) => {
  return (
    <div
      data-slot="input-group-addon"
      role="group"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      }}
      {...props}
    ></div>
  );
};

interface InputGroupTextProps extends ComponentProps<"span"> {}

const InputGroupText = ({ className, ...props }: InputGroupTextProps) => {
  return <span className={cn(className)} {...props} />;
};

interface InputGroupInputProps extends ComponentProps<"input"> {}

const InputGroupInput = ({ className, ...props }: InputGroupInputProps) => {
  const { disabled } = useInputGroup();

  return (
    <Input
      data-slot="input-group-control"
      className={cn("flex-1", className)}
      disabled={disabled}
      {...props}
    />
  );
};

const inputGroupButtonVariants = cva(
  "gap-2 text-sm shadow-none flex items-center",
  {
    variants: {
      size: {
        small: "h-6 gap-1 px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
        medium: "",
        "icon-small": "size-6 p-0 has-[>svg]:p-0",
        "icon-medium": "size-8 p-0 has-[>svg]:p-0",
      },
    },
    defaultVariants: {
      size: "small",
    },
  },
);

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size,
  ...props
}: Omit<ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  );
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupButton,
};
