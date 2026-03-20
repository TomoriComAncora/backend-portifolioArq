import { prisma } from "../../prisma.js";

interface GoogleRequest {
  googleId: string;
  nome: string;
  email: string;
  fotoPerfil?: string;
}

class CreateUserService {
  async execute({ googleId, nome, email, fotoPerfil }: GoogleRequest) {
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
