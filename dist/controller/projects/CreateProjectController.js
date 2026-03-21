import { CreateProjectService } from "../../services/projects/CreateProjectService.js";
import crypto from "crypto";
import { uploadPublicFile } from "../../lib/supabaseStorage.js";
class CreateProjectController {
    async handle(req, res) {
        const { titulo, descricao, categoria, cliente, prazo } = req.body;
        const usuarioId = req.user_id;
        if (!req.files) {
            throw new Error("error upload file");
        }
        else {
            const files = req.files;
            const capa = files["capa"]?.[0];
            const imagens = files["imagens"];
            const uploadId = crypto.randomBytes(12).toString("hex");
            let imagemCapa = "";
            if (capa) {
                const fileExt = (capa.originalname.split(".").pop() || "").toLowerCase();
                const safeExt = fileExt ? `.${fileExt}` : "";
                const objectPath = `projects/${usuarioId}/${uploadId}/capa-${crypto
                    .randomBytes(8)
                    .toString("hex")}${safeExt}`;
                const up = await uploadPublicFile({
                    path: objectPath,
                    body: capa.buffer,
                    contentType: capa.mimetype,
                });
                imagemCapa = up.publicUrl;
            }
            const imagensData = imagens
                ? await Promise.all(imagens.map(async (img) => {
                    const fileExt = (img.originalname.split(".").pop() || "").toLowerCase();
                    const safeExt = fileExt ? `.${fileExt}` : "";
                    const objectPath = `projects/${usuarioId}/${uploadId}/img-${crypto
                        .randomBytes(8)
                        .toString("hex")}${safeExt}`;
                    const up = await uploadPublicFile({
                        path: objectPath,
                        body: img.buffer,
                        contentType: img.mimetype,
                    });
                    return { url: up.publicUrl };
                }))
                : [];
            const creteProjectService = new CreateProjectService();
            const project = await creteProjectService.execute({
                titulo,
                descricao,
                categoria,
                imagemCapa,
                usuarioId,
                imagens: imagensData,
                // 2. PASSAMOS OS NOVOS DADOS PARA O SERVICE
                cliente,
                prazo,
            });
            return res.json(project);
        }
    }
}
export { CreateProjectController };
//# sourceMappingURL=CreateProjectController.js.map