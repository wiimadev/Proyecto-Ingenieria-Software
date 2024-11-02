import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  const renderMenuItems = () => {
    if (isAuthenticated) {
      switch (user?.type) {
        case "estudiante":
          return (
            <>
              <li>
                Welcome {user.username}
              </li>
              <li>
                <ButtonLink to="/add-task">Add Task</ButtonLink>
              </li>
              <li>
                <Link to="/" onClick={() => logout()}>
                  Logout
                </Link>
              </li>
            </>
          );
        case "user":
          return (
            <>
              <li>
                Welcome {user.username}
              </li>
              <li>
                {/* Opciones específicas para usuarios */}
              </li>
            </>
          );
        default:
          return null; // No se muestra ningún elemento si el tipo de usuario no coincide
      }
    } else {
      return (
        <>
          <li>
            <ButtonLink to="/login">Login</ButtonLink>
          </li>
          <li>
            <ButtonLink to="/register">Register</ButtonLink>
          </li>
        </>
      );
    }
  };

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <h1 className="text-2xl font-bold">
        <Link to={isAuthenticated ? "/tasks" : "/"}>UNAH</Link>
      </h1>
      <ul className="flex gap-x-2">
        {renderMenuItems()}
      </ul>
    </nav>
  );
}

