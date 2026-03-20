declare class DetailUserService {
    execute(user_id: string): Promise<{
        isGoogleUser: boolean;
        id: string;
        nome: string;
        email: string;
        fotoPerfil: string;
    }>;
}
export { DetailUserService };
//# sourceMappingURL=DetailUserService.d.ts.map