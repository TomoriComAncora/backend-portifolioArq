declare class ListProjectsAllService {
    execute(): Promise<{
        projetos: ({
            usuario: {
                nome: string;
                id: string;
            };
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
export { ListProjectsAllService };
//# sourceMappingURL=ListProjectsAllService.d.ts.map