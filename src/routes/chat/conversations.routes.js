import { Router } from "express";

import { getConversations } from "../../controllers/conversations.controller.js";

const router = Router();



// router.post("/nuevaConversacion",   crear);
router.get("/conversaciones/:usuarioID",  getConversations);

export default router;