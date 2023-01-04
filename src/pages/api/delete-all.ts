// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

type Data = any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const t = await prisma.user.deleteMany({
    where: {
      name: {
        endsWith: "dog",
      },
    },
  });

  res.status(200).json({ t });
}
