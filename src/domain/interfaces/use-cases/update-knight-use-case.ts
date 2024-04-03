import { KnightRequestModel } from "../../models/knight";

export interface UpdateKnightUseCase {
    execute(id: String, data: KnightRequestModel): void;
}