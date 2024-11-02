import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { loginSchema } from "../schemas/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { signin, errors: loginErrors, isAuthenticated, user} = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  useEffect(() => {

    if (isAuthenticated  && user?.tipo ==="Alumno") {
      console.log(user?.tipo)
      navigate("/profile");
    }


    if (isAuthenticated  && user?.tipo ==="Docente") {
      console.log(user?.tipo)
      navigate("/profileDocente");
    }
   
    if (isAuthenticated  && user?.tipo ==="Administrador") {
      console.log(user?.tipo)
      navigate("/administracion");
    }

    if (isAuthenticated  && user?.tipo ==="Coordinador") {
      console.log(user?.tipo)
      navigate("/profileCoordinador");
    }
   
    if (isAuthenticated  && user?.tipo ==="Jefe de Departamento") {
      console.log(user?.tipo)
      navigate("/profileJefe");
    }

  }, [isAuthenticated]);

  return (
    <div className="h-[calc(100vh-100px)] flex flex-col items-center justify-center">
      
        {loginErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
      
    <div className="p-28 rounded-md bg-blue-300 space-y-0 border-2 border-blue-700 flex flex-col justify-center items-center">
    <h1 className="text-3xl font-bold text-center text-cyan-950 ">
         Iniciar Sesión
      </h1>
    <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="email">Correo Institucional:</Label>
        <div className="relative">
        <Input 
            label="Write your email"
            type="email"
            name="email"
            placeholder="Escribe tu correo"
            {...register("email", { required: true })}
           />
           <FontAwesomeIcon
              icon={faEnvelope}
              size="xl"
              className="absolute left-3 top-2 text-blue-700"
            />
          <p>{errors.email?.message}</p>
        </div>

          <Label htmlFor="password">Contraseña:</Label>
        <div className="relative">
        <Input
            type="password"
            name="password"
            placeholder="Escribe tu contraseña"
            {...register("password", { required: true, minLength: 6 })}
          />
         <FontAwesomeIcon
              icon={faKey}
              size="xl"
              className="absolute left-3 top-2 text-blue-700"
            />
          <p>{errors.password?.message}</p>
        </div>

          <Button>Iniciar Sesion</Button>
        </form>
    </div>
        

        {/* <p className="flex gap-x-2 justify-between">
          Don't have an account? <Link to="/register" className="text-sky-500">Sign up</Link>
        </p> */}
      
    </div>
  );
}
