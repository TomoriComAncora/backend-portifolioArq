import { Request, Response } from "express";
import { ListProjectService } from "../../services/projects/ListProjectService.js";

class ListProjectController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id as string;

    const listProjectService = new ListProjectService();

    const listaProjeto = await listProjectService.execute(user_id);

    return res.json(listaProjeto);
  }
}

export { ListProjectController };
