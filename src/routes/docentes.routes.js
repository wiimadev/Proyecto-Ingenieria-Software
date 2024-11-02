import { Router } from "express";

import { cargarImagenDocentes } from "../controllers/docentes.controller.js";

import { subirImgDocentes } from "../middlewares/subirArchivos.middleware.js";

const router = Router();

router.post('/docentes/subirImagen', subirImgDocentes.single('file'), cargarImagenDocentes);


export default router;