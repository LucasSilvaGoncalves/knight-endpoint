import express from 'express'
import { Request, Response } from 'express'
import { CreateKnightUseCase } from '../../domain/interfaces/use-cases/create-knight-use-case'
import { GetAllKnightsUseCase } from '../../domain/interfaces/use-cases/get-all-knight-use-case'
import { GetOneKnightUseCase } from '../../domain/interfaces/use-cases/get-one-knight-use-case'
import { DeleteKnightUseCase } from '../../domain/interfaces/use-cases/delete-knight-use-case'
import { UpdateKnightUseCase } from '../../domain/interfaces/use-cases/update-knight-use-case'


export default function KnightsRouter(
    getAllKnightsUseCase: GetAllKnightsUseCase,
    createKnightUseCase: CreateKnightUseCase,
    getOneKnightUseCase: GetOneKnightUseCase,
    deleteKnightUseCase: DeleteKnightUseCase,
    updateKnightUseCase: UpdateKnightUseCase
) {
    const router = express.Router()

    router.get('/', async (req: Request, res: Response) => {
        try {
            const knights = await getAllKnightsUseCase.execute()
            res.send(knights)
        } catch (err) {
            res.status(500).send({ message: "Error fetching data" })
        }
    })

    router.get('/:id', async (req: Request, res: Response) => {
        try {
            const knights = await getOneKnightUseCase.execute(req.params.id)
            res.send(knights)
        } catch (err) {
            res.status(500).send({ message: "Error fetching data" })
        }
    })

    router.post('/', async (req: Request, res: Response) => {
        try {
            await createKnightUseCase.execute(req.body)
            res.statusCode = 201
            res.json({ message: "Created" })
        } catch (err) {
            res.status(500).send({ message: "Error saving data" })
        }
    })

    router.delete('/:id', async (req: Request, res: Response) => {
        try {
            await deleteKnightUseCase.execute(req.params.id)
            res.statusCode = 204
            res.json({ message: "Deleted" })
        } catch (err) {
            res.status(500).send({ message: "Error delete data" })
        }
    })

    router.put('/:id', async (req: Request, res: Response) => {
        try {
            await updateKnightUseCase.execute(req.params.id, req.body)
            res.statusCode = 200
            res.json({ message: "Updated" })
        } catch (err) {
            console.log(err)
            res.status(500).send({ message: "Error update data" })
        }
    })

    return router
}