import { KnightResponseModel } from "../../models/knight";
import { KnightRepository } from "../../interfaces/repositories/knight-repository";
import { GetAllKnightsUseCase } from "../../interfaces/use-cases/get-all-knight-use-case";

export class GetAllKnights implements GetAllKnightsUseCase {
    knightRepository: KnightRepository
    constructor(knightRepository: KnightRepository) {
        this.knightRepository = knightRepository
    }

    async execute(): Promise<KnightResponseModel[]> {
        const result = await this.knightRepository.getKnights()
        return result
    }
}