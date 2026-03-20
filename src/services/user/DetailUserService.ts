import { prisma } from "../../prisma.js";

class DetailUserService {
  async execute(user_id: string) {
    const user = await prisma.usuario.findFirst({
      where: {
        id: user_id,
      },
      select: {
        id: true,
        nome: true,
        email: true,
        fotoPerfil: true,
        googleId: true,
      },
    });

    if (!user) return null;

    const { googleId, ...rest } = user;
    return { ...rest, isGoogleUser: !!googleId };
  }
}

export { DetailUserService };
