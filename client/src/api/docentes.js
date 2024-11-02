

import axios from "./axios";

export const crearDocentesRequest = async (dataDocente) => axios.post("/crearDocente", dataDocente);
