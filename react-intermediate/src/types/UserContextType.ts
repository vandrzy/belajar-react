import type { User } from "./User"

export type UserContextType = {
    user: User| null;
    setUser: React.Dispatch<React.SetStateAction<User| null>>
}