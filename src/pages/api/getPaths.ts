// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  paths: {
    slug: string;
  }[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    try {
      const paths = await prisma.post.findMany({
        select: {
          title: false,
          created_at: false,
          content: false,
          slug: true,
          idpost: false,
          image: false,
          ig_url: false,
          kawai_url: false,
          tiktok_url: false,
          yt_url: false
        }
      })
      res.status(200).json({
        paths: paths
      })
    } catch (error) {
      console.log(error)
    }
  }
}
