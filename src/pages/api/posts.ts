import { prisma } from '@/lib/prisma';
import { Prisma, author } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  posts: {
    idpost: number;
    slug: string;
    title: string;
    content: string;
    created_at: Date | null;
    image: string;
    author: author
  }[];
  myCursor: number;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { cursor } = req.query ?? undefined;

  const postId: Prisma.postWhereUniqueInput = {
    idpost: cursor ? parseInt(cursor as string) : undefined,
  };
  
  try {
    const posts = await prisma.post.findMany({
      select: {
        idpost: true,
        title: true,
        created_at: true,
        content: true,
        slug: true,
        image: true,
        author: true,
      },
      take: 4,
      skip: postId.idpost ? 1 : undefined,
      cursor: postId.idpost ? postId : undefined,
      orderBy: {
        created_at: 'desc',
      },
    });

    const lastPostInResults = (posts.length > 0) ? posts[posts.length - 1] : undefined;
    const myCursor = lastPostInResults?.idpost || 0;

    res.status(200).json({ posts, myCursor });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
