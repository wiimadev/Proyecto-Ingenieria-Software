import { Router } from "express";

import { cargarImagenAlumnos } from "../controllers/alumnos.controller.js";

import { subirImgAlumnos } from "../middlewares/subirArchivos.middleware.js";

const router = Router();

router.post('/alumnos/subirImagen', subirImgAlumnos.single('file'), cargarImagenAlumnos);


export default router;