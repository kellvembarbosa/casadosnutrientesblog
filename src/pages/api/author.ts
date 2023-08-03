import { prisma } from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const authors = await prisma.author.findMany()
    res.setHeader('Cache-Control', 'max-age=86400')
    res.status(200).json({ authors })
  }
