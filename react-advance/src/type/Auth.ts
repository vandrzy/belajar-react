

export type SignUpPayload = {
    username: string;
    email: string;
    password: string;
}

export type LoginPayload = {
    email: string;
    password: string;
}

export type AuthResponse<T> = {
    success: boolean;
    timestamps: string;
    message: string;
    data: T
} 

export type SignUpResponse = {
    username: string;
    email: string;
}


export type LoginResponse ={
    login: boolean;
    token: string;
}

export type FailedResponse = {
    success: boolean;
    timestamps: string;
    message: string,
    error: string
}