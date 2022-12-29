import React from "react";
import { useQuery } from "react-query";
import { deleteUser, getUser } from "../lib/helper";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { useMutation, useQueryClient } from "react-query";

const Table = () => {
  const { data, isLoading } = useQuery("users", getUser);
  const queryClient = useQueryClient();
  const deledeMutaion = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.prefetchQuery("users", getUser);
    },
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleDelete = (id) => {
    return deledeMutaion.mutate(id);
  };
  return (
    <div>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-16 py-2">
              <span className="text-gray-200">Name</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Email</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Salary</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Birthday</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Status</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {data?.user.length > 0 &&
            data?.user.map((user) => {
              const { _id, name, email, date, status, avatar, salary } = user;
              return (
                <>
                  <tr className="bg-gray-50 text-center" key={user._id}>
                    <td className="px-16 py-2 flex flex-row items-center">
                      <img
                        src={avatar}
                        height={32}
                        width={32}
                        className="h-8 w-8 rounded-full"
                        alt=""
                      />
                      <span className="text-center ml-2 font-semibold">
                        {name}
                      </span>
                    </td>
                    <td className="px-16 py-2">
                      <span>{email}</span>
                    </td>
                    <td className="px-16 py-2">
                      <span>${salary}</span>
                    </td>
                    <td className="px-16 py-2">
                      <span>{date}</span>
                    </td>
                    <td className="px-16 py-2">
                      <button className="cursor">
                        <span className="bg-green-500 text-white px-5 py-1 rounded-full">
                          {status}
                        </span>
                      </button>
                    </td>
                    <td className="px-16 py-2 flex justify-around gap-5">
                      <button
                        className="cursor"
                        onClick={() => handleUpdate(user._id)}
                      >
                        <BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit>
                      </button>
                      <button
                        onClick={() => handleDelete(_id)}
                        className="cursor"
                      >
                        <BiTrashAlt
                          size={25}
                          color={"rgb(244,63,94)"}
                        ></BiTrashAlt>
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
