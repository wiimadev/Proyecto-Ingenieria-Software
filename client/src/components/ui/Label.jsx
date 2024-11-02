export function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="text-sm/[17px] block font-bold my-1 text-cyan-950">
      {children}
    </label>
  );
}
