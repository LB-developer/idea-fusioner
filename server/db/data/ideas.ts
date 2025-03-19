import { Idea, IdeaData } from '../../../models/ideas.ts'
import db from '../connection.ts'

export async function getAllIdeas(limit: number) {
    const ideas = await db('ideas')
        .select()
        .orderByRaw('RANDOM()')
        .limit(limit)
    return ideas as Idea[]
}

export async function createNewIdea({ idea }: IdeaData) {
    const result = await db('ideas').insert({ idea }, ['id'])
    return result[0].id
}
