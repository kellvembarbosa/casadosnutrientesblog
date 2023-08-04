// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import { author } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  posts: {
    slug: string;
    title: string;
    content: string;
    created_at: Date | null;
    image: string;
    author: author
  }[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const posts = await prisma.post.findMany({
      select: {
        title: true,
        created_at: true,
        content: true,
        slug: true,
        image: true,
        author: true
      },
      take: 6,
      orderBy: {
        created_at: 'desc'
      }
    })

    res.setHeader('Cache-Control', 'max-age=86400')
    res.status(200).json({ posts: posts })
  } catch (error) {
    console.log(error)
  }
}

// export const config = {
//   api: {
//     responseLimit: '128kb',
//   },
// }
