import { Request, Response } from "express";
import { ListProjectsAllService } from "../../services/projects/ListProjectsAllService.js";

class ListProjectsAllController {
  async handle(req: Request, res: Response) {
    const listProjectsAllService = new ListProjectsAllService();

    const listaTodosProjetos = await listProjectsAllService.execute();

    return res.json(listaTodosProjetos);
  }
}

export { ListProjectsAllController };
