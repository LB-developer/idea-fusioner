import { Router } from "express";
import { Idea } from "../../models/ideas";
import * as db from "../db/data/ideas";

const router = Router();

router.get('/', async (req, res) => {
  try {
    const limit: number = parseInt(req.body.limit, 10)
    if (limit > 10) {
      res.status(400).json({ message: 'Cannot retrieve more than 10 ideas' })
    }
    const ideas: Idea[] = await db.getAllIdeas(limit)
    res.sendStatus(200).json(ideas)
  } catch (error) {
    res.status(500).json({ message: `Something went wrong when getting ideas - error: ${error}` })
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
