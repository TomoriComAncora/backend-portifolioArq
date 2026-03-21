import express from "express";
import { router } from "./routes.js";
import cors from "cors";
import passport from "./config/passaport.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(router);
// Middleware de erro
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
    }
    return res
        .status(500)
        .json({ status: "error", message: "Internal server error." });
});
const port = Number(process.env.PORT) || 3333;
app.listen(port, () => {
});
//# sourceMappingURL=server.js.map