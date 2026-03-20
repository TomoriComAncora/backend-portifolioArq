interface AuthRequest {
    email: string;
    senha: string;
}
declare class AuthUserService {
    execute({ email, senha }: AuthRequest): Promise<{
        id: string;
        nome: string;
        email: string;
        token: string;
    }>;
}
export { AuthUserService };
//# sourceMappingURL=AuthUserService.d.ts.map