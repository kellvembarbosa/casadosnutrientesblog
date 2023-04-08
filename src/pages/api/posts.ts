// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import { post } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  posts: post[],
  imagesSTR: string[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const posts = await prisma.post.findMany({
      take: 10
    })
    //Precisa fazer essa separação aqui, pois no cliente não é possível utilizar image.toString('base64')
    const imagesSTR = posts.map(post => post.image).map(image => image.toString('base64'))

    res.status(200).json({ posts: posts, imagesSTR: imagesSTR })
  } catch (error) {
    console.log(error)
  }
}
