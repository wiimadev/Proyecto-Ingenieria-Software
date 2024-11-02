import { createContext, useContext, useState } from "react";
import { crearCambioContraRequest } from "../api/cambioContra";
import { generarCuentasRequest } from "../api/generarCuentas";

const cambioContraContext = createContext();

export const useCambioContra = () => {
    const context = useContext(cambioContraContext);
    if (!context) throw new Error("Error al hacer cambio de Contra");
    return context;
  };


  export function CambioContraProvider({ children }) {
    const [cambioContra, setcambioContra] = useState([]);
  
    const getCuentas = async () => {
      const res = await generarCuentasRequest();
      setCuentas(res.data);
    };
  
    const createCambioContra = async (task) => {
      try {
        const res = await crearCambioContraRequest(task);
        return res.data; // Devuelve la respuesta del servidor
      } catch (error) {
        console.log(error);
        throw error; // Lanza el error para que pueda ser manejado en el componente
      }
    };
    
  
    return (
      <cambioContraContext.Provider
        value={{
            createCambioContra
        }}
      >
        {children}
      </cambioContraContext.Provider>
    );
  }





//   export function DocenteProvider({ children }) {
//     const [docentes, setDocentes] = useState([]);
  
//     const getCuentas = async () => {
//       const res = await generarCuentasRequest();
//       setCuentas(res.data);
//     };
  
//     const createDocentes = async (task) => {
//       try {
//         const res = await crearDocentesRequest(task);
//         console.log(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
//     return (
//       <DocenteContext.Provider
//         value={{
//           createDocentes
//         }}
//       >
//         {children}
//       </DocenteContext.Provider>
//     );
//   }