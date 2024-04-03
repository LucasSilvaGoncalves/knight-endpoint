import server from './server'
import 'dotenv/config'
require('dotenv').config()
import { MongoClient } from 'mongodb'
import KnightRouter from './presentation/routers/knight-router'
import { GetAllKnights } from './domain/use-cases/knight/get-all-knights'
import { GetOneKnight } from './domain/use-cases/knight/get-one-knight'
import { KnightRepositoryImpl } from './domain/repositories/knight-repository'
import { CreateKnight } from './domain/use-cases/knight/create-knight'
import { DeleteKnight } from './domain/use-cases/knight/delete-knight'
import { UpdateKnight } from './domain/use-cases/knight/update-knight'
import { DatabaseWrapper } from './data/interfaces/data-sources/database-wrapper'
import { MongoDBKnightDataSource } from './data/data-sources/mongodb/mongodb-knight-data-source'

async function getMongoConnect() {
    const client: MongoClient = new MongoClient(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@${process.env.DATABASE_URL}/?retryWrites=true&w=majority`)
    await client.connect()
    const db = client.db("knights_database");

    const knightDatabase: DatabaseWrapper = {
        find: (query: any) => db.collection("knights").find(query).toArray(),
        findById: (query: String) => db.collection("knights").find(query).toArray(),
        insertOne: (doc: any) => db.collection("knights").insertOne(doc),
        deleteOne: (id: String) => db.collection("knights").deleteOne({ id: id }),
        updateOne: (id: String, data: object) => db.collection("knights").updateOne({ id: id }, data)
    }

    return new MongoDBKnightDataSource(knightDatabase);
}


(async () => {
    const dataSource = await getMongoConnect();

    const knightMiddleWare = KnightRouter(
        new GetAllKnights(new KnightRepositoryImpl(dataSource)),
        new CreateKnight(new KnightRepositoryImpl(dataSource)),
        new GetOneKnight(new KnightRepositoryImpl(dataSource)),
        new DeleteKnight(new KnightRepositoryImpl(dataSource)),
        new UpdateKnight(new KnightRepositoryImpl(dataSource)),  
    )

    server.use("/knight", knightMiddleWare)
    server.listen(4000, () => console.log("Running app on: http://localhost:4000"))

})()