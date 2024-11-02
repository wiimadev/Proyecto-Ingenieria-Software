import { createContext, useContext, useState } from "react";
 import { generarCuentasRequest } from "../api/generarCuentas";
 import { crearDocentesRequest } from "../api/docentes";

 const DocenteContext = createContext();

 export const useDocentes = () => {
    const context = useContext(DocenteContext);
    if (!context) throw new Error("error al generar cuenta docente");
    return context;
  };

  export function DocenteProvider({ children }) {
    const [docentes, setDocentes] = useState([]);
  
    const getCuentas = async () => {
      const res = await generarCuentasRequest();
      setCuentas(res.data);
    };
  
    const createDocentes = async (task) => {
      try {
        const res = await crearDocentesRequest(task);
        return res.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    };
  
    return (
      <DocenteContext.Provider
        value={{
          createDocentes
        }}
      >
        {children}
      </DocenteContext.Provider>
    );
  }


  // const createCambioContra = async (task) => {
  //   try {
  //     const res = await crearCambioContraRequest(task);
  //     return res.data; // Devuelve la respuesta del servidor
  //   } catch (error) {
  //     console.log(error);
  //     throw error; // Lanza el error para que pueda ser manejado en el componente
  //   }
  // };