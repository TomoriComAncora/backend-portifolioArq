interface UserRequest {
    nome: string;
    email: string;
    senha: string;
    fotoPerfil: string;
}
declare class CreateUserService {
    execute({ nome, email, senha, fotoPerfil }: UserRequest): Promise<{
        user: {
            id: string;
            nome: string;
            email: string;
            fotoPerfil: string;
        };
    }>;
}
export { CreateUserService };
//# sourceMappingURL=CreateUserService.d.ts.map