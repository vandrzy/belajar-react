import axios from "axios";
import type { AuthResponse, SignUpPayload, SignUpResponse } from "../../type/Auth";


const registerService = async (payload: SignUpPayload): Promise<AuthResponse<SignUpResponse>> => {
    const response = await axios.post("http://localhost:3000/api/auth/register", payload);
    return response.data;
}

export default registerService;