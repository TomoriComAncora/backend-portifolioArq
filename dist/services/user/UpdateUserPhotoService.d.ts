interface UpdateUserPhotoRequest {
    userId: string;
    fotoPerfil: string;
}
declare class UpdateUserPhotoService {
    execute({ userId, fotoPerfil }: UpdateUserPhotoRequest): Promise<{
        id: string;
        nome: string;
        email: string;
        fotoPerfil: string;
    }>;
}
export { UpdateUserPhotoService };
//# sourceMappingURL=UpdateUserPhotoService.d.ts.map