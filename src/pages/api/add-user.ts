// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { addUser } from "@/queries/users";
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const name = req.query.name as string;
  const user = await addUser(name);

  res.status(200).json(user);
}
