interface GoogleRequest {
    googleId: string;
    nome: string;
    email: string;
    fotoPerfil?: string;
}
declare class CreateUserService {
    execute({ googleId, nome, email, fotoPerfil }: GoogleRequest): Promise<{
        googleId: string | null;
        nome: string | null;
        email: string;
        fotoPerfil: string | null;
        id: string;
        senha: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export { CreateUserService };
//# sourceMappingURL=CreateUserGoogleService.d.ts.map