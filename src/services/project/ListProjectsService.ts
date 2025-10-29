import { prisma } from "../../prisma.js"; 


interface IListRequest {
  categoria?: string;
  page: number;
  limit: number;
}

export class ListProjectsService {
  async execute({ categoria, page, limit }: IListRequest) {
  
    const skip = (page - 1) * limit;

   
    const where = {
      categoria: categoria ? categoria : undefined,
    };

    
    const [projetos, total] = await Promise.all([
      prisma.projeto.findMany({
        where,
        take: limit, 
        skip: skip, 
        orderBy: {
          createdAt: 'desc', 
        },
      }),

      prisma.projeto.count({
        where,
      }),
    ]);

    return {
      data: projetos,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit), 
    };
  }
}