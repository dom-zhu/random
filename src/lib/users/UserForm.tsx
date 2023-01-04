import axios from "axios";
import React, { useState } from "react";

export const UsersForm = () => {
  const [name, setName] = useState("");

  const handleAddUser = async (e: React.FormEvent) => {
    /**
     * TODO: use swr, invalidate state when user added
     */
    e.preventDefault();

    await axios.get(`/api/add-user`, { params: { name } });
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
