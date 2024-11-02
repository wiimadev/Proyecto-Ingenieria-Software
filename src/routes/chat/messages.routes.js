import { Router } from "express";

import { getMessages, postMessages } from "../../controllers/messages.controller.js";

const router = Router();



// router.post("/nuevaConversacion",   crear);
router.get("/mensajes/:conversacionID",  getMessages);
router.post("/mensajes",  postMessages);

export default router;