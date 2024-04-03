// domain/repositories/Knight-repository.ts
import { KnightDataSource } from "../../data/interfaces/data-sources/knight-data-source";
import { KnightRequestModel, KnightResponseModel } from "../models/knight";
import { KnightRepository } from "../interfaces/repositories/knight-repository";

export class KnightRepositoryImpl implements KnightRepository {
    KnightDataSource: KnightDataSource
    constructor(KnightDataSource: KnightDataSource) {
        this.KnightDataSource = KnightDataSource
    }
    async deleteKnight(id: String) {
        await this.KnightDataSource.deleteOne(id)
    }
    async updateKnight(id: String, data: KnightRequestModel) {
        await this.KnightDataSource.updateOne(id, data);
    }
    async getOneKnight(id: String): Promise<KnightResponseModel | null> {
        const result = await this.KnightDataSource.getOne(id);
        return result;
    }
    async createKnight(Knight: KnightRequestModel) {
        await this.KnightDataSource.create(Knight)
    }
    async getKnights(): Promise<KnightResponseModel[]> {
        const result = await this.KnightDataSource.getAll()
        return result;
    }
}