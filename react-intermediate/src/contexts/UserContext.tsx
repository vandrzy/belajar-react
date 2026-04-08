import { createContext, useState } from "react";
import type { UserContextType } from "../types/UserContextType";
import type { User } from "../types/User";
import type { ReactNode } from "react";


export const UserContext = createContext<UserContextType| null>(null);

export const UserProvider = ({children}: {children: ReactNode }) => {
    const [user, setUser] = useState<User| null>({name: "user", age: 20});
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}