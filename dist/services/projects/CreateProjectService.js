import { prisma } from "../../prisma.js";
class CreateProjectService {
    async execute({ titulo, descricao, categoria, imagemCapa, usuarioId, imagens = [], 
    // Recebendo novos campos
    cliente, prazo }) {
        const projeto = await prisma.projeto.create({
            data: {
                titulo: titulo,
                descricao: descricao,
                categoria: categoria,
                imagemCapa: imagemCapa,
                usuarioId: usuarioId,
                // --- SALVANDO NO BANCO ---
                cliente,
                prazo: prazo ? new Date(prazo) : null,
                ImagemProjeto: {
                    create: imagens,
                },
            },
            include: {
                ImagemProjeto: true,
            }
        });
        return { projeto };
    }
}
export { CreateProjectService };
//# sourceMappingURL=CreateProjectService.js.map