import { prisma } from "../../prisma.js";
import { hash } from "bcrypt";

interface UserRequest {
  nome: string;
  email: string;
  senha: string;
}

class CreateUserService {
  async execute({ nome, email, senha }: UserRequest) {
    if (!email) {
      throw new Error("Email inválido");
    }

    const usuarioExistente = await prisma.usuario.findFirst({
      where: {
        email: email,
      },
    });

    if (usuarioExistente) {
      throw new Error("Email já cadastrado");
    }

    const senhaHash = await hash(senha, 8);

    const user = await prisma.usuario.create({
      data: {
        nome: nome,
        email: email,
        senha: senhaHash,
      },
      select: {
        id: true,
        nome: true,
        email: true,
      },
    });

    return { user };
  }
}

export { CreateUserService };
