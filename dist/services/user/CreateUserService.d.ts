interface UserRequest {
    nome: string;
    email: string;
    senha: string;
    fotoPerfil: string;
}
declare class CreateUserService {
    execute({ nome, email, senha, fotoPerfil }: UserRequest): Promise<{
        user: {
            nome: string;
            email: string;
            fotoPerfil: string;
            id: string;
        };
    }>;
}
export { CreateUserService };
//# sourceMappingURL=CreateUserService.d.ts.map