import request from 'superagent'
import { Idea } from '../../models/ideas'

const baseUrl = '/api/v1/ideas'

export async function fetchIdeas(limit: number) {
  try {
    const res = await request
      .get(`${baseUrl}`)
      .query({ "limit": limit })
    return res.body as Idea[]
  } catch (error) {
    console.error(error)
    return [] as Idea[]
  }
}
