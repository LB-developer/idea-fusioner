import { Idea, IdeaData } from '../../../models/ideas.ts'
import db from '../connection.ts'

export async function getAllIdeas() {
  const ideas = await db('ideas').select()
  return ideas as Idea[] // as type
}

export async function createNewIdea({ idea }: IdeaData) {
  const result = await db('ideas').insert({ idea }, ['id'])
  return result[0].id
}
