// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/lib/prisma'
import { post } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  posts: post[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const posts = await prisma.post.findMany({
      take: 10
    })
    res.status(200).json({ posts: posts })
  } catch (error) {
    console.log(error)
  }
}
