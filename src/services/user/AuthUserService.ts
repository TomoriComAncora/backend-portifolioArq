import { prisma } from "../../prisma.js";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

interface AuthRequest {
  email: string;
  senha: string;
}

class AuthUserService {
  async execute({ email, senha }: AuthRequest) {
    const user = await prisma.usuario.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("Email/senha incorreto!");
    }

    const senhaCorreta = compare(senha, user.senha);

    if (!senhaCorreta) {
      throw new Error("Email/senha incorreto!");
    }

    const token = jwt.sign(
      {
        nome: user.nome,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );
    return {
      id: user.id,
      nome: user.nome,
      email: user.email,
      token: token,
    };
  }
}

export { AuthUserService };
