import { UpdateProjectService } from "../../services/projects/UpdateProjectService.js";
import crypto from "crypto";
import { uploadPublicFile } from "../../lib/supabaseStorage.js";
class UpdateProjectController {
    async handle(req, res) {
        const { titulo, descricao, categoria, cliente, prazo } = req.body;
        const { project_id } = req.params;
        const user_id = req.user_id;
        const files = req.files;
        const uploadId = crypto.randomBytes(12).toString("hex");
        let capa = null;
        if (files?.capa?.[0]) {
            const c = files.capa[0];
            const fileExt = (c.originalname.split(".").pop() || "").toLowerCase();
            const safeExt = fileExt ? `.${fileExt}` : "";
            const objectPath = `projects/${user_id}/${uploadId}/capa-${crypto
                .randomBytes(8)
                .toString("hex")}${safeExt}`;
            const up = await uploadPublicFile({
                path: objectPath,
                body: c.buffer,
                contentType: c.mimetype,
            });
            capa = up.publicUrl;
        }
        const imagens = files?.imagens
            ? await Promise.all(files.imagens.map(async (file) => {
                const fileExt = (file.originalname.split(".").pop() || "").toLowerCase();
                const safeExt = fileExt ? `.${fileExt}` : "";
                const objectPath = `projects/${user_id}/${uploadId}/img-${crypto
                    .randomBytes(8)
                    .toString("hex")}${safeExt}`;
                const up = await uploadPublicFile({
                    path: objectPath,
                    body: file.buffer,
                    contentType: file.mimetype,
                });
                return { url: up.publicUrl };
            }))
            : undefined;
        let imagensRemoveIds = [];
        if (req.body.imagensRemoveIds) {
            try {
                imagensRemoveIds = JSON.parse(req.body.imagensRemoveIds);
            }
            catch {
                imagensRemoveIds = [];
            }
        }
        const updateProjectService = new UpdateProjectService();
        const project = await updateProjectService.execute({
            titulo,
            descricao,
            categoria,
            capa,
            imagens,
            imagensRemoveIds,
            // --- ADICIONADO: Passando os novos campos para o serviço ---
            cliente,
            prazo,
        }, { project_id }, user_id);
        return res.json(project);
    }
}
export { UpdateProjectController };
//# sourceMappingURL=UpdateProjectController.js.map