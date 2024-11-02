import { Router } from "express";
import { crear } from "../controllers/crearCuentasDocentes.controller.js";
//import { auth } from "../middlewares/auth.middleware.js";

const router = Router();


// router.post("/crearDocente", auth, crear);
router.post("/crearDocente", crear);
export default router;