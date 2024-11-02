import axios from "./axios";

export const generarCuentasRequest = async (cuentas) => axios.post("/crearCuenta", cuentas);