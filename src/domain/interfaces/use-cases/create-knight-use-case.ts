import { KnightRequestModel } from "../../models/knight";

export interface CreateKnightUseCase {
    execute(knight: KnightRequestModel): void;
}