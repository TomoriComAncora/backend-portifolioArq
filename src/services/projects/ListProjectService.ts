import { prisma } from "../../prisma.js";

class ListProjectService {
  async execute(user_id: string) {
    const projetos = await prisma.projeto.findMany({
      where: {
        usuarioId: user_id,
      },
      include: {
        ImagemProjeto: true,
      },
    });

    return { projetos };
  }
}

export { ListProjectService };
