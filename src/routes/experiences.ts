import express from 'express';
import prisma from '../util/prisma';
const router = express.Router();

/* GET experences. */
router.get('/experience', async (req, res, next) => {
    const experiences = prisma.experience.findMany()

    res.json(experiences)
});

export default router;
