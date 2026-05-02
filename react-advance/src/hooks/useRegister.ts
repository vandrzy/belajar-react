import { useMutation } from "@tanstack/react-query"
import registerService from "../services/auth/registerService"
import type { AuthResponse, FailedResponse, SignUpPayload, SignUpResponse } from "../type/Auth"
import { AxiosError } from "axios"


const useRegister = () => {
    return useMutation<AuthResponse<SignUpResponse>,AxiosError<FailedResponse>, SignUpPayload>({
        mutationFn: registerService
    })
} 

export default useRegister;