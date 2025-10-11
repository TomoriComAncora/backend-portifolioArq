import { prisma } from "../../prisma.js"; 

interface IProjectRequest {
  titulo: string;
  descricao?: string;
  categoria?: string;
  usuarioId: string;
  imagemCapa: Express.Multer.File;
  imagensExtras: Express.Multer.File[];
}

export class CreateProjectService { 
  async execute({ 
    titulo, 
    descricao, 
    categoria, 
    usuarioId, 
    imagemCapa, 
    imagensExtras 
  }: IProjectRequest) {


    if (!titulo) {
      throw new Error("Título é obrigatório.");
    }
    if (!imagemCapa) {
      throw new Error("Imagem de capa é obrigatória.");
    }

    const projeto = await prisma.projeto.create({
      data: {
        titulo,
        descricao,
        categoria,
        imagemCapa: imagemCapa.filename,
        usuarioId: usuarioId,
        ImagemProjeto: {
          create: imagensExtras.map(file => ({
            url: file.filename,
            legenda: '',
          })),
        },
      },
      include: {
        ImagemProjeto: true,
      }
    });
    
    return projeto;
  }
}