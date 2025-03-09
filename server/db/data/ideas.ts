import db from '../connection.ts'

export type idea = string

export async function getAllIdeas(limit: number) {
    const ideas = await db('ideas').select().limit(limit)
    return ideas as idea[]
}

