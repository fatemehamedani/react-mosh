import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

function App3() {
  interface User {
    id: number;
    name: string;
  }

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const Response = await axios(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(Response.data);
      } catch (error) {
        setError((error as AxiosError).message);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      {error && <p className="text-red-600">{error}</p>}
      <ul className="ml-4">
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App3;
