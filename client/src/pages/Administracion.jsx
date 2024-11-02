import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  Message,
  Button,
  Input,
  Label,
  ButtonLink,
} from "../components/ui";
import { loginSchema } from "../schemas/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCsv,
  faChalkboardUser,
  faPersonCirclePlus,
  faPersonCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

export function Administracion() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate("/profile");
  //   }
  // }, [isAuthenticated]);

  return (
    <div className="h-[calc(100vh-100px)] flex flex-col items-center space-y-5 justify-start">
      {/* {loginErrors.map((error, i) => (
        <Message message={error} key={i} />
      ))} */}

      <h1 className="text-3xl font-bold text-center text-cyan-950 ">
        Administración
      </h1>

      <div className="p-12 rounded-md bg-blue-300 space-y-7 border-2 border-blue-700 flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center">
          <ul className="flex space-x--1">

            <li>
              <ButtonLink to="/generar">
                {" "}
                <FontAwesomeIcon
                  icon={faFileCsv}
                  style={{ color: "#004080" }}
                />{" "}
                Añadir Estudiantes
              </ButtonLink>
            </li>
            
            <li>
              <ButtonLink to="/agregarDocentes">
                {" "}
                <FontAwesomeIcon
                  icon={faChalkboardUser}
                  style={{ color: "#004080" }}
                />{" "}
                Añadir Docentes
              </ButtonLink>
            </li>
            <li>
              <ButtonLink to="/generar">
                {" "}
                <FontAwesomeIcon
                  icon={faPersonCircleXmark}
                  style={{ color: "#004080" }}
                />{" "}
                Cancelaciones Excepcionales
              </ButtonLink>
            </li>
            <li>
              <ButtonLink to="/generar">
                {" "}
                <FontAwesomeIcon
                  icon={faPersonCirclePlus}
                  style={{ color: "#004080" }}
                />{" "}
                Matricula
              </ButtonLink>
            </li>
          </ul>
        </form>
      </div>

      {/* <p className="flex gap-x-2 justify-between">
        Don't have an account? <Link to="/register" className="text-sky-500">Sign up</Link>
      </p> */}
    </div>
  );
}
