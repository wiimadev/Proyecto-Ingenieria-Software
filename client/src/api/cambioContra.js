import axios from "./axios";

export const crearCambioContraRequest = async (dataCambioContra) => axios.put("/cambioContra", dataCambioContra);
