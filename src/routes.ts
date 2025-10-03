// src/routes.ts

import { Router } from "express";
import { isAuthenticated } from "./middlewares/isAuthenticated.js";

// Controllers de Usuário
import { CreateUserController } from "./controller/user/CreateUserController.js";
import { AuthUserController } from "./controller/user/AuthUserController.js";
import { DetailUserController } from "./controller/user/DetailUserController.js";

// Controllers de Projeto (os seus)
import { ListProjectsController } from "./controller/project/ListProjectsController.js";
import { DetailProjectController } from "./controller/project/DetailProjectController.js";
import { ListCategoriesController } from "./controller/project/ListCategoriesController.js";

const router = Router();

// --- ROTAS DE USUÁRIO (Sessão / Cadastro Normal) ---
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

// --- ROTAS PÚBLICAS DE PROJETOS ---
router.get("/projetos", new ListProjectsController().handle);
router.get("/projetos/:id", new DetailProjectController().handle);
router.get("/categorias", new ListCategoriesController().handle);

export { router };