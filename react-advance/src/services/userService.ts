import authApi from "../lib/authApi"
import type { UserResponse } from "../type/User";


const userService = async (): Promise<UserResponse> => {
    const response = await authApi.get("/user");
    return response.data
}

export default userService;