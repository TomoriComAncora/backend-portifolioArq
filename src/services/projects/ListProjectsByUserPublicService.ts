import { prisma } from "../../prisma.js";

interface ListProjectsByUserPublicRequest {
  userId: string;
}

class ListProjectsByUserPublicService {
  async execute({ userId }: ListProjectsByUserPublicRequest) {
    const projetos = await prisma.projeto.findMany({
      where: {
        usuarioId: userId,
      },
      include: {
        ImagemProjeto: true,
        usuario: {
          select: {
            id: true,
            nome: true,
            fotoPerfil: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const usuario = projetos[0]?.usuario ?? null;

    return { usuario, projetos };
  }
}

export { ListProjectsByUserPublicService };
