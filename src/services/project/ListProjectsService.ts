import { prisma } from "../../prisma.js"; 

interface IListRequest {
  categoria?: string;
}

export class ListProjectsService {
  async execute({ categoria }: IListRequest) {
    const projetos = await prisma.projeto.findMany({
      where: {
        categoria: categoria ? categoria : undefined,
      },
    });
    return projetos;
  }
}