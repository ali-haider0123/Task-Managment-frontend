import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const CategoriesContext = createContext({
  categories: null,
  setCategories: () => { },
});

export { CategoriesContext };

export default function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8080/api/v1/category/");
        if (!res.ok) {
          return;
        }

        const data = await res.json();

        setCategories(data);
        console.log(data)
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCategories()
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {isLoading ? "Loading" : children}
    </CategoriesContext.Provider>
  );
}
