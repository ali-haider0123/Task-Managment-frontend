/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { useState, } from "react";

export const UserContext = createContext({
    user: null,
    setUser: () => { },
    Logout: () => { }
})

export default function UserProvider({ children }) {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");

        if (storedUser && storedUser !== "undefined") {
            try {
                return JSON.parse(storedUser);
            } catch (error) {
                console.error("Failed to parse user from localStorage", error);
                localStorage.removeItem("user");
            }
        }

        return null;
    });

    function Logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, setUser, Logout }}>
            {children}
        </UserContext.Provider>
    )
}