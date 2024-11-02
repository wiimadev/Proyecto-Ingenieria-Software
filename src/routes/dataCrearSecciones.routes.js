import { Router } from "express";
import { getDataSecciones, getDataAulas} from "../controllers/dataCrearSecciones.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();


//router.post("/crearCuenta", auth, crear);
//router.post("/crearCuenta", auth, upload.single('file'), crear);
router.post("/obtenerDatosCrearSecciones", auth, getDataSecciones);

router.post("/obtenerDatosAulas", auth, getDataAulas);

export default router;