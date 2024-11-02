export function Button({ onClick, children }) {
  return (
    <button
      className="bg-blue-700 px-2 py-1 w-full rounded-md my-2 disabled:bg-indigo-300 hover:bg-blue-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
