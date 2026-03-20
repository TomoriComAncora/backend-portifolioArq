import { DetailProjectService } from "../../services/projects/DetailProjectService.js";
export class DetailProjectController {
    async handle(req, res) {
        const { id: projetoId } = req.params;
        const detailProjectService = new DetailProjectService();
        try {
            const projeto = await detailProjectService.execute({ projetoId });
            return res.json(projeto);
        }
        catch (error) {
            if (error.message === "Projeto não encontrado.") {
                return res.status(404).json({ error: error.message });
            }
            return res
                .status(500)
                .json({ message: "Erro ao buscar detalhes do projeto" });
        }
    }
}
//# sourceMappingURL=DetailProjectController.js.map