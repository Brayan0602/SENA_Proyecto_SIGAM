import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();

const app = express();

// Conexión MongoDB
await connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use(
  "/api/estudiantes",
  studentRoutes
);

// Ruta de prueba
app.get("/", (req, res) => {

  res.json({
    mensaje: "Servidor SIGAM funcionando"
  });

});

// Puerto
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Servidor corriendo en puerto ${PORT}`
  );

});
