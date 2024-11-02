import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children }) => (
  <Link to={to} className="bg-white px-3 py-2 rounded-md text-blue-700 mr-2 border-2 border-blue-700">
    {children}
  </Link>
);
