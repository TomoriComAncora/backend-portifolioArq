import { prisma } from "../../prisma.js";
class UpdateProjectService {
    async execute(
    // Recebendo os novos campos aqui também
    { titulo, descricao, categoria, capa, imagens, imagensRemoveIds, cliente, prazo, }, { project_id }, user_id) {
        const project = await prisma.projeto.findUnique({
            where: {
                id: project_id,
            },
            include: {
                ImagemProjeto: true,
            },
        });
        if (!project) {
            throw new Error("Project not found");
        }
        if (project.usuarioId !== user_id) {
            throw new Error("Not authorized");
        }
        // --- Lógica para o PRAZO (Novo) ---
        let prazoDate = project.prazo;
        if (prazo && typeof prazo === "string" && prazo.trim() !== "") {
            prazoDate = new Date(prazo);
        }
        const updateProject = await prisma.projeto.update({
            where: { id: project_id },
            data: {
                titulo: titulo ?? project.titulo,
                descricao: descricao ?? project.descricao,
                categoria: categoria ?? project.categoria,
                imagemCapa: capa ?? project.imagemCapa,
                // --- ADICIONADO: Salvando novos campos ---
                cliente: cliente ?? project.cliente,
                prazo: prazoDate,
                // ----------------------------------------
                ImagemProjeto: {
                    ...(imagensRemoveIds?.length && {
                        deleteMany: {
                            id: { in: imagensRemoveIds },
                        },
                    }),
                    ...(imagens?.length && {
                        create: imagens.map((img) => ({
                            url: img.url,
                        })),
                    }),
                },
            },
            include: { ImagemProjeto: true },
        });
        return { updateProject };
    }
}
export { UpdateProjectService };
//# sourceMappingURL=UpdateProjectService.js.map