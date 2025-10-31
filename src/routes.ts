import { Router, Request, Response } from "express";
import multer from "multer";
import passport from "./config/passaport.js";
import uploadconfig from "./config/multer.js";
import { isAuthenticated } from "./middlewares/isAuthenticated.js";
import multerConfig from './config/multerconfig.js';
import multer from 'multer';

import { CreateUserController } from "./controller/user/CreateUserController.js";
import { AuthUserController } from "./controller/user/AuthUserController.js";
import { DetailUserController } from "./controller/user/DetailUserController.js";
import { CreateProjectController } from "./controller/projects/CreateProjectController.js";
import { ListProjectController } from "./controller/projects/ListProjectController.js";
import { UpdateProjectController } from "./controller/projects/UpdateProjectController.js";

import { ListProjectsController } from "./controller/project/ListProjectsController.js";
import { DetailProjectController } from "./controller/project/DetailProjectController.js";
import { ListCategoriesController } from "./controller/project/ListCategoriesController.js";
import { CreateProjectController } from './controller/project/CreateProjectController.js';
import { DeleteProjectController } from './controller/project/DeleteProjectController.js'; 
import { SearchProjectsController } from './controller/project/SearchProjectsController.js';

const router = Router();
const upload = multer(multerConfig);

const upload = multer(uploadconfig.upload("./tmp"));

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.delete(
  '/projetos/:id',
  isAuthenticated,
  new DeleteProjectController().handle
);


router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

router.post(
  "/project",
  isAuthenticated,
  upload.fields([{ name: "capa", maxCount: 1 }, { name: "imagens" }]),
  new CreateProjectController().handle
);

router.get("/project", isAuthenticated, new ListProjectController().handle);

router.put(
  "/project/:project_id",
  isAuthenticated,
  upload.fields([{ name: "capa", maxCount: 1 }, { name: "imagensAdd" }]),
  new UpdateProjectController().handle
);

export { router };
