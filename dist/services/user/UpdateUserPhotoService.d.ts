interface UpdateUserPhotoRequest {
    userId: string;
    fotoPerfil: string;
}
declare class UpdateUserPhotoService {
    execute({ userId, fotoPerfil }: UpdateUserPhotoRequest): Promise<{
        nome: string;
        email: string;
        fotoPerfil: string;
        id: string;
    }>;
}
export { UpdateUserPhotoService };
//# sourceMappingURL=UpdateUserPhotoService.d.ts.map