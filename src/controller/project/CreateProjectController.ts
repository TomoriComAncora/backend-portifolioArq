import { Request, Response } from 'express';
import { CreateProjectService } from '../../services/project/CreateProjectService.js';

export class CreateProjectController {
  async handle(req: Request, res: Response) {
    const { titulo, descricao, categoria } = req.body;
    const { user_id } = req;
    
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const imagemCapaFile = files?.imagemCapa?.[0];
    const imagensExtrasFiles = files?.imagensExtras || [];

    const createProjectService = new CreateProjectService();

    try {
      const projeto = await createProjectService.execute({
        titulo,
        descricao,
        categoria,
        usuarioId: user_id,
        imagemCapa: imagemCapaFile,
        imagensExtras: imagensExtrasFiles,
      });

      return res.status(201).json(projeto);

    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}