import { KnightRepository } from "../../interfaces/repositories/knight-repository";
import { UpdateKnightUseCase } from "../../interfaces/use-cases/update-knight-use-case";
import { KnightRequestModel } from "../../models/knight";


export class UpdateKnight implements UpdateKnightUseCase {
    knightRepository: KnightRepository
    constructor(knightRepository: KnightRepository) {
        this.knightRepository = knightRepository
    }

    async execute(id: String, data: KnightRequestModel) {
        await this.knightRepository.updateKnight(id, data)

    }
}