interface ListProjectsByUserPublicRequest {
    userId: string;
}
declare class ListProjectsByUserPublicService {
    execute({ userId }: ListProjectsByUserPublicRequest): Promise<{
        usuario: {
            nome: string;
            fotoPerfil: string;
            id: string;
        };
        projetos: ({
            usuario: {
                nome: string;
                fotoPerfil: string;
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
export { ListProjectsByUserPublicService };
//# sourceMappingURL=ListProjectsByUserPublicService.d.ts.map