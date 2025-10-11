import { Router } from "express";
import { isAuthenticated } from "./middlewares/isAuthenticated.js";
import multerConfig from './config/multerconfig.js';
import multer from 'multer';

import { CreateUserController } from "./controller/user/CreateUserController.js";
import { AuthUserController } from "./controller/user/AuthUserController.js";
import { DetailUserController } from "./controller/user/DetailUserController.js";

import { ListProjectsController } from "./controller/project/ListProjectsController.js";
import { DetailProjectController } from "./controller/project/DetailProjectController.js";
import { ListCategoriesController } from "./controller/project/ListCategoriesController.js";
import { CreateProjectController } from './controller/project/CreateProjectController.js';
import { DeleteProjectController } from './controller/project/DeleteProjectController.js'; 

const router = Router();
const upload = multer(multerConfig);

router.post(
  '/projetos',
  isAuthenticated, 
  upload.fields([ 
    { name: 'imagemCapa', maxCount: 1 },
    { name: 'imagensExtras', maxCount: 5 }
  ]),
   new CreateProjectController().handle
);

router.delete(
  '/projetos/:id',
  isAuthenticated,
  new DeleteProjectController().handle
);


router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

router.get("/projetos", new ListProjectsController().handle);
router.get("/projetos/:id", new DetailProjectController().handle);
router.get("/categorias", new ListCategoriesController().handle);

export { router };