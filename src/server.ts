// src/server.ts

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import passport from "./config/passaport.js";
import path from "path";
import { dirname, extname, resolve } from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(router);
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

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