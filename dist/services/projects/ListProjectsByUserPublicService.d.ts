interface ListProjectsByUserPublicRequest {
    userId: string;
}
declare class ListProjectsByUserPublicService {
    execute({ userId }: ListProjectsByUserPublicRequest): Promise<{
        usuario: {
            id: string;
            nome: string;
            fotoPerfil: string;
        };
        projetos: ({
            usuario: {
                id: string;
                nome: string;
                fotoPerfil: string;
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
export { ListProjectsByUserPublicService };
//# sourceMappingURL=ListProjectsByUserPublicService.d.ts.map