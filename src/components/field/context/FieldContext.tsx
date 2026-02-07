import { createContext, useContext } from "react";

type FieldContextValue = {
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
};

export const FieldContext = createContext<FieldContextValue>({});

export const useFieldContext = () => useContext(FieldContext);
