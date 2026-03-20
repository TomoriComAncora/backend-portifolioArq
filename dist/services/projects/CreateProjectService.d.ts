interface ImageRequest {
    url: string;
}
interface ProjectRequest {
    titulo: string;
    descricao: string;
    categoria: string;
    imagemCapa: string;
    usuarioId: string;
    imagens?: ImageRequest[];
    cliente?: string;
    prazo?: string;
}
declare class CreateProjectService {
    execute({ titulo, descricao, categoria, imagemCapa, usuarioId, imagens, cliente, prazo }: ProjectRequest): Promise<{
        projeto: {
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
export { CreateProjectService };
//# sourceMappingURL=CreateProjectService.d.ts.map