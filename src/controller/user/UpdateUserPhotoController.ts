import { Request, Response } from "express";
import { UpdateUserPhotoService } from "../../services/user/UpdateUserPhotoService.js";

class UpdateUserPhotoController {
  async handle(req: Request, res: Response) {
    const userId = req.user_id;

    if (!req.file) {
      return res.status(400).json({ error: "Foto de perfil obrigatória" });
    }

    const updateUserPhotoService = new UpdateUserPhotoService();

    try {
      const user = await updateUserPhotoService.execute({
        userId,
        fotoPerfil: req.file.filename,
      });

      return res.json(user);
    } catch (err: any) {
      const msg = err?.message || "Erro ao atualizar foto";
      const status = msg.includes("Conta Google") ? 403 : 400;
      return res.status(status).json({ error: msg });
    }
  }
}

export { UpdateUserPhotoController };
