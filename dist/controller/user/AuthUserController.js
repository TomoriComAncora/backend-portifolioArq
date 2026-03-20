import { AuthUserService } from "../../services/user/AuthUserService.js";
class AuthUserController {
    async handle(req, res) {
        const { email, senha } = req.body;
        const authUserService = new AuthUserService();
        const auth = await authUserService.execute({ email, senha });
        return res.json(auth);
    }
}
export { AuthUserController };
//# sourceMappingURL=AuthUserController.js.map