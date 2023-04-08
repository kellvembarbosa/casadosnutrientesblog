// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import { category, post, tag } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  post: post | string,
  imagesSTR: string
//   category: category,
//   tags: tag[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { slug }= JSON.parse(req.body)

    // res.status(200)

  try {

    const post = await prisma.post.findUnique({
        where: {
            slug: slug
        }
    })

    const imagesSTR = post?.image.toString('base64') ?? ''




    res.status(200).json({ post: post?? 'Nenhum post encontrado!', imagesSTR: imagesSTR})
  } catch (error) {
    console.log(error)
  }
}
