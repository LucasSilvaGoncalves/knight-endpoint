import { KnightRepository } from "../../interfaces/repositories/knight-repository";
import { DeleteKnightUseCase } from "../../interfaces/use-cases/delete-knight-use-case";


export class DeleteKnight implements DeleteKnightUseCase {
    knightRepository: KnightRepository
    constructor(knightRepository: KnightRepository) {
        this.knightRepository = knightRepository
    }

    async execute(id: String) {
        await this.knightRepository.deleteKnight(id)

    }
}