import { useQuery } from "@tanstack/react-query"
import userService from "../services/userService"


const useUser = (options?: {enabled?: boolean}) => {
    return useQuery({
        queryKey: ["user"],
        queryFn: userService,
        enabled: options?.enabled ?? true
    })
}

export default useUser;