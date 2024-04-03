import { KnightRequestModel } from "../../models/knight";
import { KnightRepository } from "../../interfaces/repositories/knight-repository";
import { CreateKnightUseCase } from "../../interfaces/use-cases/create-knight-use-case";


export class CreateKnight implements CreateKnightUseCase {
    KnightRepository: KnightRepository
    constructor(KnightRepository: KnightRepository) {
        this.KnightRepository = KnightRepository
    }

    async execute(Knight: KnightRequestModel) {
        await this.KnightRepository.createKnight(Knight)

    }
}