/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext({
  task: null,
  setTask: () => { },
  isLoading: false,
});

export default function TaskProvider({ children }) {
  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchTasks() {
      try {
        setIsLoading(true);

        let url = import.meta.env.VITE_BACKEND_URL;

        let token = localStorage.getItem("token");

        const res = await fetch(`${url}/api/v1/task`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        if (!res.ok) {
          return;
        }

        const data = await res.json();

        setTask(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ task, setTask, isLoading }}>
      {children}
    </TaskContext.Provider>
  );
}
