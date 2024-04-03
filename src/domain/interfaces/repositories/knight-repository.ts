import { KnightRequestModel, KnightResponseModel } from "../../models/knight";

export interface KnightRepository {
    createKnight(Knight: KnightRequestModel): void;
    getKnights(): Promise<KnightResponseModel[]>;
    getOneKnight(id: String): Promise<KnightResponseModel | null>;
    updateKnight(id: String, data: KnightRequestModel): void;
    deleteKnight(id: String): void;
}