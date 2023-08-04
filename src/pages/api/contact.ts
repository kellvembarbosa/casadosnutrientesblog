// pages/api/contact.ts
import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);
  
  if (req.method === 'POST') {
    try {
      const data: FormData = req.body;

      // Salvar os dados no banco de dados usando o Prisma
      await prisma.contact.create({
        data: {
          name: data.name,
          email: data.email,
          message: data.message,
        },
      });

      res.status(200).end();
    } catch (error) {
      console.error(error);
      res.status(500).end();
    }
  } else {
    res.status(405).end();
  }
};

export default handler;
