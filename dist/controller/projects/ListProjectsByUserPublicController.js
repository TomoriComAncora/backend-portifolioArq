import { ListProjectsByUserPublicService } from "../../services/projects/ListProjectsByUserPublicService.js";
class ListProjectsByUserPublicController {
    async handle(req, res) {
        const { userId } = req.params;
        if (!userId) {
            return res.status(400).json({ error: "userId é obrigatório" });
        }
        const service = new ListProjectsByUserPublicService();
        const data = await service.execute({ userId });
        if (!data.usuario) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }
        return res.json(data);
    }
}
export { ListProjectsByUserPublicController };
//# sourceMappingURL=ListProjectsByUserPublicController.js.map