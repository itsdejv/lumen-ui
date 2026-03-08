import { Field } from "../field/field.tsx";
import { Input } from "../input/input.tsx";
import { cn } from "../../utils/utils.ts";
import { FieldContext } from "./input-field.context.tsx";
import { cva, VariantProps } from "class-variance-authority";
import { inputWrapperVariants } from "../input/input-wrapper.styles.ts";

interface InputFieldProps extends VariantProps<typeof inputWrapperVariants> {
  label?: string;
}

const inputFieldVariants = cva("", {
  variants: {
    effect: {
      floating: cn(
        "absolute origin-left start-1.5 duration-300 scale-75 top-0.5",
        "peer-focus:scale-75 peer-focus:top-0.5 peer-focus:text-primary",
        "peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100",
      ),
    },
    intent: {},
  },
  defaultVariants: {
    effect: "floating",
  },
});

export const InputField = ({ label, ...props }: InputFieldProps) => {
  return (
    <FieldContext.Provider
      value={{
        label,
        className: {
          fieldLabel: cn(inputFieldVariants({})),
        },
      }}
    >
      <Field>
        <Input
          placeholder=""
          className="peer pt-3.5 pb-0.5 w-full"
          {...props}
        />
      </Field>
    </FieldContext.Provider>
  );
};
