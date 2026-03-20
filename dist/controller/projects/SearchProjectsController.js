import { SearchProjectsService } from "../../services/projects/SearchProjectsService.js";
export class SearchProjectsController {
    async handle(req, res) {
        const { q } = req.query;
        if (!q) {
            return res
                .status(400)
                .json({ error: "Termo de pesquisa é obrigatório." });
        }
        const searchProjectsService = new SearchProjectsService();
        try {
            const projetos = await searchProjectsService.execute({
                query: String(q),
            });
            return res.json(projetos);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Erro ao buscar projetos." });
        }
    }
}
//# sourceMappingURL=SearchProjectsController.js.map