import type { AuthResponse, LoginPayload, LoginResponse } from "../../type/Auth";
import authApi from "../../lib/authApi";


const loginService = async (payload: LoginPayload): Promise<AuthResponse<LoginResponse>> => {
    const response = await authApi.post("/auth/login", payload);
    return response.data
}

export default loginService;