import { ListProjectService } from "../../services/projects/ListProjectService.js";
class ListProjectController {
    async handle(req, res) {
        const user_id = req.user_id;
        const listProjectService = new ListProjectService();
        const listaProjeto = await listProjectService.execute(user_id);
        return res.json(listaProjeto);
    }
}
export { ListProjectController };
//# sourceMappingURL=ListProjectController.js.map