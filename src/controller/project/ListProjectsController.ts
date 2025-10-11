import { Request, Response } from 'express';
import { ListProjectsService } from '../../services/project/ListProjectsService.js';

export class ListProjectsController {
  async handle(req: Request, res: Response) {
    const { categoria } = req.query;

    const listProjectsService = new ListProjectsService();

    try {
      const projetos = await listProjectsService.execute({ categoria: categoria as string });
      return res.json(projetos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao buscar projetos' });
    }
  }
}