import * as React from "react";
import { cn } from "../../utils/utils.ts";

const Label = ({ className, ...props }: React.ComponentProps<"label">) => {
  return <label data-slot="label" className={cn(className)} {...props} />;
};

export { Label };
