import { KnightRequestModel, KnightResponseModel } from "../../../domain/models/knight";
import { KnightDataSource } from "../../interfaces/data-sources/knight-data-source";
import { DatabaseWrapper } from "../../interfaces/data-sources/database-wrapper";

export class MongoDBKnightDataSource implements KnightDataSource {

    private db: DatabaseWrapper
    constructor(db: DatabaseWrapper) {
        this.db = db
    }
    async deleteOne(id: String) {
        await this.db.deleteOne(id)
    }
    async updateOne(id: String, data: KnightRequestModel) {
        await this.db.updateOne(id, data)
    }
    async getOne(id: String): Promise<KnightResponseModel> {
        const result = await this.db.find({ id: id })
        return result.map(item => ({
            id: item._id.toString(),
            name: item.name,
            nickname: item.nickname,
            birthday: item.birthday,
            weapons: item.weapons,
            attributes: item.attributes,
            keyAttribute: item.keyAttribute
        }))[0]
    }

    async create(knight: KnightRequestModel) {
        await this.db.insertOne(knight)
    }

    async getAll(): Promise<KnightResponseModel[]> {
        const result = await this.db.find({})
        return result.map(item => ({
            id: item._id.toString(),
            name: item.name,
            nickname: item.nickname,
            birthday: item.birthday,
            weapons: item.weapons,
            attributes: item.attributes,
            keyAttribute: item.keyAttribute
        }));
    }

}