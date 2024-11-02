import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import multer from "multer";
import authRoutes from "./routes/auth.routes.js";
import taksRoutes from "./routes/tasks.routes.js";
import { FRONTEND_URL } from "./config.js";

import generarCuentasRoutes from "./routes/generarCuentas.routes.js";
import generarCuentasDocentesRoutes from "./routes/generarCuentasDocentes.routes.js";


// NUEVO
import docentesRoutes from "./routes/docentes.routes.js";
import alumnosRoutes from "./routes/alumnos.routes.js"
import cambioContraRoutes from "./routes/cambioContra.routes.js"


import dataCrearSecciones from "./routes/dataCrearSecciones.routes.js";

import conversationsRoutes from "./routes/chat/conversations.routes.js";
import messagesRoutes from "./routes/chat/messages.routes.js";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: FRONTEND_URL,
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api", taksRoutes);
app.use("/api", generarCuentasRoutes);
app.use("/api", generarCuentasDocentesRoutes);

// NUEVO
app.use('/api',docentesRoutes);
app.use('/api',alumnosRoutes);
app.use('/api',cambioContraRoutes);


app.use('/api', dataCrearSecciones);

app.use('/api', conversationsRoutes);
app.use('/api', messagesRoutes);




if (process.env.NODE_ENV === "production") {
  const path = await import("path");
  app.use(express.static("client/dist"));

  app.get("*", (req, res) => {
    console.log(path.resolve("client", "dist", "index.html") );
    res.sendFile(path.resolve("client", "dist", "index.html"));
  });
}





export default app;
