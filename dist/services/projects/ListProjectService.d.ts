declare class ListProjectService {
    execute(user_id: string): Promise<{
        projetos: ({
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
        })[];
    }>;
}
export { ListProjectService };
//# sourceMappingURL=ListProjectService.d.ts.map