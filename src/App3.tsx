import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

function App3() {
  interface User {
    id: number;
    name: string;
  }

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((response) => {
        setUsers(response.data) 
        setLoading(false)
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false)
      });
    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p className="text-red-600">{error}</p>}
      {loading && <div className="w-8 h-8 border-4 border-gray-500 border-t-blue-600 rounded-full animate-spin"></div>}
        
     <ul className="ml-4">
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App3;
