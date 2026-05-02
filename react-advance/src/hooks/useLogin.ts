import { useMutation } from "@tanstack/react-query"
import type { AuthResponse, FailedResponse, LoginPayload, LoginResponse } from "../type/Auth"
import { AxiosError } from "axios"
import loginService from "../services/auth/loginService"

const useLogin = () => {
    return useMutation<AuthResponse<LoginResponse>,AxiosError<FailedResponse>,LoginPayload>({
        mutationFn: loginService
    })
}

export default useLogin;