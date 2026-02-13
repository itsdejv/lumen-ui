import { createContext, ReactNode, useContext } from "react";

export const FieldContext = createContext<{
  label?: ReactNode;
  className?: {
    fieldLabel?: string;
  };
}>({});

export const useField = () => useContext(FieldContext);
