import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleUser = () => setIsDarkMode((prev) => !prev)

    return (
        <UserContext.Provider value={{ isDarkMode, toggleUser }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser(){
    return useContext(UserContext)
}
