import { prisma } from "../../prisma.js";
class CreateUserService {
    async execute({ googleId, nome, email, fotoPerfil }) {
        let user = await prisma.usuario.findFirst({
            where: {
                OR: [{ googleId: googleId }],
            },
        });
        if (!user) {
            user = await prisma.usuario.create({
                data: {
                    nome,
                    email,
                    googleId,
                    fotoPerfil,
                }
            });
        }
        return user;
    }
}
export { CreateUserService };
//# sourceMappingURL=CreateUserGoogleService.js.map