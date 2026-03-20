import { prisma } from "../../prisma.js";
export class DetailProjectService {
    async execute({ projetoId }) {
        const projeto = await prisma.projeto.findUnique({
            where: {
                id: projetoId,
            },
            include: {
                ImagemProjeto: true,
                usuario: {
                    select: {
                        nome: true,
                        email: true,
                    },
                },
            },
        });
        if (!projeto) {
            throw new Error("Projeto não encontrado.");
        }
        return projeto;
    }
}
//# sourceMappingURL=DetailProjectService.js.map