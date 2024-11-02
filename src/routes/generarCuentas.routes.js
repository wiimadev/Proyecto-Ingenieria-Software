import { Router } from "express";
import { getEmployees, crear, upload} from "../controllers/crearCuentas.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();


//router.post("/crearCuenta", auth, crear);
//router.post("/crearCuenta", auth, upload.single('file'), crear);
router.post("/crearCuenta", auth, upload.single('file'), crear);
router.get("/getEmployees", auth, getEmployees);

export default router;
