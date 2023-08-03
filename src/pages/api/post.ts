// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.body

  try {
    const post = await prisma.post.findUnique({
      select: {
        title: true,
        created_at: true,
        content: true,
        ig_url: true,
        kawai_url: true,
        tiktok_url: true,
        yt_url: true,
        author: true,
        image: true,
        category: {
          select: {
            name: true,
            slug: true
          }
        },
        post_has_tag: {
          select: {
            tag: {
              select: {
                tag: true,
                slug: true
              }
            },
          }
        },
      },
      where: {
        slug: slug
      }
    })
    res.status(200).json({ post: post })
  } catch (error) {
    console.log(error)
  }
}

// export const config = {
//   api: {
//     responseLimit: '128kb',
//   },
// }
