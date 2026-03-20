interface ImageRequest {
    url: string;
}
interface ProjectRequest {
    titulo?: string;
    descricao?: string;
    categoria?: string;
    capa?: string;
    imagens?: ImageRequest[];
    imagensRemoveIds?: string[];
    cliente?: string;
    prazo?: string;
}
interface ProjectId {
    project_id: string;
}
declare class UpdateProjectService {
    execute({ titulo, descricao, categoria, capa, imagens, imagensRemoveIds, cliente, prazo, }: ProjectRequest, { project_id }: ProjectId, user_id: string): Promise<{
        updateProject: {
            ImagemProjeto: {
                id: string;
                createdAt: Date;
                url: string;
                projetoId: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            titulo: string;
            descricao: string;
            categoria: string;
            imagemCapa: string;
            usuarioId: string;
            cliente: string | null;
            prazo: Date | null;
        };
    }>;
}
export { UpdateProjectService };
//# sourceMappingURL=UpdateProjectService.d.ts.map