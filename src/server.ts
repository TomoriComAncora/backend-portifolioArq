// src/server.ts

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import passport from 'passport'; // Importa a biblioteca crua

// Importa nossos dois arquivos de rota
import { router } from "./routes.js";
import { authRouter } from './routes/authRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

// Inicializa o passport globalmente
app.use(passport.initialize());

// Registra os roteadores
app.use("/auth", authRouter); // Rotas de auth sob o prefixo /auth
app.use(router);              // Outras rotas (projetos, users) na raiz

// Middleware de erro
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message });
  }
  return res.status(500).json({ status: "error", message: "Internal server error." });
});

app.listen(3333, () => {
  console.log("Servidor online, na porta 3333");
});