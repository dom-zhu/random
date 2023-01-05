import { UsersForm } from "@/lib/users/UserForm";
import { getUsers } from "@/queries/users";
import { GetServerSideProps } from "next";
import { UsersList } from "../lib/users/UsersList";
import useSWR, { SWRConfig } from "swr";
import { User } from "@prisma/client";

type Props = {
  users: UserDto[];
};

export const getUsersFetcher = (url: string) =>
  fetch("/api/get-users").then((r) => r.json());

export type UserDto = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export default function UsersPage(props: Props) {
  return (
    <SWRConfig value={{ fallback: props.users }}>
      <Users />
    </SWRConfig>
  );
}

const Users = () => {
  const { data: users } = useSWR("/api/get-users", getUsersFetcher);

  return (
    <div className="w-full overflow-y-auto h-screen  bg-gray-300 grid justify-center ">
      <div className="bg-white rounded-3xl text-center px-5 py-4 my-10 w-96">
        {users && <UsersList users={users.map(mapUserToUserDto)} />}
        <UsersForm />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const users = await getUsers();

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

const mapUserToUserDto = (u: any): UserDto => ({
  id: u.id,
  name: u.name,
  createdAt: u.createdAt,
  updatedAt: u.updatedAt,
});
