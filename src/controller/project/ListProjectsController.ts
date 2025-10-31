import { Request, Response } from 'express';
import { ListProjectsService } from '../../services/project/ListProjectsService.js';

export class ListProjectsController {
  async handle(req: Request, res: Response) {
    // 1. Pega os parâmetros da query string
    const { categoria, page, limit } = req.query;

    // 2. Converte para número e define um valor padrão caso não sejam enviados
    const pageNumber = Number(page) || 1;
    const limitNumber = Number(limit) || 10; // Padrão de 10 itens por página

    const listProjectsService = new ListProjectsService();

    try {
      const result = await listProjectsService.execute({
        categoria: categoria as string,
        page: pageNumber,
        limit: limitNumber,
      });
      return res.json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao buscar projetos' });
    }
  }
}