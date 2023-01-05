import axios from "axios";
import React, { useState } from "react";
import { useSWRConfig } from "swr";

export const UsersForm = () => {
  const [name, setName] = useState("");
  const { mutate } = useSWRConfig();

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();

    await axios.get(`/api/add-user`, { params: { name } });
    mutate("/api/get-users");
  };

  return (
    <form onSubmit={handleAddUser} className="grid gap-2 grid-cols-3">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-gray-400 border col-span-2 rounded-md px-2"
      />
      <button className="bg-green-500 px-3 py-2 rounded-md">Add user</button>
    </form>
  );
};
