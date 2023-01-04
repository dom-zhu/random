// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const name = req.query.name as string;

  const user = await prisma.user.create({
    data: {
      name,
    },
  });

  res.status(200).json(user);
}
