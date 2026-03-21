declare class DetailUserService {
    execute(user_id: string): Promise<{
        isGoogleUser: boolean;
        nome: string;
        email: string;
        fotoPerfil: string;
        id: string;
    }>;
}
export { DetailUserService };
//# sourceMappingURL=DetailUserService.d.ts.map