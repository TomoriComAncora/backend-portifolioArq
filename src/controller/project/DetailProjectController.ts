import { Request, Response } from 'express';
import { prisma } from "../../prisma.js"; // Ajuste o caminho se o seu prisma.ts estiver em outro lugar

export class DetailProjectController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const projeto = await prisma.projeto.findUnique({
        where: {
          id: id,
        },
        include: {
          ImagemProjeto: true,
        },
      });

      if (!projeto) {
        return res.status(404).json({ message: 'Projeto não encontrado' });
      }

      return res.json(projeto);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao buscar detalhes do projeto' });
    }
  }
}