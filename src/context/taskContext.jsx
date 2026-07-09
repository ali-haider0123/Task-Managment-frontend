import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext({
  task: null,
  setTask: () => { },
});

export default function TaskProvider({ children }) {
  const [task, setTask] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchTasks() {
      try {
        setIsLoading(true);

        let url = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

        let token = localStorage.getItem("token")

        const res = await fetch(`${url}/api/v1/task`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token

          },
        })
        if (!res.ok) {
          return;
        }

        const data = await res.json();

        setTask(data);
        console.log(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTasks()
  }, [])
  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
}
