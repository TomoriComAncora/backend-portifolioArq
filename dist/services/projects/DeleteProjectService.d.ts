interface IDeleteRequest {
    projetoId: string;
    usuarioId: string;
}
export declare class DeleteProjectService {
    execute({ projetoId, usuarioId }: IDeleteRequest): Promise<void>;
}
export {};
//# sourceMappingURL=DeleteProjectService.d.ts.map