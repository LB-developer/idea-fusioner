import express from 'express'
import * as db from '../db/data/words.ts'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const ideas = await db.getAllIdeas()
    res.json(ideas)
  } catch (error) {
    console.error('Error fetching ideas: ', error)
    res.status(500).json(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const newIdea = req.body
    const id = await db.createNewIdea(newIdea)
    res.status(201).json(id)
  } catch (error) {
    console.error('Error: ', error)
    res.status(500).json(error)
  }
})

export default router
