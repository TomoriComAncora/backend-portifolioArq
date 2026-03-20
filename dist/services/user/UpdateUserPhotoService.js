import { prisma } from "../../prisma.js";
class UpdateUserPhotoService {
    async execute({ userId, fotoPerfil }) {
        const user = await prisma.usuario.findFirst({
            where: { id: userId },
            select: { id: true, googleId: true },
        });
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        if (user.googleId) {
            throw new Error("Conta Google não pode alterar foto de perfil");
        }
        const updated = await prisma.usuario.update({
            where: { id: userId },
            data: { fotoPerfil },
            select: {
                id: true,
                nome: true,
                email: true,
                fotoPerfil: true,
            },
        });
        return updated;
    }
}
export { UpdateUserPhotoService };
//# sourceMappingURL=UpdateUserPhotoService.js.map