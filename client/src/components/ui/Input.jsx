import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => (
  <input
    {...props}
    ref={ref}
    className="w-full bg-blue-50 text-cyan-900 pl-10 pr-4 px-4 py-2 rounded-md border-2 border-blue-700"
  />
));
