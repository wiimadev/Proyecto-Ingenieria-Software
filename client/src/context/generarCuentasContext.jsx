import { createContext, useContext, useState } from "react";
import { generarCuentasRequest } from "../api/generarCuentas";

const GenerarCuentasContext = createContext();

export const useGenerarCuentas = () => {
  const context = useContext(GenerarCuentasContext);
  if (!context) throw new Error("useGenerarCuentas must be used within a GenerarCuentasProvider");
  return context;
};

export function GenerarCuentasProvider({ children }) {
  const [cuentas, setCuentas] = useState([]);

  const getCuentas = async () => {
    const res = await generarCuentasRequest();
    setCuentas(res.data);
  };

  const createCuentas = async (task) => {
    try {
      const res = await generarCuentasRequest(task);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GenerarCuentasContext.Provider
      value={{
        cuentas,
        getCuentas,
        createCuentas
      }}
    >
      {children}
    </GenerarCuentasContext.Provider>
  );
}



