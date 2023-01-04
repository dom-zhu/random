import { UserDto } from "@/pages";

type Props = {
  users: UserDto[];
};

export const UsersList = (props: Props) => {
  return (
    <div className="grid grid-cols-1 gap-3 mb-4">
      {props.users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const UserItem = ({ user }: { user: UserDto }) => {
  return (
    <div className="grid grid-cols-3 bg-lime-300 rounded-md">
      <div>
        <div className="font-bold">{user.name}</div>
        <div>{user.id}</div>
      </div>
      <div className="col-span-2 text-xs">
        <div>Created at: {user.createdAt}</div>
        <div>Updated at: {user.updatedAt}</div>
      </div>
    </div>
  );
};
