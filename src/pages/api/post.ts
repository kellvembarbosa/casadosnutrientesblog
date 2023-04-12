// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import { category, post_has_tag } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  post: {
    category: {
        name: string;
        slug: string | null;
    };
    post_has_tag: {
        tag: {
            tag: string | null;
            slug: string | null;
        };
    }[];
    title: string;
    content: string;
    ig_url: string | null;
    kawai_url: string | null;
    tiktok_url: string;
    yt_url: string | null;
    created_at: Date | null;
} | null
  imagesSTR: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { slug } = req.body
  try {
    const post = await prisma.post.findUnique({
      select: {
        title: true,
        category: {
          select: {
            name: true,
            slug: true
          },
        },
        created_at: true,
        content: true,
        ig_url: true,
        kawai_url: true,
        tiktok_url: true,
        yt_url: true,
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
    console.log(
      JSON.stringify({ posts: post, imagesSTR}).length
    );

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
