import { Router } from "express";
import * as db from "../db/data/ideas";
import { idea } from "../db/data/ideas";

const router = Router();

router.get('/ideas', async (req, res) => {
    try {
        const limit: number = parseInt(req.body.limit, 10)
        if (limit > 10) {
            res.status(400).json({ message: 'Cannot retrieve more than 10 ideas' })
        }
        const ideas: idea[] = await db.getAllIdeas(limit)
        res.sendStatus(200).json(ideas)

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong when getting ideas' })
    }
})

export default router
