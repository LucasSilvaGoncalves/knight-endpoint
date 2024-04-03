import { KnightResponseModel } from "../../models/knight";

export interface GetOneKnightUseCase {
    execute(id: String): Promise<KnightResponseModel | null>;
}