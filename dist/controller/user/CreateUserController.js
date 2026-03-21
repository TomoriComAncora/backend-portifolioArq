import { CreateUserService } from "../../services/user/CreateUserService.js";
import crypto from "crypto";
import { uploadPublicFile } from "../../lib/supabaseStorage.js";
class CreateUserController {
    async handle(req, res) {
        const { nome, email, senha } = req.body;
        if (!req.file) {
            return res.status(400).json({ error: "Foto de perfil obrigatória" });
        }
        const fileExt = (req.file.originalname.split(".").pop() || "").toLowerCase();
        const safeExt = fileExt ? `.${fileExt}` : "";
        const objectPath = `users/${crypto.randomBytes(16).toString("hex")}${safeExt}`;
        const { publicUrl } = await uploadPublicFile({
            path: objectPath,
            body: req.file.buffer,
            contentType: req.file.mimetype,
        });
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({
            nome,
            email,
            senha,
            fotoPerfil: publicUrl,
        });
        return res.json(user);
    }
}
export { CreateUserController };
//# sourceMappingURL=CreateUserController.js.map