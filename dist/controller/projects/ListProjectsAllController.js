import { ListProjectsAllService } from "../../services/projects/ListProjectsAllService.js";
class ListProjectsAllController {
    async handle(req, res) {
        const listProjectsAllService = new ListProjectsAllService();
        const listaTodosProjetos = await listProjectsAllService.execute();
        return res.json(listaTodosProjetos);
    }
}
export { ListProjectsAllController };
//# sourceMappingURL=ListProjectsAllController.js.map