import { Response, Request } from "express";
import { CreateUserService } from "../../services/user/CreateUserService.js";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { nome, email, senha } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Foto de perfil obrigatória" });
    }

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      nome,
      email,
      senha,
      fotoPerfil: req.file.filename,
    });

    return res.json(user);
  }
}

export { CreateUserController };
