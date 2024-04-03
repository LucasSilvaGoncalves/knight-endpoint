import { KnightResponseModel } from "../../models/knight";

export interface GetAllKnightsUseCase {
    execute(): Promise<KnightResponseModel[]>;
}