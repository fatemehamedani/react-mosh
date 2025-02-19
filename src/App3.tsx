import { CanceledError } from "./services/api-client";
import { useEffect, useState } from "react";
import userService, { User } from "./services/user-services";

function App3() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userService.deleteUser(user.id).catch((error) => {
      setError(error.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = { ...users };
    const newUser = { id: 0, name: "fatemeh" };
    setUsers([...users, newUser]);
    userService
      .createUser(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((error) => {
        setError(error.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = { ...users };
    const updatedUser = { ...user, name: user.name + " !" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.updateUser(updatedUser).catch((error) => {
      setError(error.message);
      setUsers(originalUsers);
    });
  };

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAllUsers();
    request
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
    return () => cancel();
  }, []);

  return (
    <>
      {error && <p className="text-red-600">{error}</p>}
      {loading && (
        <div className="w-8 h-8 border-4 border-gray-500 border-t-blue-600 rounded-full animate-spin"></div>
      )}

      <button
        className=" text-white border rounded-lg bg-blue-600 ml-3 py-1 mt-1 w-16"
        onClick={addUser}
      >
        Add
      </button>

      <ul className=" ml-4 divide-y divide-gray-600">
        {users.map((user) => (
          <li key={user.id} className="flex justify-between">
            {user.name}
            <div>
              <button
                className="text-gray-600 border border-gray-600 rounded-md py-2 mt-4 w-24"
                onClick={() => updateUser(user)}
              >
                Updata
              </button>

              <button
                className="text-gray-600 rounded-md border border-red-500 py-2 mt-4 w-24 mx-2"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App3;
