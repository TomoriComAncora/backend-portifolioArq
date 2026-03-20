import { prisma } from "../../prisma.js";
import { hash } from "bcrypt";

interface UserRequest {
  nome: string;
  email: string;
  senha: string;
  fotoPerfil: string;
}

class CreateUserService {
  async execute({ nome, email, senha, fotoPerfil }: UserRequest) {
    if (!email) {
      throw new Error("Email inválido");
    }

    if (!fotoPerfil) {
      throw new Error("Foto de perfil obrigatória");
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
        fotoPerfil,
      },
      select: {
        id: true,
        nome: true,
        email: true,
        fotoPerfil: true,
      },
    });

    return { user };
  }
}

export { CreateUserService };
