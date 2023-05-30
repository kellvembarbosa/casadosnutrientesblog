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

    const images = await prisma.post.findUnique({
      select: {
        title: false,
        created_at: false,
        content: false,
        slug: false,
        idpost: false,
        image: true,
        ig_url: false,
        kawai_url: false,
        tiktok_url: false,
        yt_url: false
      },
      where: {
        slug: slug
      }
    })

    //Precisa fazer essa separação aqui, pois no cliente não é possível utilizar image.toString('base64')
    const imagesSTR = images!.image.toString('base64')
    console.log(post?.author.name);
    
    // console.log(
    //   JSON.stringify({ posts: post, imagesSTR }).length
    // );
    res.setHeader('Cache-Control', 'max-age=86400')
    res.status(200).json({ post: post , imagesSTR: imagesSTR})
  } catch (error) {
    console.log(error)
  }
}

// export const config = {
//   api: {
//     responseLimit: '128kb',
//   },
// }
