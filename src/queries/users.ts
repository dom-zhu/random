import { prisma } from "@/lib/prisma";

export const getUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const addUser = async (name: string) => {
  const user = await prisma.user.create({
    data: {
      name,
    },
  });

  return user;
};
