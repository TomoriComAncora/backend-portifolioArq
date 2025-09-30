import { prisma } from "../../prisma.js";

interface GoogleRequest {
  googleId: string;
  nome: string;
  email: string;
}

class CreateUserService {
  async execute({ googleId, nome, email }: GoogleRequest) {
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
        }
      });
    }

    return user;
  }
}

export { CreateUserService };
