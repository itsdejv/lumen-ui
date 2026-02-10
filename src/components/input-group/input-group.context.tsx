import { createContext, useContext } from "react";

interface InputGroupContext {
  isInGroup: boolean;
  disabled?: boolean;
}

export const InputGroupContext = createContext<InputGroupContext>({
  isInGroup: false,
  disabled: false,
});

export const useInputGroup = () => useContext(InputGroupContext);
