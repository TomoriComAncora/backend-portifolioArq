import { Request, Response } from 'express';
import { prisma } from "../../prisma.js"; // Ajuste o caminho se o seu prisma.ts estiver em outro lugar

export class ListCategoriesController {
  async handle(req: Request, res: Response) {
    try {
      const categorias = await prisma.projeto.findMany({
        distinct: ['categoria'],
        select: {
          categoria: true,
        },
        where: {
          categoria: {
            not: null,
          },
        },
      });

      const listaDeCategorias = categorias
        .map((item) => item.categoria)
        .filter(Boolean); // Garante que não haverá nulos na lista

      return res.json(listaDeCategorias);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao buscar categorias' });
    }
  }
}