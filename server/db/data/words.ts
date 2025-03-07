import db from '../connection.ts'

export async function getAllWords() {
    const words = await db('words').select()
    return words // as type
}

