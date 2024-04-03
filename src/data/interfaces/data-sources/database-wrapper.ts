export interface DatabaseWrapper {
    find(query: object): Promise<any[]>
    findById(id: String): void
    insertOne(doc: any): void
    deleteOne(id: String): void
    updateOne(id: String, data: object): void
}