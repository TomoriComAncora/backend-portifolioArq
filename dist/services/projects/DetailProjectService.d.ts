interface IDetailRequest {
    projetoId: string;
}
export declare class DetailProjectService {
    execute({ projetoId }: IDetailRequest): Promise<{
        usuario: {
            nome: string;
            email: string;
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
    }>;
}
export {};
//# sourceMappingURL=DetailProjectService.d.ts.map