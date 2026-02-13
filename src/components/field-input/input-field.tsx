import { Field } from "../field/field.tsx";
import { Input } from "../input/input.tsx";
import { cn } from "../../utils/utils.ts";
import { FieldContext } from "./input-field.context.tsx";

interface InputFieldProps {
  label?: string;
}

export const InputField = ({ label }: InputFieldProps) => {
  return (
    <FieldContext.Provider
      value={{
        label,
        className: {
          fieldLabel: cn(
            "absolute origin-left start-1.5 top-0 duration-300 scale-75 top-1",
            "peer-focus:scale-75 peer-focus:top-1 peer-focus:text-primary",
            "peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100",
          ),
        },
      }}
    >
      <Field>
        <Input placeholder="Test label" className="peer pt-4 pb-0" />
      </Field>
    </FieldContext.Provider>
  );
};
