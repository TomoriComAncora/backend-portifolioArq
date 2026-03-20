interface GoogleRequest {
    googleId: string;
    nome: string;
    email: string;
    fotoPerfil?: string;
}
declare class CreateUserService {
    execute({ googleId, nome, email, fotoPerfil }: GoogleRequest): Promise<{
        id: string;
        nome: string | null;
        email: string;
        senha: string | null;
        googleId: string | null;
        fotoPerfil: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export { CreateUserService };
//# sourceMappingURL=CreateUserGoogleService.d.ts.map