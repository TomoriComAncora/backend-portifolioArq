import { Request, Response } from 'express';
import { prisma } from "../../prisma.js"; 

export class ListProjectsController {
  async handle(req: Request, res: Response) {
    const { categoria } = req.query;

    try {
      const projetos = await prisma.projeto.findMany({
        where: {
          categoria: categoria ? String(categoria) : undefined,
        },
      });
      return res.json(projetos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao buscar projetos' });
    }
  }
}