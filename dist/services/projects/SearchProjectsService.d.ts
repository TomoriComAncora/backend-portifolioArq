interface ISearchRequest {
    query: string;
}
export declare class SearchProjectsService {
    execute({ query }: ISearchRequest): Promise<{
        id: string;
        titulo: string;
        imagemCapa: string;
    }[]>;
}
export {};
//# sourceMappingURL=SearchProjectsService.d.ts.map