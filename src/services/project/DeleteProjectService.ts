import { prisma } from "../../prisma.js"; 
import fs from 'fs';
import path from 'path';
import multerConfig from '../../config/multerconfig.js';

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

    const filesToDelete = [
      projeto.imagemCapa,
      ...projeto.ImagemProjeto.map(img => img.url)
    ].filter(Boolean); 

    const deletePromises = filesToDelete.map(filename => {
      const filePath = path.join(multerConfig.directory, filename);
      return fs.promises.unlink(filePath).catch(err => 
        console.warn(`Arquivo não encontrado para deletar: ${filePath}`)
      );
    });

    await Promise.all(deletePromises);

    await prisma.$transaction([
      prisma.imagemProjeto.deleteMany({ where: { projetoId: projetoId } }),
      prisma.projeto.delete({ where: { id: projetoId } }),
    ]);
  }
}