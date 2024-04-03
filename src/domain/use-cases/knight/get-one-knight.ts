import { KnightResponseModel } from "../../models/knight";
import { KnightRepository } from "../../interfaces/repositories/knight-repository";
import { GetOneKnightUseCase } from "../../interfaces/use-cases/get-one-knight-use-case";

export class GetOneKnight implements GetOneKnightUseCase {
    knightRepository: KnightRepository
    constructor(knightRepository: KnightRepository) {
        this.knightRepository = knightRepository
    }

    async execute(id: String): Promise<KnightResponseModel | null> {
        const result = await this.knightRepository.getOneKnight(id)
        return result
    }
}