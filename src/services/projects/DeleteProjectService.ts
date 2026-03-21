import { prisma } from "../../prisma.js";

interface IDeleteRequest {
  projetoId: string;
  usuarioId: string;
}

export class DeleteProjectService {
  async execute({ projetoId, usuarioId }: IDeleteRequest) {
    const projeto = await prisma.projeto.findUnique({
      where: { id: projetoId },
      include: { ImagemProjeto: true },
    });

    if (!projeto) {
      throw new Error("Projeto não encontrado.");
    }

    if (projeto.usuarioId !== usuarioId) {
      throw new Error("Não autorizado.");
    }

    await prisma.$transaction([
      prisma.imagemProjeto.deleteMany({ where: { projetoId: projetoId } }),
      prisma.projeto.delete({ where: { id: projetoId } }),
    ]);
  }
}
