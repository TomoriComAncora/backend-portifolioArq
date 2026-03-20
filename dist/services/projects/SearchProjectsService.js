import { prisma } from "../../prisma.js";
export class SearchProjectsService {
    async execute({ query }) {
        const projetos = await prisma.projeto.findMany({
            where: {
                OR: [
                    {
                        titulo: {
                            contains: query,
                            mode: 'insensitive',
                        },
                    },
                    {
                        descricao: {
                            contains: query,
                            mode: 'insensitive',
                        },
                    },
                ],
            },
            select: {
                id: true,
                titulo: true,
                imagemCapa: true,
            },
        });
        return projetos;
    }
}
//# sourceMappingURL=SearchProjectsService.js.map