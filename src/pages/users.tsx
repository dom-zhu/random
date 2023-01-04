import { prisma } from "@/lib/prisma";
import { UsersForm } from "@/lib/users/UserForm";
import { GetServerSideProps } from "next";
import { UsersList } from "../lib/users/UsersList";

// function to make 10 users
const makeUsers = () => {
  const users = [];
  for (let i = 0; i < 5; i++) {
    users.push({
      id: i,
      createdAt: new Date().toDateString(),
      name: "abc",
      updatedAt: new Date().toDateString(),
    });
  }
  return users;
};

type Props = {
  users: UserDto[];
};

export type UserDto = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export default function Users(props: Props) {
  return (
    <div className="w-full h-screen  bg-gray-300 grid justify-center ">
      <div className="bg-white rounded-3xl text-center px-5 py-4 my-10 w-96">
        <UsersList users={props.users} />
        <UsersForm />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const users = await prisma.user.findMany();

  const mappedUsers: UserDto[] = users.map((u) => ({
    id: u.id,
    name: u.name,
    createdAt: u.createdAt.toDateString(),
    updatedAt: u.updatedAt.toDateString(),
  }));

  return {
    props: {
      users: mappedUsers,
    },
  };
};
