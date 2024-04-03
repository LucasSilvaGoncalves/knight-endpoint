import { KnightRequestModel, KnightResponseModel } from "../../../domain/models/knight";

export interface KnightDataSource {
    create(knight: KnightRequestModel): void;
    getAll(): Promise<KnightResponseModel[]>;
    getOne(id: String): Promise<KnightResponseModel | null>;
    updateOne(id: String, data: KnightRequestModel): void;
    deleteOne(id: String): void;
}