import { Request, Response } from "express";
import { UpdateUserPhotoService } from "../../services/user/UpdateUserPhotoService.js";
import crypto from "crypto";
import { uploadPublicFile } from "../../lib/supabaseStorage.js";

class UpdateUserPhotoController {
  async handle(req: Request, res: Response) {
    const userId = req.user_id;

    if (!req.file) {
      return res.status(400).json({ error: "Foto de perfil obrigatória" });
    }

    const updateUserPhotoService = new UpdateUserPhotoService();

    const fileExt = (req.file.originalname.split(".").pop() || "").toLowerCase();
    const safeExt = fileExt ? `.${fileExt}` : "";
    const objectPath = `users/${crypto.randomBytes(16).toString("hex")}${safeExt}`;
    const { publicUrl } = await uploadPublicFile({
      path: objectPath,
      body: req.file.buffer,
      contentType: req.file.mimetype,
    });

    try {
      const user = await updateUserPhotoService.execute({
        userId,
        fotoPerfil: publicUrl,
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
