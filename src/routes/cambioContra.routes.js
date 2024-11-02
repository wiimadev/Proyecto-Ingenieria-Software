import { Router } from "express";
import { cambiarPass } from "../controllers/cambioPass.controller.js";


const router = Router();

router.put("/cambioContra", cambiarPass);
export default router;