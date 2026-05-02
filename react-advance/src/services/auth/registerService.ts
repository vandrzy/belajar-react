import type { AuthResponse, SignUpPayload, SignUpResponse } from "../../type/Auth";
import authApi from "../../lib/authApi";


const registerService = async (payload: SignUpPayload): Promise<AuthResponse<SignUpResponse>> => {
    const response = await authApi.post("/auth/register", payload);
    return response.data;
}

export default registerService;