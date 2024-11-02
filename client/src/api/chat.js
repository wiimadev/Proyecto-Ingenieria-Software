import axios from "./axios";

export const getConversaciones = async (userID) => axios.get("/conversaciones/"+userID);

export const getMessages = async (id) => axios.get("/mensajes/"+id);

export const postMessages = async (data) => axios.post("/mensajes",data);