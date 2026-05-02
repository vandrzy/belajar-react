import axios from "axios";
import type { AuthResponse, LoginPayload, LoginResponse } from "../../type/Auth";


const loginService = async (payload: LoginPayload): Promise<AuthResponse<LoginResponse>> => {
    const response = await axios.post("http://localhost:3000/api/auth/login", payload);
    return response.data
}

export default loginService;